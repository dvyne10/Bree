import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.59.173:3000',
});

export default instance;
