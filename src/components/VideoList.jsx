import React from 'react'
import VideoItem from './VideoItem'

function VideoList({ videos, onVideoSelect }) {

    const renderList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });

  return (
    <div className='ui relaced divided list'>
        {renderList}
    </div>
  )
}

export default VideoList