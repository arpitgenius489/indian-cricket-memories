import axios from 'axios';

console.log('Current Environment:', process.env.NODE_ENV);
console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL);
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: API_BASE_URL || 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;