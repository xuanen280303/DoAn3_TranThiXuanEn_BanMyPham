import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Modal, Button, Form, Input, Upload, Select, message } from "antd";
import { apiGetMyPham, apiSaveMyPham } from "../../services/mypham.service";
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

const { Option } = Select;
const MyPhamUpdate = (props) => {
  const [form] = Form.useForm();

  const saveMyPham = async () => {
    try {
      //hàm validateFields của form để kiểm tra tính hợp lệ của tất cả các trường
      const values = await form.validateFields();
      //formData chứa all các thông tin mỹ phẩm cần lưu
      const formData = {
        id: props.maMyPham || null,
        TenMP: values.TenMP,
        MaLoaiMP: values.MaLoaiMP,
        GiaBan: values.GiaBan,
        GiaGoc: values.GiaGoc,
        XuatXu: values.XuatXu,
        KhoiLuong: values.KhoiLuong,
        NgaySX: values.NgaySX,
        HSD: values.HSD,
        SLTon: values.SLTon,
        AnhDaiDien: values.AnhDaiDien.file,
        MoTa: values.MoTa,
        GhiChu: values.GhiChu,
      };
      const res = await apiSaveMyPham(formData);
      if (res) {
        console.log("Save successful", res);
        props.loadData();
        props.cancelModal();
        form.resetFields();
      }
    } catch (error) {
      console.error("Lỗi lưu thông tin mỹ phẩm:", error);
    }
  };

  const loadDataUpdate = async (id) => {
    let res = await apiGetMyPham(id);
    if (res) {
      form.setFieldsValue(res.data);
    }
  };

  useEffect(() => {
    form.resetFields();
    if (props.maMyPham !== "") {
      loadDataUpdate(props.maMyPham);
    }
  }, [props.maMyPham]);

  const handleCancelModal = () => {
    props.cancelModal();
    form.resetFields(); //cho các input trở về null
  };

  return (
    <Modal
      title="Cập nhật thông tin mỹ phẩm"
      open={props.open}
      onOk={saveMyPham}
      onCancel={handleCancelModal}
      width={800}
      okText="Lưu"
      cancelText="Huỷ bỏ"
    >
      <Form {...formItemLayout} style={{ maxWidth: 800 }} form={form}>
        <Form.Item
          label="Tên mỹ phẩm"
          name="TenMP"
          rules={[{ required: true, message: "Vui lòng nhập tên mỹ phẩm!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mã loại mỹ phẩm"
          name="MaLoaiMP"
          rules={[
            { required: true, message: "Vui lòng nhập mã loại mỹ phẩm!" },
          ]}
        >
          <Select placeholder="Lựa chọn mã loại mỹ phẩm">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Giá bán"
          name="GiaBan"
          rules={[{ required: true, message: "Vui lòng nhập giá bán!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá gốc"
          name="GiaGoc"
          rules={[{ required: true, message: "Vui lòng nhập giá gốc!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Xuất xứ"
          name="XuatXu"
          rules={[{ required: true, message: "Vui lòng nhập xuất xứ!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Khối lượng"
          name="KhoiLuong"
          rules={[{ required: true, message: "Vui lòng nhập khối lượng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ngày sản xuất"
          name="NgaySX"
          rules={[{ required: true, message: "Vui lòng nhập ngày sản xuất!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="HSD"
          name="HSD"
          rules={[{ required: true, message: "Vui lòng nhập hạn dùng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số lượng"
          name="SLTon"
          rules={[{ required: true, message: "Vui lòng nhập số lượng!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Hình ảnh"
          name="AnhDaiDien"
          rules={[{ required: true, message: "Vui lòng chọn hình ảnh!" }]}
        >
          <Upload beforeUpload={() => false} listType="picture" maxCount={1}>
            <Button icon={<UploadOutlined />}>Tải hình ảnh</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="MoTa"
          rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Ghi chú"
          name="GhiChu"
          rules={[{ required: true, message: "Vui lòng nhập ghi chú!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MyPhamUpdate;
