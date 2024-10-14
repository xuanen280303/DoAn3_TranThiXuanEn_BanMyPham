import { apiClient } from "../constant/api";

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
