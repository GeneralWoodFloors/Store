import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

// Base API URL - Uses environment variable if available, otherwise defaults to a predefined URL
const apiUrl = "/choreo-apis/awbo/backend/rest-api-be2/v1.0";

// Create an Axios instance with a base URL for making API requests
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiUrl,
});

// Axios Interceptor - Automatically attaches Authorization header if a user is logged in
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN); // Retrieve the access token from local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach token to the request headers
    }
    return config; // Return the modified request configuration
  },
  (error) => {
    return Promise.reject(error); // Handle request errors
  }
);

export default api; // Export the configured Axios instance for use in other parts of the app
