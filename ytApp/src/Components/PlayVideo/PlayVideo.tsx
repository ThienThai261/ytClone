import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY, value_converter } from '../../data';
import { data } from 'react-router-dom';
import moment from 'moment';

const PlayVideo = ({ videoId }) => {
  function convertDuration(isoDuration) {
    const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (match[1] || '0H').slice(0, -1);
    const minutes = (match[2] || '0M').slice(0, -1);
    const seconds = (match[3] || '0S').slice(0, -1);

    if (hours !== '0') {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes !== '0') {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  }
  const [chanelData, setChanelData] = useState(null);
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  const fetchVideoData = async () => {
    const videoDetail = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    try {
      const res = await fetch(videoDetail);
      const data = await res.json();
      setApiData(data.items[0]);
    } catch (error) {
      console.error('Failed to fetch video data:', error);
    }
  };
  const fetchChanelData = async () => {
    if (!apiData) return;

    const channelId = apiData.snippet.channelId;
    const channelDataUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;

    try {
      const res = await fetch(channelDataUrl);
      const data = await res.json();
      setChanelData(data.items[0]);
    } catch (error) {
      console.error('Failed to fetch channel info:', error);
    }
  };
  useEffect(() => {
    if (apiData) {
      fetchChanelData();
    }
  }, [apiData]);
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`;
    try {
      const res = await fetch(commentUrl);
      const data = await res.json();
      setComments(data.items);
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    }
  };
  useEffect(() => {
    fetchVideoData();
    fetchComments();
  }, [videoId]);

  return (
    <div className="playVideo">
      {/* <video src={video1} controls autoPlay muted>
        </video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : 'Demo'}</h3>
      <div className="playVideoInfo">
        <p>{apiData ? convertDuration(apiData.contentDetails.duration) : 'Loading...'}</p>
        <p>
          {apiData
            ? `${value_converter(apiData.statistics.viewCount)} views • ${moment(apiData.snippet.publishedAt).fromNow()}`
            : 'Loading...'}
        </p>
        <div>
          <span>
            <img src={like} alt="" />
            {value_converter(apiData?.statistics?.likeCount) || 0}
          </span>
          <span>
            <img src={dislike} alt="" />
            Dislike
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={chanelData?.snippet?.thumbnails?.default?.url || jack} alt="channel avatar" />
        <div>
          <p>{chanelData?.snippet?.title || 'Channel'}</p>
          <span>
            {chanelData?.statistics?.subscriberCount
              ? `${value_converter(chanelData.statistics.subscriberCount)} subscribers`
              : 'Loading subscribers...'}
          </span>
        </div>
        <button>Subscribe</button>
      </div>

      <div className="description">
        <p>{apiData?.snippet?.description || 'No description available.'}</p>
        <hr />
        <h4>{value_converter(apiData?.statistics?.commentCount) || 0} comments</h4>
      </div>

      {comments.length > 0 ? (
        comments.map((item, index) => {
          const comment = item.snippet.topLevelComment.snippet;
          return (
            <div className="comment" key={index}>
              <img src={comment.authorProfileImageUrl} alt="author" />
              <div>
                <h3>
                  {comment.authorDisplayName} <span>{moment(comment.publishedAt).fromNow()}</span>
                </h3>
                <p>{comment.textDisplay}</p>
                <div className="commentAction">
                  <img src={like} alt="like" />
                  <span>{comment.likeCount}</span>
                  <img src={dislike} alt="dislike" />
                  <span>0</span>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>Loading comments...</p>
      )}
    </div>
  );
};

export default PlayVideo;
