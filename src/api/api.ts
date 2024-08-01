import axios from 'axios';

const api = axios.create({
  baseURL: 'https://techpines-api-9e755958e791.herokuapp.com/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});


export default api;