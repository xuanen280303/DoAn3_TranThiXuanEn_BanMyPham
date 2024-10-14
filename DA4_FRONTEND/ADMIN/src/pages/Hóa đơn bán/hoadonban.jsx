import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Flex, Table, Input, Modal, message, Select, Tag } from "antd";
import {
  ExclamationCircleFilled,
  DeleteOutlined,
  GroupOutlined,
  EditOutlined,
  
} from "@ant-design/icons";
import {
  apiDeleteHoaDonBan,
  apiDeletesHoaDonBan,
  apiSearchHoaDonBan,
} from "../../services/hoadonban.service";
import ChiTietHoaDonban from "./chiTietHoaDonBan";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};


const HoaDonBan = () => {
  document.title = "Hóa đơn bán";
  const [messageApi, contextHolder] = message.useMessage();
  const { confirm } = Modal;
  const { Search } = Input;
  const [valueSearch, setValueSearch] = useState(null);
  const [status, setStatus] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [maHDB, setMaHDB] = useState("");

  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    page: 1,
    pageSize: 5,
    total: 1,
  });
  const handleCancelModal = () => {
    setIsOpenModal(false);
  };
  const [data, setData] = useState([]);

  const handleChange = async (value) => {
    setStatus(value);
    await loadData(value);
  };
  
  const loadData = async (statusValue) => {
    setLoading(true);

    const results = await apiSearchHoaDonBan({
      ...tableParams,
      search: valueSearch,
      status: statusValue || status || "Chờ xác nhận", // Ưu tiên giá trị mới
    });

    if (Array.isArray(results?.data?.data)) {
      setTableParams({ ...tableParams, total: results?.data?.total });
      setData(results?.data?.data);
      setLoading(false);
    } else {
      console.error("Lỗi rồi:", results?.message);
    }
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
        return "geekblue";  // Màu mặc định nếu không khớp với các trạng thái trên
    }
  };

  const columns = [
    { title: "Mã HDB", dataIndex: "MaHDB" },
    { title: "Mã NV", dataIndex: "MaNV" },
    { title: "Mã KH", dataIndex: "MaKH" },
    { title: "Ngày tạo", dataIndex: "NgayTao" },
    { title: "Trạng thái", dataIndex: "TrangThai",
      render: (_, record) => <Tag style={{fontSize:"14px"}} color={handleTag(record.TrangThai)}>{record.TrangThai}</Tag>,
     },
    { title: "Thanh toán", dataIndex: "TrangThaiThanhToan" },
    { title: "Tổng tiền", dataIndex: "TongTien",
      render: (_, record) => <p>{formatPrice(record.TongTien)}</p>,
     },
    {
      title: "Tác vụ",
      width: "120px",
      render: (_, record) => (
        <Flex justify="center">
          <Button
            style={{ marginLeft: "5px" }}
            onClick={() => {
              setIsOpenModal(true);
              setMaHDB(record.MaHDB);
              }}  >
          
            <GroupOutlined />
          </Button>
          <Button
            style={{ marginLeft: "5px" }}
            onClick={() => {
              showPromiseConfirmDelete(record.MaHDB);
            }}
          >
           <EditOutlined />
          </Button> 
          <Button
            style={{ marginLeft: "5px" }}
            onClick={() => {
              showPromiseConfirmDelete(record.MaHDB);
            }}
          >
            <DeleteOutlined />
          </Button>
        </Flex>
      ),
    },
  ];
  useEffect(() => {
    loadData();
  }, [JSON.stringify(tableParams), valueSearch]);

  //button tìm kiếm
  const onSearch = async (value) => {
    setValueSearch(value);
    await loadData();
  };

  const showPromiseConfirmDelete = (maHDB) => {
    confirm({
      title: "Xoá?",
      icon: <ExclamationCircleFilled />,
      content: "Bạn có chắc muốn xoá thông tin hóa đơn bán đã chọn ?",
      onOk: async () => {
        const res = await apiDeleteHoaDonBan(maHDB);
        if (res?.status_code === 200) {
          console.log("xoá thành công!");
        }
        loadData();
      },
      onCancel() {},
    });
  };


  
  return (
    <>
      {contextHolder}
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Hóa đơn bán</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "#FFF",
          borderRadius: "8px",
        }}
      >
        <div className="control-btn_them">
          <Search
            placeholder="Nhập mã hóa đơn bán cần tìm kiếm..."
            allowClear
            onSearch={onSearch}
            style={{ width: 1220 }}
          />
          <div className="control-btn_themAxoa" style={{display: "flex", justifyContent: "end", alignItems:"center", gap:"5px" ,marginTop:"10px" }}>
          
          <p>Trạng thái: </p>
          <Select
          defaultValue="Chờ xác nhận"
          style={{ width: 150 }}
          onChange={handleChange}
          options={[
            { value: 'Chờ xác nhận', label: 'Chờ xác nhận' },
            { value: 'Đã xác nhận', label: 'Đã xác nhận' },
            { value: 'Đang giao hàng', label: 'Đang giao hàng' },
            { value: 'Hoàn thành', label: 'Hoàn thành' },
            { value: 'Đã hủy', label: 'Đã hủy' },
          ]}
        />

            <Button
              type="primary"
              danger
              onClick={() => {
                  messageApi.open({
                    type: "error",
                    content: "Vui lòng chọn thông tin cần xoá!",
                  });
              }}
              style={{
                background: "#FF6600",
                marginLeft:"10px"
               }} >
              Thêm
            </Button>
            
          </div>
        </div>

        <Table
          columns={columns}
          rowKey={(record) => record.MaLoaiMP}
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
      <ChiTietHoaDonban
            open={isOpenModal}
            maHDB={maHDB}
            cancelModal={handleCancelModal}

            loadData={loadData}
        ></ChiTietHoaDonban>
    </>
  );
};

export default HoaDonBan;
