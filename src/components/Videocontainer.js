import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const YOUTUBE_VIDEO_API = process.env.REACT_APP_YOUTUBE_VIDEO_API
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    getVideos()
  },[])

  const getVideos = async() =>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json()
    setVideos(json.items);

    //TODO: channel profile pic: call channel api using channel id
  }
  return (
    <div className='p-2 flex justify-between flex-wrap'>
      {videos.map((video)=>
      (<Link key={video.id} to={"/watch?v="+video.id}> <VideoCard info={video}/></Link>)
      
      )}
    </div>
  )
}

export default VideoContainer