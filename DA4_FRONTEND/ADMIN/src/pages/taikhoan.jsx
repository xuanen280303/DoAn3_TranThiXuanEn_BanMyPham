import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Flex, Table, Input, Modal, message } from "antd";
import { RedoOutlined, DeleteOutlined,} from "@ant-design/icons";
import { apiSearchTaiKhoan } from "../services/taikhoan.service";

const TaiKhoan = () => {
    document.title = "Quản lý tài khoản";
    const { Search } = Input;
    const [valueSearch, setValueSearch] = useState(null);
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
        const results = await apiSearchTaiKhoan({
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
        { title: "Mã tài khoản", dataIndex: "id" },
        { title: "Tên tài khoản", dataIndex: "name" },
        { title: "Email", dataIndex: "email" },
        { title: "Mật khẩu", dataIndex: "password"},
        { title: "Chức vụ", dataIndex: "role"},
        { title: "Tác vụ",
        width: "120px",
        render: (_, record) => (
            <Flex justify="center">
            <Button>
            <RedoOutlined />
            </Button>

            <Button
                style={{ marginLeft: "5px" }} >
            <DeleteOutlined />
          </Button>
        </Flex>
      ),
    },
    ];
    useEffect(() => {
        loadData();
    }, [JSON.stringify(tableParams),valueSearch]);

    const onSearch = async (value) => {
        setValueSearch(value);
        await loadData();
    };

    const onSelectChange = (newSelectedRowKeys) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <>
        <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item>Tài khoản</Breadcrumb.Item>
        </Breadcrumb>
        <div  style={{ padding: 24, minHeight: 360, background: "#FFF",  borderRadius: "8px",  }} >

            <div className="control-btn_them">
            <Search
                placeholder="Nhập tên tài khoản cần tìm kiếm..."
                allowClear
                onSearch={onSearch}
                style={{  width: 1220}}
            />
            <div className="control-btn_themAxoa">
                <Button type="primary"
                style={{ marginLeft: "1055px", marginTop: "20px", background: "#009966" }}>
                Thêm mới
                </Button>
                <Button
                type="primary"
                danger
                style={{ marginLeft: "10px", background: "#CC0000" }}>
                Xoá
                </Button>
            </div>
            </div>

            <Table
            rowSelection={rowSelection}
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

        </>
    );
};

export default TaiKhoan;

