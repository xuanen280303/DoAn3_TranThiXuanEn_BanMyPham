import { apiClient } from "../constant/api";

export const apiGetMyPham = async (id) => {
  try {
    const res = await apiClient?.get(`/mypham/get/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiSearchMyPham = async (data) => {
  try {
    const res = await apiClient?.post(`/mypham/search`, data);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiDeleteMyPham = async (id) => {
  try {
    const res = await apiClient?.delete(`/mypham/delete/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiDeletesMyPham = async (data) => {
  try {
    const res = await apiClient?.delete(`/mypham/deletes`, { data });
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};
export const apiSaveMyPham = async (data) => {
  try {
    const res = await apiClient?.post(`/mypham/save`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
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
