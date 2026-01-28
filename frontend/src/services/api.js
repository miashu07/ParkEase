import axios from 'axios';

// Base URL for your backend - make sure backend is running on port 8080 with /api context path
const API_BASE_URL = 'http://localhost:8080/api';

// Create axios instance with proper configuration
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  // Important for cookies/session
  withCredentials: true,
  timeout: 10000, // 10 second timeout
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // REMOVED: CORS headers - these are RESPONSE headers, not REQUEST headers!
    // The server (backend) handles CORS, not the client

    console.log('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.status, error.config?.url, error.message);

    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 401:
          console.log('Unauthorized - clearing local storage');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          window.location.href = '/login';
          break;
        case 403:
          console.log('Forbidden');
          break;
        case 404:
          console.log('API endpoint not found');
          break;
        case 500:
          console.log('Server error');
          break;
      }
    } else if (error.request) {
      // Request made but no response
      console.error('No response received:', error.request);
    } else {
      // Something else happened
      console.error('Request setup error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;