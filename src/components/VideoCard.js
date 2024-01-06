import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);

    const { snippet, statistics } = info;

    const { channelTitle, description, title, thumbnails, publishedAt } = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-lg cursor-pointer hover:bg-slate-100'>
        <img className='rounded-lg' alt='thumbnail' src = {thumbnails.medium.url} />
        <ul>
            <li className='font-bold py-2 text-wrap'>{ title }</li>
            <li>{ channelTitle }</li>
            <li>{ statistics.viewCount } views</li>
            {/* <li>{ publishedAt }</li> */}
        </ul>
      
    </div>
  )
}

export default VideoCard;
