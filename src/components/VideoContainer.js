import React, { useEffect, useState } from 'react'
import { YOUTUBE_POPULAR_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [ videos, setVideos ] = useState([]);
  
  useEffect(() => {
    getPopularVideos();
  }
  , []);

  const getPopularVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_API);
    const json =  await data.json();

    console.log(json.items);

    setVideos(json.items);
  }

  return (
    <div className="flex flex-wrap">
      {videos.map(video => (
      <VideoCard key={video.id} info={video} />
      ))}
      {/* <VideoCard info = { videos[0]} /> */}
    </div>
  )
}

export default VideoContainer
