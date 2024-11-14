import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { apiLogin } from "../services/login.service";
import { useState } from "react";

const Login = function () {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      let data = await apiLogin(values);
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      }
    } catch (e) {
      console.error("Lỗi!", e);
    }
  };

  return (
    <div
      style={{ marginLeft: "25%", marginTop: "200px", borderRadius: "10px", border: "1px solid #fff", width: "650px", padding: "20px",  background: "rgba(247, 250, 237, 0.8)"}}>
      <h1 style={{ marginLeft: "35%", marginBottom: "20px" }}>ĐĂNG NHẬP</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}>
        <Form.Item
          label="Tài khoản" style={{ marginLeft: "-90px" }}
          name="name"
          rules={[
            { required: true, message: "Tài khoản không được rỗng!" },
            { min: 1, message: "Độ dài tối thiểu của tài khoản phải là 1!" },
          ]} >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu" style={{ marginLeft: "-90px" }}
          name="password"
          rules={[
            { required: true, message: "Mật khẩu không được rỗng!" },
            { min: 1, message: "Độ dài tối thiểu của mật khẩu phải là 1!" },
            { max: 20, message: "Độ dài tối đa của mật khẩu là 20!" },
          ]} >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{ marginLeft: "60px", width:"150px", height:"40px", fontSize:"20px", marginTop: "20px" }} loading={loading}> 
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
