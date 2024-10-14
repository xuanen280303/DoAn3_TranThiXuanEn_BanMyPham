import { apiClient } from "../constant/api";

export const apiGetHoaDonBan = async (id) => {
  try {
    const res = await apiClient?.get(`/hoadonban/get/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
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

export const apiDeleteHoaDonBan = async (id) => {
  try {
    const res = await apiClient?.delete(`/hoadonban/delete/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiDeletesHoaDonBan = async (data) => {
  try {
    const res = await apiClient?.delete(`/hoadonban/deletes`, { data });
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const getThongTinHoaDon = async (id) => {
  try {
    const response = await apiClient.get(`/hoadonban/getDetail/${id}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi khi tạo hóa đơn bán:", error);
    throw error;
  }
};
