import React from 'react';
import './videoItem.css';

function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)} className='video-item item'>
        <img className='ui image' alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
        <div className="content">
            <a className="header">{video.snippet.title}</a>
            <div className="description">Updated 10 mins ago</div>
        </div>
    </div>
  );
}

export default VideoItem