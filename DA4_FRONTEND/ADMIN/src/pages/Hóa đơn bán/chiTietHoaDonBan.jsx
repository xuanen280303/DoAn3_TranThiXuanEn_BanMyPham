import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getThongTinHoaDon } from "../../services/hoadonban.service";
import { Button, Modal } from "antd";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};

function printInvoice() {
  window.print();
}

function ChiTietHoaDonban(props) {
  const [inforOrder, setInforOrder] = useState(null);
  
  const loadData = async (id) => {
    setInforOrder(null)
    const res = await getThongTinHoaDon(id);
    if (res.status === 200) {
      setInforOrder(res);
    }
  };

  useEffect(() => {
    if (props.maHDB !== "") {
      loadData(props.maHDB);
    }
  }, [props.maHDB]);

  const { khachhang, hoaDonBan, chitiethdb } = inforOrder || {khachhang: {}, hoaDonBan: {}, chitiethdb: []};

  return (
    <Modal
      title="Thông tin chi tiết hoá đơn"
      open={props.open}
      onOk={props.cancelModal}
      onCancel={props.cancelModal}
      width={1200}
      okText="Lưu"
      destroyOnClose={true}
      footer={[
        <Button key="submit" type="default" onClick={props.cancelModal}>
        Huỷ
      </Button>,
            <Button key="submit" type="primary" onClick={printInvoice}>
            In hoá đơn
          </Button>,
            
      ]}
    >
      <div style={{overflow: "hidden", width: "100%"}}>
        <div className="shop">
          <div className="shop1">
            <img src="../Images/logo1.jpg" alt="Logo" />
            <h1>HASAKI VIỆT NAM</h1>
          </div>
          <div className="le">
            Địa chỉ: Số 1 Quan Nhân, Thanh Xuân, Hà Nội
          </div>
          <div className="le">
            Số điện thoại: 0987.233.625 - 035.831.2793
          </div>  
        </div>
        <section className="containers">
          <h1>HÓA ĐƠN BÁN HÀNG</h1>
          <p>Mã số thuế: 123456</p>
          <p>Thời gian: {hoaDonBan?.NgayTao}</p>
        </section>
        <div style={{textAlign: 'right', marginBottom: '20px'}}>

        </div>
        <div className="le dam">
          Họ tên khách hàng: {khachhang?.HoTenKH}
        </div>
        <div className="le">Số điện thoại: {khachhang?.SDTKH}</div>
        <div className="le">Địa chỉ khách hàng: {khachhang?.DiaChiKH}</div>
        <div className="le">Mã nhân viên bán hàng: 1</div>
        <div className="kethop">
          <p>Hình thức thanh toán: Chuyển khoản</p>
          <p>Số tài khoản: 6888828032003</p>
        </div>
        <div className="le">Ghi chú:</div>

        <table>
          <thead>
            <tr>
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
              <td className="dam">{formatPrice(hoaDonBan?.TongTien)} VNĐ</td>
            </tr>
          </tbody>
        </table>
        <div style={{textAlign: 'right', marginTop: '20px', fontSize: '20px'}}>
          <p className="dam" style={{color: 'red', textDecoration: 'underline dotted'}}>
            Tổng tiền: {formatPrice(hoaDonBan?.TongTien)} VNĐ
          </p>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '50px'}}>
          <div>
            <h5>KHÁCH HÀNG</h5>
            <p>(Ký tên)</p>
            <p>{khachhang?.HoTenKH}</p>
          </div>
          <div>
            <h5>NGƯỜI BÁN HÀNG</h5>
            <p>(Ký tên)</p>
            <p>Hasaki Việt Nam</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ChiTietHoaDonban;
