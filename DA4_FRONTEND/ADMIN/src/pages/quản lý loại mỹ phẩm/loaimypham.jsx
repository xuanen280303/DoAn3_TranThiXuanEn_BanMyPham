import React, { useEffect, useState } from "react";
import { Breadcrumb, Button, Flex, Table, Input, Modal, message } from "antd";
import { ExclamationCircleFilled, RedoOutlined, DeleteOutlined,
} from "@ant-design/icons";
import { uploads } from "../../constant/api";
import { apiDeleteLoaiMyPham, apiDeletesLoaiMyPham, apiSearchLoaiMyPham,
} from "../../services/loaimypham.service";
import LoaiMyPhamUpdate from "./LoaiMyPhamUpdate";

const LoaiMyPham = () => {
    document.title = "Quản lý loại mỹ phẩm";
    const [messageApi, contextHolder] = message.useMessage();
    const { confirm } = Modal;
    const { Search } = Input;
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [valueSearch, setValueSearch] = useState(null);
    const [maloaiMP, setMaLoaiMP] = useState("");
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
        const results = await apiSearchLoaiMyPham({
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
        { title: "STT", dataIndex: "MaLoaiMP" },
        { title: "Tên loại", dataIndex: "TenLoaiMP" },
        { title: "Hình ảnh", dataIndex: "AnhDaiDien",
            render: (_, record) => (
                <div className="table-img_khung">
                    <img style={{width: "80px", height: "80px"}} 
                    src={uploads() + record.AnhDaiDien} alt="" />
                </div>
            ),
        },
        { title: "Mô tả", dataIndex: "MoTa"},
        { title: "Tác vụ",
        width: "120px",
        render: (_, record) => (
            <Flex justify="center">
            <Button
                onClick={() => {
                setIsOpenModal(true);
                setMaLoaiMP(record.MaLoaiMP);
                }}
            >
            <RedoOutlined />
            </Button>

            <Button
                style={{ marginLeft: "5px" }}
                onClick={() => {
                showPromiseConfirmDelete(record.MaLoaiMP);
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

    const showPromiseConfirmDelete = (maloaiMP) => {
        confirm({
        title: "Xoá?",
        icon: <ExclamationCircleFilled />,
        content: "Bạn có chắc muốn xoá thông tin loại mỹ phẩm đã chọn ?",
        onOk: async () => {
            const res = await apiDeleteLoaiMyPham(maloaiMP);
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
        content: "Bạn có muốn xoá các thông tin loại mỹ phẩm đã chọn?",
        onOk: async () => {
            const res = await apiDeletesLoaiMyPham({ ids: selectedRowKeys });
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
            <Breadcrumb.Item>Loại mỹ phẩm</Breadcrumb.Item>
        </Breadcrumb>
        <div  style={{ padding: 24, minHeight: 360, background: "#FFF",  borderRadius: "8px",  }} >

            <div className="control-btn_them">
            <Search
                placeholder="Nhập tên hoặc số lượng loại mỹ phẩm cần tìm kiếm..."
                allowClear
                onSearch={onSearch}
                style={{  width: 1220}}
            />
            <div className="control-btn_themAxoa">
                <Button type="primary"
                onClick={() => {
                    setIsOpenModal(true);
                    setMaLoaiMP("");
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

        <LoaiMyPhamUpdate
            open={isOpenModal}
            cancelModal={handleCancelModal}
            maMyPham={maloaiMP}
            loadData={loadData}
        ></LoaiMyPhamUpdate>
        </>
    );
};

export default LoaiMyPham;
