import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./shared/AppLayout";
import Login from "./pages/login";
import NhaCC from "./pages/nhacc";
import NhanVien from "./pages/nhanvien";
import TaiKhoan from "./pages/taikhoan";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import Home from "./pages/home";
import MyPham from "./pages/Quản lý mỹ phẩm/mypham";
import LoaiMyPham from "./pages/quản lý loại mỹ phẩm/loaimypham";
import KhachHang from "./pages/Quản lý khách hàng/khachhang";
import HoaDonBan from "./pages/Hóa đơn bán/hoadonban";
import CheckToken from "./shared/CheckToken";
import ThongKe from "./pages/thongke";
export const routers = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <AppLayout />
      </>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: (
          <CheckToken>
            <Home />
          </CheckToken>
        ),
      },

      {
        path: "taikhoan",
        element: (
          <CheckToken>
            <TaiKhoan />
          </CheckToken>
        ),
      },

      {
        path: "loaimypham",
        element: (
          <CheckToken>
            <LoaiMyPham />
          </CheckToken>
        ),
      },
      {
        path: "mypham",
        element: (
          <CheckToken>
            <MyPham></MyPham>
          </CheckToken>
        ),
      },
      {
        path: "nhanvien",
        element: (
          <CheckToken>
            <NhanVien />
          </CheckToken>
        ),
      },
      {
        path: "nhacc",
        element: (
          <CheckToken>
            <NhaCC />
          </CheckToken>
        ),
      },
      {
        path: "khachhang",
        element: (
          <CheckToken>
            <KhachHang />
          </CheckToken>
        ),
      },
      {
        path: "hoadonban",
        element: (
          <CheckToken>
            <HoaDonBan />
          </CheckToken>
        ),
      },
      {
        path: "thongke",
        element: (
          <CheckToken>
            <ThongKe />
          </CheckToken>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default routers;
