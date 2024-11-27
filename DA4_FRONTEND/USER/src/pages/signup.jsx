import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { message } from "antd";
import { apiSignup } from "../services/auth.service";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      messageApi.error("Mật khẩu không trùng khớp!");
      return;
    }
    try {
      const data = await apiSignup(name, email, password);
      localStorage.setItem("token", data.access_token);
      messageApi.success(data.message);
    } catch (error) {
      messageApi.error(error.message || "Đã có lỗi xảy ra! Vui lòng thử lại!");
    }
  };

  return (
    <div>
      {contextHolder}
      <header>
        <div className="header_supports">
          <img src="Images/logo-new.svg" alt="" />
          <ul id="main-menus">
            <li>
              <a href="#">Trang chủ</a>
            </li>
            <li>
              <a href="#">Hệ thống</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
          <div className="timkiems">
            <div className="one_line">
              <p>|</p>
            </div>
            <div className="one_line1">
              <i
                className="fa-solid fa-magnifying-glass fa-xl"
                style={{ color: "#ffffff" }}
              ></i>
            </div>
          </div>
        </div>
      </header>
      <div id="wrapper">
        <form id="form-login" onSubmit={handleSignup}>
          <h1 className="form-heading">ĐĂNG KÝ HASAKI</h1>

          <div className="form-group">
            <i className="far fa-user"></i>
            <input
              type="text"
              className="form-input"
              placeholder="Tên tài khoản"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <i class="fa-regular fa-envelope"></i>
            <input
              type="text"
              className="form-input"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <i className="fas fa-key"></i>
            <input
              type="password"
              className="form-input"
              placeholder="Mật khẩu"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div id="eye">
              <i className="far fa-eye"></i>
            </div>
          </div>

          <div className="form-group">
            <i className="fas fa-key"></i>
            <input
              type="password"
              className="form-input"
              placeholder="Nhập lại mật khẩu"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div id="eye">
              <i className="far fa-eye"></i>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <button className="item">SIGN UP</button>
            <button className="item" style={{ marginLeft: "8px" }}>
              <Link to="/login">LOGIN</Link>
            </button>
          </div>
        </form>
      </div>
      <div className="footers">
        <p
          style={{
            paddingTop: "8px",
            paddingLeft: "520px",
            fontSize: "17.5px",
          }} >
          Copyright © 2024 Hasaki VietNam. Powered by Xuan En Tran
        </p>
      </div>
    </div>
  );
}
export default Signup;
