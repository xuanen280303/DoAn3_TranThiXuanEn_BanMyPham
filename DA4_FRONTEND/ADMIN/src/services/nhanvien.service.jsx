import { apiClient } from "../constant/api";

export const apiGetNhanVien = async (id) => {
  try {
    const res = await apiClient?.get(`/NhanVien/get/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiSearchNhanVien = async (data) => {
  try {
    const res = await apiClient?.post(`/NhanVien/search`, data);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiDeleteNhanVien = async (id) => {
  try {
    const res = await apiClient?.delete(`/NhanVien/delete/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiDeletesNhanVien = async (data) => {
  try {
    const res = await apiClient?.delete(`/NhanVien/deletes`, { data });
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiSaveNhanVien = async (data) => {
  try {
    const res = await apiClient?.post(`/NhanVien/save`, data);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};


