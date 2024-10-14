import { apiClient } from "../constant/api";

export const apiSearchTaiKhoan = async (data) => {
  try {
    const res = await apiClient?.post(`/taikhoan/search`, data);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};