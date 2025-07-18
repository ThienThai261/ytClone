import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import '../../Components/Feed/Feed.css'; // reuse .container, .feed
import { API_KEY } from '../../data';
import SideBar from '../../Components/SideBar/SideBar';
import './SearchPage.css';

type SearchPageProps = {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchPage = ({ sidebar, setSidebar }: SearchPageProps) => {
  const { query } = useParams();
  const [data, setData] = useState<any[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchSearchResults = useCallback(
    async (pageToken = '') => {
      if (!query) return;
      setLoading(true);
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${encodeURIComponent(
        query
      )}&type=video&key=${API_KEY}&pageToken=${pageToken}`;

      try {
        const res = await fetch(url);
        const json = await res.json();
        setData((prev) => [...prev, ...(json.items || [])]);
        setNextPageToken(json.nextPageToken || null);
      } catch (err) {
        console.error('Failed to fetch search results:', err);
      } finally {
        setLoading(false);
      }
    },
    [query]
  );

  useEffect(() => {
    setData([]);
    setNextPageToken(null);
    fetchSearchResults();
  }, [query, fetchSearchResults]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + document.documentElement.scrollTop;
      const fullHeight = document.documentElement.offsetHeight;

      if (scrollBottom + 200 >= fullHeight && !loading && nextPageToken) {
        fetchSearchResults(nextPageToken);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, nextPageToken, fetchSearchResults]);

  return (
    <>
      <div className={`container ${sidebar ? '' : 'large-container'}`}>
        <div className="feed">
          {data.map((item) => (
            <Link to={`/video/${item.id.videoId}`} className="card" key={item.id.videoId}>
              <img src={item.snippet.thumbnails.medium.url} alt="" />
              <h2>{item.snippet.title}</h2>
              <h3>{item.snippet.channelTitle}</h3>
              <p>{moment(item.snippet.publishedAt).fromNow()}</p>
            </Link>
          ))}
          {loading && <p className="loading">Loading more results...</p>}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
