import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Select } from "antd";
import { apiGetHoaDonBan, apiSaveHoaDonBan} from "../../../services/hoadonban.service";
import { apiGetKhachHang, apiSearchKhachHang } from "../../../services/khachhang.service";
import { apiSearchNhanVien } from "../../../services/nhanvien.service";
const formItemLayout = {
  labelCol: {
    xs: { span: 5 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};


const HoaDonBan = (props) => {
  const [form] = Form.useForm();

    const saveHoaDonBan = async () => {
        try {
        const values = await form.validateFields();
        const formData = {
            id: props.MaHDB,
            MaNV: values.MaNV,
            MaKH: values.MaKH,
            TrangThai: values.TrangThai,
            TrangThaiThanhToan: values.TrangThaiThanhToan,
        };

        const res = await apiSaveHoaDonBan(formData);
        if (res) {
            console.log("Lưu thành công!", res);
            await props.loadData(props.MaHDB);
            props.cancelModal();
            form.resetFields();
        }
        } catch (error) {
        console.error("Lỗi lưu thông tin hoá đơn bán:", error);
        }
    };

    const loadDataUpdate = async (id) => {
        form.resetFields(); 
        let res = await apiGetHoaDonBan(id);
        if (res) {
        form.setFieldsValue(res.data);
        }
    };

    useEffect(() => {
        if (props.MaHDB) {
        loadDataUpdate(props.MaHDB);
        }
    }, [props.MaHDB]);

    const handleCancelModal = () => {
        props.cancelModal();
    };

  return (
    <Modal
      title="Cập nhật thông tin khách hàng"
      open={props.open}
      onOk={saveHoaDonBan}
      onCancel={handleCancelModal}
      width={800}
      okText="Lưu"
      cancelText="Huỷ bỏ">
      <Form {...formItemLayout} style={{ maxWidth: 800 }} form={form}>
        <Form.Item
          label="Mã nhân viên"
          name="MaNV"
          >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mã khách hàng"
          name="MaKH"
          rules={[{ required: true, message: "Vui lòng nhập mã khách hàng!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Trạng thái"
          name="TrangThai"
          rules={[{ required: true, message: "Vui lòng nhập trạng thái!" }]} >
            <Select
            options={[
            { value: 'Chờ xác nhận', label: 'Chờ xác nhận' },
            { value: 'Đã xác nhận', label: 'Đã xác nhận' },
            { value: 'Đang giao hàng', label: 'Đang giao hàng' },
            { value: 'Hoàn thành', label: 'Hoàn thành' },
            { value: 'Đã hủy', label: 'Đã hủy' },
          ]}
        />
        </Form.Item>

        <Form.Item
          label="Trạng thái thanh toán"
          name="TrangThaiThanhToan"
          rules={[{ required: true, message: "Vui lòng nhập trạng thái thanh toán!" }]} >
          <Select
            defaultValue="Thanh toán khi nhận hàng"
            options={[{ value: 'Thanh toán khi nhận hàng', label: 'Thanh toán khi nhận hàng' },
              { value: 'Đã thanh toán', label: 'Đã thanh toán' },
            ]}
          />
        </Form.Item>

      </Form>
    </Modal>
  );
};

export default HoaDonBan;
