import React from "react";
import { useEffect, useState } from "react";
import { getThongTinHoaDon } from "../services/hoadonban.service";
import { useParams } from "react-router-dom";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};

function printInvoice() {
  window.print();
  clearCart();
}
function clearCart() {
  localStorage.removeItem("cart");
}

function InHDB() {
  const { id } = useParams();
  const [inforOrder, setInforOrder] = useState(null);

  useEffect(() => {
    const loadData = async (id) => {
      const res = await getThongTinHoaDon(id);
      if (res.status === 200) {
        setInforOrder(res);
      }
    };
    loadData(id);
  }, []);

  if (!inforOrder) {
    return <div>Loading...</div>;
  }
  const { khachhang, hoaDonBan, chitiethdb } = inforOrder || {};

  return (
    <div>
      <div className="shop">
        <div className="shop1">
          <img src="../Images/logo1.jpg" alt="" />
          <h1 style={{ marginLeft: "245px", marginTop: "25px" }}>
            HASAKI VIỆT NAM
          </h1>
        </div>
        <div
          className="le"
          style={{ fontSize: "18px", marginLeft: "280px", marginTop: "-68px" }}
        >
          Địa chỉ: Số 1 Quan Nhân, Thanh Xuân, Hà Nội
        </div>
        <div className="le" style={{ fontSize: "18px", marginLeft: "290px" }}>
          Số điện thoại: 0987.233.625 - 035.831.2793
        </div>
      </div>
      <section className="containers">
        <h1 style={{ textAlign: "center", marginTop: "50px" }}>
          HÓA ĐƠN BÁN HÀNG
        </h1>
        <p style={{ marginLeft: "1000px", marginTop: "-15px" }}>
          Mã số thuế: 123456
        </p>
        <p style={{ marginLeft: "290px" }}>Thời gian: {hoaDonBan.NgayTao}</p>
      </section>
      <div>
        <button
          style={{ marginTop: "-10px", marginLeft: "1070px" }}
          className="print"
          onClick={printInvoice}
        >
          IN HOÁ ĐƠN
        </button>
      </div>
      <div
        className="le dam"
        style={{ marginTop: "-20px", marginLeft: "290px" }}
      >
        Họ tên khách hàng: {khachhang.HoTenKH}
      </div>
      <div className="le">Số điện thoại: {khachhang.SDTKH}</div>
      <div className="le">Địa chỉ khách hàng: {khachhang.DiaChiKH}</div>
      <div className="le">Mã nhân viên bán hàng: 1</div>
      <div className="kethop">
        <p style={{ marginTop: "2px", marginLeft: "290px" }}>
          Hình thức thanh toán: Chuyển khoản
        </p>
        <p style={{ marginLeft: "395px" }}>Số tài khoản: 6888828032003</p>
      </div>
      <div className="le">Ghi chú:</div>

      <table style={{ marginTop: "30px", fontSize: "16px" }}>
        <thead>
          <tr style={{ background: "#326E51", color: "#fff" }}>
            <th>STT</th>
            <th>Tên mỹ phẩm</th>
            <th>Giá bán</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {chitiethdb.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.TenMP}</td>
              <td>{formatPrice(item.GiaBan)}</td>
              <td>{item.SLBan}</td>
              <td>{formatPrice(item.GiaBan * item.SLBan)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" className="dam">
              Tổng tiền hóa đơn bán
            </td>
            <td className="dam">{formatPrice(hoaDonBan.TongTien)} VNĐ</td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: "20px", marginLeft: "670px", fontSize: "20px" }}>
        <p
          className="dam"
          style={{
            color: "red",
            textDecoration: "underline dotted",
            marginLeft: "325px",
          }}
        >
          Tổng tiền: {formatPrice(hoaDonBan.TongTien)} VNĐ
        </p>
      </div>
      <div className="kethop1">
        <h5 style={{ marginLeft: "385px" }}>KHÁCH HÀNG</h5>
        <h5 style={{ marginLeft: "438px" }}>NGƯỜI BÁN HÀNG</h5>
      </div>
      <div className="kethop2">
        <p style={{ marginLeft: "400px" }}>(Ký tên)</p>
        <p style={{ marginLeft: "495px" }}>(Ký tên)</p>
      </div>
      <div className="kethop1">
        <p style={{ marginLeft: "410px", marginTop: "-22px" }}>
          {khachhang.HoTenKH}
        </p>
        <p style={{ marginLeft: "500px", marginTop: "-22px" }}>
          Hasaki Việt Nam
        </p>
      </div>
    </div>
  );
}

export default InHDB;
