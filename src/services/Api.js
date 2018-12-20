import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: `https://next.json-generator.com/api/json/get/`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default () => AxiosInstance;
