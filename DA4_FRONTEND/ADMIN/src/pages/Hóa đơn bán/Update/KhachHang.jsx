import React, { useEffect, useState } from "react";
import { Modal, Form, Input } from "antd";
import { apiGetKhachHang, apiSaveKhachHang } from "../../../services/khachhang.service";
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


const KhachHang = (props) => {
  const [form] = Form.useForm();

    const saveKhachHang = async () => {
        try {
        const values = await form.validateFields();
        const formData = {
            id: props.maKH,
            HoTenKH: values.HoTenKH,
            SDTKH: values.SDTKH,
            DiaChiKH: values.DiaChiKH,
        };
        
        const res = await apiSaveKhachHang(formData);
        if (res) {
            console.log("Lưu thành công!", res);
            await props.loadData(props.maKH);  // Thay đổi ở đây
            props.cancelModal();
            form.resetFields();
        }
        } catch (error) {
        console.error("Lỗi lưu thông tin khách hàng:", error);
        }
    };

    const loadDataUpdate = async (id) => {
      form.resetFields();
        let res = await apiGetKhachHang(id);
        if (res) {
        form.setFieldsValue(res.data);
        }
    };

    useEffect(() => {
        if (props.maKH) {
        loadDataUpdate(props.maKH);
        }
    }, [props.maKH]);

    const handleCancelModal = () => {
        props.cancelModal();
    };

  return (
    <Modal
      title="Cập nhật thông tin khách hàng"
      open={props.open}
      onOk={saveKhachHang}
      onCancel={handleCancelModal}
      width={800}
      okText="Lưu"
      cancelText="Huỷ bỏ">
      <Form {...formItemLayout} style={{ maxWidth: 800 }} form={form}>
        <Form.Item
          label="Tên khách hàng"
          name="HoTenKH"
          rules={[{ required: true, message: "Vui lòng nhập tên khách hàng!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Số điện thoại"
          name="SDTKH"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại khách hàng!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Địa chỉ"
          name="DiaChiKH"
          rules={[{ required: true, message: "Vui lòng nhập dịa chỉ!" }]} >
          <Input />
        </Form.Item>

      </Form>
    </Modal>
  );
};

export default KhachHang;
