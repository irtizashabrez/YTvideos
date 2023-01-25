import axios from 'axios';


const KEY = 'Enter your own Api key from google console api';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
});