import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fullstack.pitstopcabines.com.br',
});

export default api;
