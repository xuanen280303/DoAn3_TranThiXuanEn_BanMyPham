import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Flex, Table, Input, Modal, message } from "antd";
import { ExclamationCircleFilled, RedoOutlined, DeleteOutlined,
} from "@ant-design/icons";
import { apiDeleteKhachHang, apiDeletesKhachHang, apiSearchKhachHang,
} from "../../services/khachhang.service";
import KhachHangUpdate from "./KhachHangUpdate";

const KhachHang = () => {
    document.title = "Quản lý khách hàng";
    const [messageApi, contextHolder] = message.useMessage();
    const { confirm } = Modal;
    const { Search } = Input;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [valueSearch, setValueSearch] = useState(null);
    const [maKH, setMaKH] = useState("");
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        page: 1,
        pageSize: 5,
        total: 1,
    });
    const [data, setData] = useState([]);

    const loadData = async () => {
        setLoading(true);
        const results = await apiSearchKhachHang({
        ...tableParams, search: valueSearch});
        if (Array.isArray(results?.data?.data)) {
        setTableParams({  ...tableParams, total: results?.data?.total });
        setData(results?.data?.data);
        setLoading(false);
        } else {
        console.error("Lỗi rồi:", results?.message);
        }
    };

    const columns = [
        { title: "Mã khách hàng", dataIndex: "MaKH" },
        { title: "Họ tên", dataIndex: "HoTenKH" },
        { title: "SĐT", dataIndex: "SDTKH",},
        { title: "Địa chỉ", dataIndex: "DiaChiKH"},
        { title: "Tác vụ",
        width: "120px",
        render: (_, record) => (
            <Flex justify="center">
            <Button
                onClick={() => {
                setIsOpenModal(true);
                setMaKH(record.MaKH);
                }}  >
            <RedoOutlined />
            </Button>

            <Button
                style={{ marginLeft: "5px" }}
                onClick={() => {
                showPromiseConfirmDelete(record.MaKH);
                }} >
            <DeleteOutlined />
          </Button>
        </Flex>
      ),
    },
    ];
    useEffect(() => {
        loadData();
    }, [JSON.stringify(tableParams),valueSearch]);

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

    const showPromiseConfirmDelete = (maKH) => {
        confirm({
        title: "Xoá?",
        icon: <ExclamationCircleFilled />,
        content: "Bạn có chắc muốn xoá thông tin khách hàng đã chọn ?",
        onOk: async () => {
            const res = await apiDeleteKhachHang(maKH);
            if (res?.status_code === 200) {
            console.log("xoá thành công!");
            }
            loadData();
        },
        onCancel() {},
        });
    };

    const showPromiseConfirmDeletes = () => {
        confirm({
        title: "Xoá?",
        icon: <ExclamationCircleFilled />,
        content: "Bạn có muốn xoá các thông tin khách hàng đã chọn?",
        onOk: async () => {
            const res = await apiDeletesKhachHang({ ids: selectedRowKeys });
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
            <Breadcrumb.Item>Khách hàng</Breadcrumb.Item>
        </Breadcrumb>
        <div  style={{ padding: 24, minHeight: 360, background: "#FFF",  borderRadius: "8px",  }} >

            <div className="control-btn_them">
            <Search
                placeholder="Nhập tên hoặc địa chỉ khách hàng cần tìm kiếm..."
                allowClear
                onSearch={onSearch}
                style={{  width: 1220}}
            />
            <div className="control-btn_themAxoa">
                <Button type="primary"
                onClick={() => {
                    setIsOpenModal(true);
                    setMaKH("");
                }} 
                style={{ marginLeft: "1055px", marginTop: "20px", background: "#009966" }}>
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
                    showPromiseConfirmDeletes();
                    }
                }}
                style={{ marginLeft: "10px", background: "#CC0000" }}>
                Xoá
                </Button>
            </div>
            </div>

            <Table
            rowSelection={rowSelection}
            columns={columns}
            rowKey={(record) => record.MaKH}
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

        <KhachHangUpdate
            open={isOpenModal}
            cancelModal={handleCancelModal}
            maKhachHang={maKH}
            loadData={loadData}
        ></KhachHangUpdate>
        </>
    );
};

export default KhachHang;
