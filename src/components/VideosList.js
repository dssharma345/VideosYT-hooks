import React from 'react'
import VideoItem from './VideoItem'

const VideosList =({videos, onVideoSelect})=>{
    const vids= videos.map(vid=><VideoItem key={vid.id.videoId} onVideoSelect={onVideoSelect} video={vid}/>)
    return <div className='ui relaxed divided list'>{vids}</div>
}
export default VideosList
