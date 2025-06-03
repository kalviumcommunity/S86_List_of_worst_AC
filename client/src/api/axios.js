import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // change as per your backend
  withCredentials: true, // if you're using cookies/sessions
});

export default API;
