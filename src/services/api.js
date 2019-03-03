import axios from 'axios';

const api = axios.create({
  baseURL: 'http://b8913702.ngrok.io',
});

export default api;
