import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { apiLogin } from "../services/auth.service";
import { message } from "antd";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await apiLogin(name, password);
      navigate("/");
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
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#">Hệ thống</a></li>
            <li><a href="#">Liên hệ</a></li>
            <li><a href="#">Login</a></li>
          </ul>
          <div className="timkiems">
            <div className="one_line">
              <p>|</p>
            </div>
            <div className="one_line1">
              <i className="fa-solid fa-magnifying-glass fa-xl" style={{ color: "#ffffff", marginTop: "6px" }}></i>
            </div>
          </div>
        </div>
      </header>
      <div id="wrapper">
        <form id="form-login" onSubmit={handleLogin}>
          <h1 className="form-heading">WELCOME TO HASAKI</h1>
          <div className="form-group">
            <i className="far fa-user"></i>
            <input type="text" className="form-input" placeholder="Tên tài khoản" required
              value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group">
            <i className="fas fa-key"></i>
            <input type="password" className="form-input" placeholder="Mật khẩu" required
              value={password} onChange={(e) => setPassword(e.target.value)} />
            <div id="eye">
              <i className="far fa-eye"></i>
            </div>
          </div>

          <div>
            <label style={{ fontSize: "15px" }}>
              <input type="checkbox" style={{ marginLeft: "5px" }} />
              Remember me{" "}
            </label>
            <a className="miss-pass" href="misspass.html"> Forgot password</a>
          </div>

          <div>
            <button onclick="dangnhap()" className="item" style={{ width: "440px", fontSize: "18px" }}>
              LOGIN
            </button>
          </div>
          <div>
            <div className="register">
              <p> Don't have an account?
                <Link to="/signup" style={{ color: "blue" }}>
                  {" "}
                  Signup now
                </Link>
              </p>
            </div>
          </div>
          <div className="khac">OR LOGIN WITH</div>
          <div className="link">
            <a href="https://www.facebook.com/">
              <div className="facebook">
                <i className="fa-brands fa-facebook"></i>
                <span>Facebook</span>
              </div>
            </a>
            <div className="Ins">
              <a href="https://www.instagram.com/283.2003/">
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </form>
      </div>
      <div className="footers">
        <p
          style={{
            paddingTop: "8px",
            paddingLeft: "520px",
            fontSize: "17.5px",
          }}
        >
          Copyright © 2024 Hasaki VietNam. Powered by Xuan En Tran
        </p>
      </div>
    </div>
  );
}
export default Login;
