import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: { 'Authorization': 'Bearer dummy_token' }
});

export default instance;
