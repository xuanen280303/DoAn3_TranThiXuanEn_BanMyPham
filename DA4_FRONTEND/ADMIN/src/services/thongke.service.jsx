import { apiClient } from "../constant/api";

export const apiMyPhamBanChay = async () => {
  try {
    const res = await apiClient?.get(`/thongketop5`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};
