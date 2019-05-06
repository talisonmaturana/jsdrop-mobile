import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsdrop-backend.herokuapp.com/'
});

export default api;