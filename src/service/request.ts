import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000' : 'http://localhost:3002'
})

export default request;
