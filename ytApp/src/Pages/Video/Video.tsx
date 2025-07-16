import React from 'react';
import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommend from '../../Components/Recommend/Recommend';

const Video = () => {
  return <div className='playContainer'>
      <PlayVideo></PlayVideo>
      <Recommend></Recommend>
  </div>;
};
export default Video;
