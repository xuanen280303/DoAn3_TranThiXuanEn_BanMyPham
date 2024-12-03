import React, { useEffect } from "react";
import { QRCode } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function Success() {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/`);
  }, 15000);
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
          <h1 className="form-heading">THANH TOÁN THÀNH CÔNG</h1>
          <div className="maqr">
            <img src="Images/icons8_ok.svg" alt="" style={{width: "200px"}}/>
          </div>
          <div className="muahang">
            <div className="donmua">
              <button onClick={() => navigate(`/purchaseHistory`)}>Lịch sử</button>
            </div>
            <div className="tieptuc">
              <button onClick={() => navigate(`/purchase-detail/${id}`)}>Chi tiết đơn hàng</button>
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

export default Success;
