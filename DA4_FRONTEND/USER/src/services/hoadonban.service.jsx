import { apiClient } from "../constant/api";

//--- tạo mới một hóa đơn bán----
export const setHoadonban = async (HDBData) => {
  try {
    const response = await apiClient.post("/xuathdb", HDBData);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi tạo hóa đơn bán:", error);
    throw error;
  }
};

//---Lấy thông tin chi tiết của một hóa đơn bán dựa trên id----
export const getThongTinHoaDon = async (id) => {
  try {
    const response = await apiClient.get(`/getthongtinhoadon/${id}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi tạo hóa đơn bán:", error);
    throw error;
  }
};

export const apiSearchHoaDonBan = async (data) => {
  try {
    const res = await apiClient?.post(`/hoadonban/search`, data);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};