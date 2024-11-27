import { apiClient } from "../constant/api";

export const apiLogin = async (name, password) => {
  try {
    const response = await apiClient?.post("/auth/login", { name, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const apiProfile = async () => {
  try {
    const token = JSON.parse(localStorage.getItem("user"))?.access_token;
    const response = await apiClient?.get("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
export const apiSignup = async (name, email, password) => {
  try {
    const response = await apiClient.post("/signup/user", {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
