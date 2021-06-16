import React, { useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideosList from './VideosList'
import VideoDetail from './VideoDetail'

const App =()=>{
    const[videos, setVideos]=useState([]);
    const[selectedVideo, setSelectedVideo]=useState(null);

    useEffect(()=>{
        onTermSubmit("rocky balboa")
    }, [])

    const onTermSubmit = async term=>{
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        console.log(response.data.items)
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    return (
        <div className="ui container">
            <SearchBar search={onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                    <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                    <VideosList videos={videos} onVideoSelect={(video)=>setSelectedVideo(video)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App