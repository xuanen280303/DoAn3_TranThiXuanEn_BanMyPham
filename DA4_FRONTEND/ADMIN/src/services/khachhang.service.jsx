import { apiClient } from "../constant/api";

export const apiGetKhachHang = async (id) => {
  try {
    const res = await apiClient?.get(`/khachhang/get/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiSearchKhachHang  = async (data) => {
  try {
    const res = await apiClient?.post(`/khachhang/search`, data);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiDeleteKhachHang = async (id) => {
  try {
    const res = await apiClient?.delete(`/khachhang/delete/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiDeletesKhachHang  = async (data) => {
  try {
    const res = await apiClient?.delete(`/khachhang/deletes`, { data });
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiSaveKhachHang  = async (data) => {
  try {
    const res = await apiClient?.post(`/khachhang/save`, data);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

