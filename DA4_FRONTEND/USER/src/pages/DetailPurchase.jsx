import { Link, useLocation } from "react-router-dom";
import "../assets/purchase.css";
import {
  HistoryOutlined,
  AuditOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button, Input, Modal, Select, Table, Tag, Timeline } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  apiSearchHoaDonBan,
  getThongTinHoaDon,
} from "../services/hoadonban.service";

export default function DetailPurchase() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const [dataDetail, setDataDetail] = useState({});
  const router = useNavigate();
  const formatPrice = (price) => {
    if (price == null) return "0";
    return parseInt(price).toLocaleString("vi-VN");
  };
  const handleDetail = async (id) => {
    try {
      const results = await getThongTinHoaDon(id);
      if (results) {
        setDataDetail(results);
      }
    } catch (error) {
      console.error("Lỗi: ", error);
    }
  };

  const columnsChiTiet = [
    {
      title: "Tên sản phẩm",
      dataIndex: "TenMP",
      align: "left",
      render: (_, record) => <Link to={`/productdetail/${record.MaMP}`} style={{color: "#0F9A6B"}}>{record.TenMP}</Link>,
    },
    {
      title: "Số lượng",
      dataIndex: "SLBan",
      align: "left",
    },
    {
      title: "Đơn giá",
      dataIndex: "GiaBan",
      align: "left",
      render: (_, record) => <p>{formatPrice(record.GiaBan)} VNĐ</p>,
    },
    {
      title: "Thành tiền",
      align: "left",
      render: (_, record) => <p>{formatPrice(record.SLBan * record.GiaBan)} VNĐ</p>,
    },
  ];
  const { hoaDonBan = {}, chiTietHDB = [], lichSuTrangThai = [] } = dataDetail;
  const lsTrangThai = lichSuTrangThai.map((item) => ({
    label: dayjs(item.NgayTao).format("DD/MM/YYYY HH:mm"),
    children: item.TrangThai,
  }));
  useEffect(() => {
    handleDetail(location.pathname.split("/")[2]);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="purchase-right">
          <div
            className="purchase-right-title"
            style={{
              fontSize: "22px",
              borderBottom: "1px solid #E9EBED",
              paddingBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Chi tiết đơn hàng
            <Button
              style={{ marginLeft: "10px" }}
              onClick={() => router("/purchaseHistory")}
            >
              {" "}
              <RollbackOutlined /> Quay lại
            </Button>
          </div>
          <div className="purchase-right-content">
            <div className="purchase-detail-modal-body">
              <h3 className="purchase-detail-modal-title">Thông tin hóa đơn</h3>
              <div style={{display:"flex"}}>
              <div className="purchase-detail-modal-content">
                <p className="purchase-detail-modal-item">
                  <span>Mã hóa đơn: </span>
                  {hoaDonBan?.MaHDB}
                </p>
                <p className="purchase-detail-modal-item">
                  <span>Khách hàng: </span>
                  {hoaDonBan?.khach_hang?.HoTenKH}
                </p>
                <p className="purchase-detail-modal-item">
                  <span>Trạng thái: </span>
                  {hoaDonBan?.TrangThai}
                </p>
                <p className="purchase-detail-modal-item">
                  <span>SĐT: </span>
                  {hoaDonBan?.khach_hang?.SDTKH}
                </p>
                <p className="purchase-detail-modal-item">
                  <span>Thanh toán: </span>
                  {hoaDonBan?.TrangThaiThanhToan}
                </p>
                <p className="purchase-detail-modal-item">
                  <span>Ngày tạo: </span>
                  {dayjs(hoaDonBan?.NgayTao + "Z").format("DD/MM/YYYY lúc HH:mm")}
                </p>
                <p
                  className="purchase-detail-modal-item"
                  style={{ width: "100%" }}
                >
                  <span>Địa chỉ: </span>
                  {hoaDonBan?.khach_hang?.DiaChiKH}
                </p>
              </div>
              <div style={{width:"25%"}}>
              <Timeline 
                  className="custom-timeline"
                  mode="left"
                  items={lsTrangThai}
                />
              </div>
              </div>
        
   
              <h3
                className="purchase-detail-modal-title"
                style={{ marginTop: "15px" }}
              >
                Chi tiết đơn hàng
              </h3>
              <Table
                columns={columnsChiTiet}
                rowKey={(record) => record.MaHDB}
                dataSource={chiTietHDB}
                pagination={false}
                bordered={true}
                loading={loading}
                summary={(pageData) => {
                  const total = pageData.reduce(
                    (sum, current) => sum + current.SLBan * current.GiaBan,
                    0
                  );
                  return (
                    <Table.Summary fixed>
                      <Table.Summary.Row>
                        <Table.Summary.Cell index={0} colSpan={3} align="left">
                          <strong>Tổng tiền</strong>
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={1} align="left">
                          <strong
                            style={{ color: "#E74032", fontSize: "16px" }}
                          >
                            {formatPrice(total)} VNĐ
                          </strong>
                        </Table.Summary.Cell>
                      </Table.Summary.Row>
                    </Table.Summary>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
