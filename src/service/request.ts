import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://192.168.121.66:8090' : 'http://localhost:3002'
})

export default request;
