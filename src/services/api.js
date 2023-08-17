import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://foodexplorer-api-ijn6.onrender.com'
});