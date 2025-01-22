import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Laravel backend URL
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
