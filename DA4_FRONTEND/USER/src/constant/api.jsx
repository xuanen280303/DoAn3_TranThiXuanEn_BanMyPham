import axios from "axios";
export const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/user",
  timeout: 1000 * 60 * 30 * 3,
  headers: {
    "Content-Type": "application/json",
  },
});

export const uploads = () => "http://localhost:8000/uploads/";
