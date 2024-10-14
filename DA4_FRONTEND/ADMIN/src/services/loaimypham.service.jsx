import { apiClient } from "../constant/api";

export const apiGetLoaiMyPham = async (id) => {
  try {
    const res = await apiClient?.get(`/loaimypham/get/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiSearchLoaiMyPham = async (data) => {
  try {
    const res = await apiClient?.post(`/loaimypham/search`, data);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiDeleteLoaiMyPham = async (id) => {
  try {
    const res = await apiClient?.delete(`/loaimypham/delete/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiDeletesLoaiMyPham = async (data) => {
  try {
    const res = await apiClient?.delete(`/loaimypham/deletes`, { data });
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};
export const apiSaveLoaiMyPham = async (data) => {
  try {
    const res = await apiClient?.post(`/loaimypham/save`, data, {
      headers: {
        "Content-Type": "multipart/form-data",  },
    });
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiUploadFile = async (data) => {
  try {
    const res = await apiClient?.get(`/uploadfile`, data);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};
