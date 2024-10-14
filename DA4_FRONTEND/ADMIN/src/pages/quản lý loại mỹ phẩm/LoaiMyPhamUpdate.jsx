import React, { useEffect, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Modal, Button, Form, Input, Upload } from "antd";
import { apiGetLoaiMyPham, apiSaveLoaiMyPham } from "../../services/loaimypham.service";
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

const LoaiMyPhamUpdate = (props) => {
  const [form] = Form.useForm();

    const saveLoaiMyPham = async () => {
        try {
        const values = await form.validateFields();
        // Khi thực hiện lưu, thông tin LMP được đóng gói trong formData 
        // để gửi đi và xử lý bởi một API saveLMP
        const formData = {
            id: props.maloaiMP || null,
            TenLoaiMP: values.TenLoaiMP,
            AnhDaiDien: values.AnhDaiDien.file,
            MoTa: values.MoTa,
        };
        debugger;
        const res = await apiSaveLoaiMyPham(formData);
        if (res) {
            console.log("Lưu thành công!", res);
            props.loadData();
            props.cancelModal();
            form.resetFields();
        }
        } catch (error) {
        console.error("Lỗi lưu thông tin loại mỹ phẩm:", error);
        }
    };

    const loadDataUpdate = async (id) => {
        let res = await apiGetLoaiMyPham(id);
        console.log(res);
        if (res) {
        form.setFieldsValue(res.data);
        }
    };

    useEffect(() => {
        form.resetFields();
        if (props.maloaiMP !== "") {
        loadDataUpdate(props.maloaiMP);
        }
    }, [props.maloaiMP]);

    const handleCancelModal = () => {
        props.cancelModal();
        form.resetFields(); //cho các input trở về null
    };

  return (
    <Modal
      title="Cập nhật thông tin loại Mỹ phẩm"
      open={props.open}
      onOk={saveLoaiMyPham}
      onCancel={handleCancelModal}
      width={800}
      okText="Lưu"
      cancelText="Huỷ bỏ">
      <Form {...formItemLayout} style={{ maxWidth: 800 }} form={form}>
        <Form.Item
          label="Tên loại mỹ phẩm"
          name="TenLoaiMP"
          rules={[{ required: true, message: "Vui lòng nhập tên loại mỹ phẩm!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Hình ảnh"
          name="AnhDaiDien"
          rules={[{ required: true, message: "Vui lòng chọn hình ảnh!" }]}>
          <Upload beforeUpload={() => false} listType="picture" maxCount={1}>
            <Button icon={<UploadOutlined />}>Tải hình ảnh</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Mô tả"
          name="MoTa"
          rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]} >
          <Input />
        </Form.Item>

      </Form>
    </Modal>
  );
};

export default LoaiMyPhamUpdate;
