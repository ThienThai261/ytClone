import React, { useEffect, useState } from 'react';
import './Recommend.css';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Recommend = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relativeVideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=VN&videoCategoryId=${categoryId}&maxResults=40&key=${API_KEY}`;
    try {
      const res = await fetch(relativeVideo);
      const data = await res.json();
      setApiData(data.items);
    } catch (error) {
      console.error('Failed to fetch recommended videos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  return (
    <div className="recommended">
      {apiData.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
          <div key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>
                {value_converter(item.statistics.viewCount)} views •{' '}
                {moment(item.snippet.publishedAt).fromNow()}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Recommend;
