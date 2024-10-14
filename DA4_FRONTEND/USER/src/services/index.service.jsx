import { apiClient } from "../constant/api";

export const getDanhMuc = async () => {
  try {
    const res = await apiClient?.get(`/index/loaimypham`);
    return res?.data.data;
  } catch (error) {
    console.error("Lỗi không thể truy xuất dữ liệu danh mục!", error);
  }
};

export const getMyPham = async () => {
  try {
    const res = await apiClient?.get(`/index/mypham`);
    return res?.data.data;
  } catch (error) {
    console.error("Lỗi không thể truy xuất danh sách mỹ phẩm!", error);
  }
};
