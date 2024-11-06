import { handleApiError } from '@/utils/errorHandler';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
});

// Request interceptor to add authorization token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor for centralized error handling
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        handleApiError(error); // Centralized error handler
        return Promise.reject(error);
    }
);

export default axiosInstance;
