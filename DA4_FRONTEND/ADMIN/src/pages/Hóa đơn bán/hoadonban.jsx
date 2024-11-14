import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  Button,
  Flex,
  Table,
  Input,
  Modal,
  message,
  Select,
  Tag,
  Tooltip,
} from "antd";
import {
  ExclamationCircleFilled,
  DeleteOutlined,
  GroupOutlined,
  EditOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import {
  apiDeleteHoaDonBan,
  apiDeletesHoaDonBan,
  apiSearchHoaDonBan,
  setStatusHoaDonBan,
} from "../../services/hoadonban.service";
import ChiTietHoaDonban from "./ChiTietHD/chiTietHoaDonBan";
import HoaDonUpdate from "./HoaDonUpdate";
import KhachHang from "./Update/KhachHang";
import dayjs from "dayjs";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};

const HoaDonBan = () => {
  document.title = "Hóa đơn bán";
  const [messageApi, contextHolder] = message.useMessage();
  const { confirm } = Modal;
  const [isKhachHangModalOpen, setIsKhachHangModalOpen] = useState(false);
  const { Search } = Input;
  const [valueSearch, setValueSearch] = useState(null);
  const [status, setStatus] = useState("Chờ xác nhận");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [maHDB, setMaHDB] = useState("");
  const [isUpdateDrawerOpen, setIsUpdateDrawerOpen] = useState(false);
  const [selectedMaHDB, setSelectedMaHDB] = useState(null);

  const [loading, setLoading] = useState(false);
  const [maKH, setMaKH] = useState(null);
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
  const handleOpenKhachHangModal = (id) => {
    setIsKhachHangModalOpen(true);
    setMaKH(id);
  };

  const handleCloseKhachHangModal = () => {
    setIsKhachHangModalOpen(false);
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
  const handleUpdateStatus = (currentStatus) => {
    switch (currentStatus) {
      case "Chờ xác nhận":
        return "Đã xác nhận";
      case "Đã xác nhận":
        return "Đang giao hàng";
      case "Đang giao hàng":
        return "Hoàn thành";
      default:
        return currentStatus;
    }
  };

  const handleStatus = async (id) => {
    console.log(status);
    const newStatus = handleUpdateStatus(status);
    const res = await setStatusHoaDonBan({ MaHDB: id, TrangThai: newStatus });
    if (res.status === 200) {
      messageApi.open({
        type: "success",
        content: "Cập nhật trạng thái thành công",
      });
      loadData(status);
    }
  };
  const handleDetailHoaDon = (id) => {
    setIsUpdateDrawerOpen(true);
    setSelectedMaHDB(id);
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
    { title: "Mã KH", dataIndex: "MaKH" },
    { title: "Ngày tạo", dataIndex: "NgayTao" ,
      render: (text) => dayjs(text+"Z").format('DD/MM/YYYY lúc HH:mm')
    },
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
      title: "Tác vụ",
      width: "120px",
      render: (_, record) => (
        <Flex justify="center" onClick={(e) => e.stopPropagation()}>
          {(status === "Chờ xác nhận" ||
            status === "Đã xác nhận" ||
            status === "Đang giao hàng") && (
            <Tooltip title="Cập nhật trạng thái">
              <Button
                style={{ marginLeft: "5px" }}
                onClick={() => {
                  handleStatus(record.MaHDB);
                }}
              >
                <CheckOutlined />
              </Button>
            </Tooltip>
          )}

          <Tooltip title="Chi tiết hoá đơn">
            <Button
              style={{ marginLeft: "5px" }}
              onClick={() => {
                setIsOpenModal(true);
                setMaHDB(record.MaHDB);
              }}
            >
              <GroupOutlined />
            </Button>
          </Tooltip>
          {(status === "Chờ xác nhận" ||
            status === "Đã xác nhận" 
          ) && (
          <Tooltip title="Thay đổi địa chỉ">
            <Button
              style={{ marginLeft: "5px" }}
              onClick={() => {
                handleOpenKhachHangModal(record.MaKH);
              }}
            >
              <EditOutlined />
            </Button>
          </Tooltip>
               )}
          {(status === "Chờ xác nhận" ||
            status === "Đã xác nhận" ||
            status === "Đang giao hàng") && (
            <Tooltip title="Huỷ đơn hàng">
              <Button
                style={{ marginLeft: "5px" }}
                onClick={() => {
                  showPromiseConfirmDelete(record.MaHDB);
                }}
              >
                <DeleteOutlined />
              </Button>
            </Tooltip>
          )}
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
      content: "Bạn có chắc muốn huỷ hóa đơn bán đã chọn ?",
      onOk: async () => {
        const res = await apiDeleteHoaDonBan(maHDB);
        if (res?.status_code === 200) {
          messageApi.open({
            type: "success",
            content: "Huỷ hoá đơn thành công",
          });
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
          <div
            className="control-btn_themAxoa"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "5px",
              marginTop: "10px",
            }}
          >
            <Search
              placeholder="Nhập mã hóa đơn bán cần tìm kiếm..."
              allowClear
              onSearch={onSearch}
              style={{ width: 400 }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <p>Trạng thái: </p>
              <Select
                defaultValue="Chờ xác nhận"
                style={{ width: 150 }}
                onChange={handleChange}
                options={[
                  { value: "Chờ xác nhận", label: "Chờ xác nhận" },
                  { value: "Đã xác nhận", label: "Đã xác nhận" },
                  { value: "Đang giao hàng", label: "Đang giao hàng" },
                  { value: "Hoàn thành", label: "Hoàn thành" },
                  { value: "Đã hủy", label: "Đã hủy" },
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
                  marginLeft: "10px",
                }}
              >
                Thêm
              </Button>
            </div>
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
          onRow={(record) => ({
            onClick: () => handleDetailHoaDon(record.MaHDB),
            style: { cursor: 'pointer' }
          })}
        />
      </div>
      <ChiTietHoaDonban
        open={isOpenModal}
        maHDB={maHDB}
        cancelModal={handleCancelModal}
        loadData={loadData}
      ></ChiTietHoaDonban>
      <HoaDonUpdate
        open={isUpdateDrawerOpen}
        onClose={() => setIsUpdateDrawerOpen(false)}
        maHDB={selectedMaHDB}
      />
      <KhachHang
        open={isKhachHangModalOpen}
        cancelModal={handleCloseKhachHangModal}
        maKH={maKH}
        loadData={loadData}
      />
    </>
  );
};

export default HoaDonBan;
