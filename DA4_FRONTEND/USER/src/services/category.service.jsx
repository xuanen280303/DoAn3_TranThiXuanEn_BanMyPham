import { apiClient } from "../constant/api";

export const getLocGia = async (id, priceFilter) => {
  const res = await apiClient?.post(`/category/locgia/${id}`, priceFilter);
  return res?.data.data;
};
