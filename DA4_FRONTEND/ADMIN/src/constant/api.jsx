import axios from "axios";
export const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/admin",
  timeout: 1000 * 60 * 30 * 3,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  function (config) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    config.headers.Authorization = "Bearer " + user.access_token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const uploads = () => "http://localhost:8000/uploads/";
