import axios from 'axios'

const KEY = 'AIzaSyBkZwvH8OSXCoNTZSpNQ-47YbfXzHDTPF0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY,
        type: 'video'
    }
})
