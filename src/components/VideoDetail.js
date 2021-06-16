import React from 'react'

const VideoDetail =({video})=>{
    
    //conditional rendering short circuit approach
    return video  && <div className='ui segment'>
                        <div className="ui embed">
                            <iframe width="560" height="315" 
                            src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}
                            title="YouTube video player" frameBorder="0"
                            allowFullScreen>
                            </iframe>
                        </div>
                        <h4 className='header'>{video.snippet.title}</h4>
                        <p className='description'>{video.snippet.description}</p>
                    </div>
    
}

export default VideoDetail