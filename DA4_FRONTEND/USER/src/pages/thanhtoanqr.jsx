import React, { useEffect } from "react";
import { QRCode } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function ThanhtoanQR() {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/inhdb/${id}`);
  }, 8000);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div>
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

      <div className="giua">
        <div className="formqr">
          <h1 className="form-heading">THANH TOÁN NGAY TẠI ĐÂY</h1>
          <div className="maqr">
            <QRCode
              errorLevel="H"
              value="https://ant.design/"
              icon="https://play-lh.googleusercontent.com/sb5jmyy7G2vK6y571xf9aLJXr4vZ12trcBHjW86iMl9fDIlHqPyM9jelrQiDZT55AyQ"
            />
          </div>
          <div className="muahang">
            <div className="donmua">
              <button>Đơn mua</button>
            </div>
            <div className="tieptuc">
              <button>Tiếp tục mua sắm</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footers">
        <p
          style={{
            marginTop: "20px",
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

export default ThanhtoanQR;
