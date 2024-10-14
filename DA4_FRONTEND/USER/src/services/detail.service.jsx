import { apiClient } from "../constant/api";

export const getProductDetail = async (id) => {
  const res = await apiClient?.post(`/detail/${id}`);
  return res?.data.data;
};
