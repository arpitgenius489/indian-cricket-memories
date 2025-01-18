import axios from 'axios';

export default axios.create({
    baseURL: 'https://backend-5u9l.onrender.com',
    headers: {"ngrok-skip-browser-warning": "true"}
});