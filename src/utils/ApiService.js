import axios from 'axios';

const ApiService = axios.create({
    baseURL: 'http://localhost:4000',
    // baseURL: 'https://bssa-db.vercel.app',
    // timeout: 10000, // optional timeout
    headers: {
        'Content-Type': 'application/json', // Set default headers if needed
    },
});

export default ApiService;
