import { apiClient } from "../constant/api";

export const apiLogin = async (name, password) => {
  try {
    const response = await apiClient?.post("/auth/login", { name, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

