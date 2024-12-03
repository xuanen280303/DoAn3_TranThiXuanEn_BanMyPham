import { Link, useLocation } from "react-router-dom";
import "../assets/purchase.css";
import { HistoryOutlined, AuditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Button, Input, Modal, Select, Table, Tag } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { apiSearchHoaDonBan, getThongTinHoaDon } from "../services/hoadonban.service";

export default function PurchaseHistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { Search } = Input;
  const [tableParams, setTableParams] = useState({
    page: 1,
    pageSize: 5,
    total: 1,
  });
  const [valueSearch, setValueSearch] = useState("");
  const [status, setStatus] = useState("");
  const [dataDetail, setDataDetail] = useState({});
  const handleChange = async (value) => {
    setStatus(value);
    await loadData(value);
  };
  const onSearch = async (value) => {
    setValueSearch(value);
    await loadData(status);
  };
  const loadData = async (status) => {
    setLoading(true);
    const results = await apiSearchHoaDonBan({
      ...tableParams,
      userId: JSON.parse(localStorage.getItem("account")).id,
      search: valueSearch,
      status: status,
    });
    if (Array.isArray(results?.data?.data)) {
      setTableParams({ ...tableParams, total: results?.data?.total });
      setData(results?.data?.data);
      setLoading(false);
    } else {
      console.error("Lỗi rồi:", results?.message);
    }
  };

  const formatPrice = (price) => {
    if (price == null) return "0";
    return parseInt(price).toLocaleString("vi-VN");
  };
  const handleTag = (value) => {
    switch (value) {
      case "Chờ xác nhận":
        return "gold";
      case "Đã xác nhận":
        return "blue";
      case "Đang giao hàng":
        return "orange";
      case "Hoàn thành":
        return "green";
      case "Đã hủy":
        return "red";
      default:
        return "geekblue"; // Màu mặc định nếu không khớp với các trạng thái trên
    }
  };

  const columns = [
    { title: "Mã HDB", dataIndex: "MaHDB" },
    { title: "Khách hàng", dataIndex: "HoTenKH" },
    { title: "SĐT", dataIndex: "SDTKH" },

    {
      title: "Trạng thái",
      dataIndex: "TrangThai",
      render: (_, record) => (
        <Tag color={handleTag(record.TrangThai)}>{record.TrangThai}</Tag>
      ),
    },
    { title: "Thanh toán", dataIndex: "TrangThaiThanhToan" },
    {
      title: "Tổng tiền",
      dataIndex: "TongTien",
      render: (_, record) => <p>{formatPrice(record.TongTien)}</p>,
    },
    {
      title: "Ngày tạo",
      dataIndex: "NgayTao",
      render: (text) => dayjs(text + "Z").format("DD/MM/YYYY lúc HH:mm"),
    },
    {
      title: "Tác vụ",
      width: "120px",
      render: (_, record) => (
        <Link style={{backgroundColor: "#0F9A6B", color: "white", padding: "5px 10px", borderRadius: "5px"}} to={`/purchase-detail/${record.MaHDB}`}>Chi tiết</Link>
      ),
    },
  ];
  
  useEffect(() => {
    loadData();
  }, [tableParams.page, tableParams.pageSize, valueSearch]);

  return (
    <div>
      <div className="container">
   
        <div className="purchase-right">
          <div className="purchase-right-title">Lịch sử mua hàng</div>

          <div className="purchase-right-content">
            <div style={{display: "flex", justifyContent: "space-between", gap: "10px", marginTop: "25px"}}>
            <Search
              placeholder="Tìm kiếm mã hoá đơn, tên khách hàng và SĐT"
              allowClear
              onSearch={onSearch}
              style={{ width: 400 }}
            />
            <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <p>Trạng thái: </p>
              <Select
                defaultValue="Tất cả"
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                  { value: "", label: "Tất cả" },
                  { value: "Chờ xác nhận", label: "Chờ xác nhận" },
                  { value: "Đã xác nhận", label: "Đã xác nhận" },
                  { value: "Đang giao hàng", label: "Đang giao hàng" },
                  { value: "Hoàn thành", label: "Hoàn thành" },
                  { value: "Đã hủy", label: "Đã hủy" },
                ]}
              />
            </div>
                        
            </div>
            <Table
              columns={columns}
              rowKey={(record) => record.MaHDB}
              dataSource={data}
              pagination={{
                ...tableParams,
                onChange: (page, pageSize) => {
                  setTableParams({
                    page: page,
                    pageSize,
                    total: tableParams.total,
                  });
                },
              }}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
