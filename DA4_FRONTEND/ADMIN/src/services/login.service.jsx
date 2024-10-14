import { apiClient } from "../constant/api";

export const apiLogin = async (data) => {
  try {
    const response = await apiClient?.post("/auth/login", data );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const apiLogout = async () => {
  try {
    const response = await apiClient?.post("/auth/logout");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


