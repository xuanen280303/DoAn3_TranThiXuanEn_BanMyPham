import { apiClient } from "../constant/api";

export const apiGetLichSu = async (id) => {
  try {
    const res = await apiClient?.get(`/lichsu/get/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};

export const apiSearchLichSu  = async (data) => {
  try {
    const res = await apiClient?.post(`/lichsu/search`, data);
    return res.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};


export const apiDeleteLichSu = async (id) => {
  try {
    const res = await apiClient?.delete(`/lichsu/delete/${id}`);
    return res?.data;
  } catch (error) {
    console.error("Lỗi: ", error);
  }
};
