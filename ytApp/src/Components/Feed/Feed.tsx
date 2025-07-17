import React, { useEffect, useState, useCallback } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { API_KEY, value_converter } from '../../data';
import moment from 'moment';

type FeedProps = {
  category: number;
};

const Feed = ({ category }: FeedProps) => {
  const [data, setData] = useState<any[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async (pageToken = '') => {
    setLoading(true);
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=VN&videoCategoryId=${category}&key=${API_KEY}&pageToken=${pageToken}`;
    
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(prev => [...prev, ...json.items]);
      setNextPageToken(json.nextPageToken || null);
    } catch (err) {
      console.error('Failed to fetch data:', err);
    } finally {
      setLoading(false);
    }
  }, [category]);

  // Reset data when category changes
  useEffect(() => {
    setData([]);
    setNextPageToken(null);
    fetchData();
  }, [category, fetchData]);

  // Handle infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + document.documentElement.scrollTop;
      const fullHeight = document.documentElement.offsetHeight;

      if (scrollBottom + 200 >= fullHeight && !loading && nextPageToken) {
        fetchData(nextPageToken);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, nextPageToken, fetchData]);

  return (
    <div className="feed">
      {data.map((item, index) => (
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card" key={item.id}>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {value_converter(item.statistics.viewCount)} views • {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
      {loading && <p className="loading">Loading more videos...</p>}
    </div>
  );
};

export default Feed;
