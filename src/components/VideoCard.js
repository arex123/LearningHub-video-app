import React, { useState } from 'react'

const VideoCard = ({ info }) => {

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className='w-[300px] h-[280px] mb-7 shadow-lg p-2'>
      <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
      <div>
<img className=""/>
        <ul>
          <li className='font-bold text-ellipsis line-clamp-2 pt-2'>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  )
}

export default VideoCard