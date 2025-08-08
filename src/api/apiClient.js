import axios from 'axios';

// Create an axios instance with a predefined base URL.
// This means you don't have to type 'http://localhost:3001/api' every time.
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // From your .env file
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access');
    console.log("authtoken",token)
    if (token) {
      // Django REST Framework expects the format 'Token <your_token>'
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;