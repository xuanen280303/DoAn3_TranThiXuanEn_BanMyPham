import React, { useEffect, useState } from "react";
import { Breadcrumb, Button,Flex, Table, Input, Modal, message,} from "antd";
import {
  ExclamationCircleFilled,
  RedoOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { uploads } from "../../constant/api";
import {
  apiDeleteMyPham,
  apiDeletesMyPham,
  apiSearchMyPham,
} from "../../services/mypham.service";
import MyPhamUpdate from "./MyPhamUpdate";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};

const MyPham = () => {
  document.title = "Quản lý mỹ phẩm";
  const [messageApi, contextHolder] = message.useMessage();
  const { confirm } = Modal;
  const { Search } = Input;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [maMyPham, setMaMyPham] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const [loading, setLoading] = useState(false);
  const [valueSearch, setValueSearch] = useState(null);
  const [tableParams, setTableParams] = useState({
    page: 1,
    pageSize: 5,
    total: 1,
  });
  const [data, setData] = useState([]);

  // 
  const loadData = async () => {
    setLoading(true);
    const results = await apiSearchMyPham({
      ...tableParams,
      search: valueSearch,
    });

    //kiểm tra results có phải 1 mảng ko
    if (Array.isArray(results?.data?.data)) {
      setTableParams({ ...tableParams, total: results?.data?.total });
      setData(results?.data?.data);
      setLoading(false);
    } else {
      console.error("Lỗi rồi:", results?.message);
    }
  };

  useEffect(() => {
    loadData();
  }, [JSON.stringify(tableParams), valueSearch]);

  const columns = [
    { title: "STT", dataIndex: "MaMP" },
    { title: "Tên", dataIndex: "TenMP" },
    { title: "Mã loại", dataIndex: "MaLoaiMP" },
    {
      title: "Giá bán",
      dataIndex: "GiaBan",
      render: (_, record) => <p>{formatPrice(record.GiaBan)}</p>,
    },
    {
      title: "Giá gốc",
      dataIndex: "GiaGoc",
      render: (_, record) => <p>{formatPrice(record.GiaGoc)}</p>,
    },
    { title: "Xuất xứ", dataIndex: "XuatXu" },
    { title: "Khối lượng", dataIndex: "KhoiLuong" },
    { title: "NSX", dataIndex: "NgaySX" },
    { title: "HSD", dataIndex: "HSD" },
    { title: "Số lượng", dataIndex: "SLTon" },
    {
      title: "Hình ảnh",
      dataIndex: "AnhDaiDien",
      render: (_, record) => (
        <div className="table-img_khung">
          <img
            style={{ width: "80px", height: "80px" }}
            src={uploads() + record.AnhDaiDien}
            alt=""
          />
        </div>
      ),
    },
    { title: "Mô tả", dataIndex: "MoTa" },
    { title: "Ghi chú", dataIndex: "GhiChu" },
    {
      title: "Tác vụ",
      width: "120px",
      render: (_, record) => (
        <Flex justify="center">
          <Button
            onClick={() => {
              setIsOpenModal(true);
              setMaMyPham(record.MaMP);
            }}  >
            <RedoOutlined />
          </Button>

          <Button
            style={{ marginLeft: "5px" }}
            onClick={() => {
              showXoaIt(record.MaMP);
            }} >
            <DeleteOutlined />
          </Button>
        </Flex>
      ),
    },
  ];
 

  const handleCancelModal = () => {
    setIsOpenModal(false);
  };

  //button tìm kiếm
  const onSearch = async (value) => {
    setValueSearch(value);
    await loadData();
  };

  //chọn checkbox
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  //Show delete
  const showXoaIt = (maMyPham) => {
    confirm({
      title: "Xoá?",
      icon: <ExclamationCircleFilled />,
      content: "Bạn có chắc muốn xoá thông tin mỹ phẩm đã chọn ?",
      onOk: async () => {
        const res = await apiDeleteMyPham(maMyPham);
        if (res?.status === 200) {
          messageApi.success("xoá thành công!");
        }
        loadData();
      },
      onCancel() {},
    });
  };

  const showXoaNhieu = () => {
    confirm({
      title: "Xoá?",
      icon: <ExclamationCircleFilled />,
      content: "Bạn có muốn xoá các thông tin mỹ phẩm đã chọn?",
      onOk: async () => {
        const res = await apiDeletesMyPham({ ids: selectedRowKeys });
        if (res?.status === 200) {
          messageApi.success("xoá thành công!");
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
        <Breadcrumb.Item>Mỹ phẩm</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: "#fff",
          borderRadius: "8px",
        }}
      >
        <div className="control-btn_them">
          <Search
            placeholder="Nhập tên hoặc số lượng mỹ phẩm cần tìm kiếm..."
            onSearch={onSearch}
            style={{ width: 1220 }}
          />
          <div className="control-btn_themAxoa">
            <Button
              type="primary"
              onClick={() => {
                setIsOpenModal(true);
                setMaMyPham("");
              }}
              style={{
                marginLeft: "1055px",
                marginTop: "20px",
                background: "#009966",
              }}
            >
              Thêm mới
            </Button>
            <Button
              type="primary"
              danger
              onClick={() => {
                if (selectedRowKeys.length === 0) {
                  messageApi.open({
                    type: "error",
                    content: "Vui lòng chọn thông tin cần xoá!",
                  });
                } else {
                  showXoaNhieu();
                }
              }}
              style={{ marginLeft: "10px", background: "#CC0000" }}
            >
              Xoá
            </Button>
          </div>
        </div>

        <Table
          rowSelection={rowSelection} columns={columns}  rowKey={(record) => record.MaMP}
          dataSource={data}
          pagination={{  ...tableParams,
            onChange: (page, pageSize) => { setTableParams({ page: page, pageSize, total: tableParams.total, }); },
          }}
          loading={loading}
        />
      </div>

      <MyPhamUpdate
        open={isOpenModal}
        cancelModal={handleCancelModal}
        maMyPham={maMyPham}
        loadData={loadData}
      ></MyPhamUpdate>
    </>
  );
};

export default MyPham;
