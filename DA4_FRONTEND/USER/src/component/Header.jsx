import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getTongSoLuong } from "../services/cart.service";

function Header() {
  const account = JSON.parse(localStorage.getItem("user"));
  const accountProfile = JSON.parse(localStorage.getItem("account"));
  const router = useNavigate();
  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("account");
    router("/");
  };

  return (
    <>
      <div className="app">
        <div style={{ height: "50px", width: "100%", margin: "auto" }}>
          <img style={{ width: "100%" }} src="../Images/hinhnen1.jpg" alt="#" />
        </div>
        <header className="header">
          <nav className="headerdangnhap">
            <ul style={{ marginLeft: "1100px" }}>
              <li className="headerdangnhap">
              {!account?.access_token && (
                  <Link to="/login" className="dangnhap">
                    <i className="fa-regular fa-circle-user"></i>
                    Đăng nhập
                  </Link>
              )}
              </li>
              <li className="headerdangnhap">
                <a href="support.html" className="dangnhap">
                  <i className="far fa-question-circle"></i>
                  Trợ giúp
                </a>
              </li>
              {account?.access_token && (
                <>
                  <li className="headerdangnhap" style={{ position: "relative" }}>
                    <img
                      src="../Images/Avt.jpg"
                      className="header-img"
                      style={{ marginTop: "3px" }}
                      alt="Avatar"
                    />
                    <span className="dangnhap" style={{ marginTop: "7px", marginLeft: "5px" }}>
                      {accountProfile?.name}
                    </span>
                    <ul className="submenu" style={{ position: "absolute", top: "100%", left: "0" }}>
                      <li>
                        <a >Thông tin cá nhân</a>
                      </li>
                      <li>
                        <Link to="/purchaseHistory">Đơn hàng</Link>
                      </li>
                      <li>
                        <a onClick={logOut}>Đăng xuất</a>
                      </li>
                    </ul>
                  </li>
                </>
                
              )}

            </ul>
          </nav>

          <div className="header-with-search">
            <div className="header_logo">
              <Link to="/">
                <img
                  className="header_logo-img"
                  src="../Images/logo-new.svg"
                  alt=""
                />
              </Link>
            </div>
            <form action="#">
              <div style={{ display: "flex" }} className="Over-search">
                <p>Kem chống nắng</p>
                <p>Tẩy trang</p>
                <p>Toner</p>
                <p>Sữa rửa mặt</p>
                <p>Tẩy tế bào chết</p>
                <p>Retinol</p>
              </div>
              <div className="header_search">
                <div className="nuttimkiem">
                  <input
                    type="text"
                    className="otimkiem"
                    placeholder="Tìm sản phẩm, thương hiệu bạn mong muốn..."
                  />
                </div>
                <button className="timkiem">
                  <i className="fas fa-search icontimkiem"></i>
                </button>
              </div>
            </form>

            <div className="giohang">
              <div className="giohang1">
                <span className="soluongsp">{getTongSoLuong()}</span>
                <Link to="/cart" title="Giỏ hàng">
                  <i className="fas fa-shopping-cart iconcart"></i>
                </Link>
              </div>
            </div>
            <ul id="main-menu">
              <li>
                <a href="">High-end</a>
                <ul className="sub-menu">
                  <li>
                    <a href="">Chăm sóc da mặt</a>
                  </li>
                  <li>
                    <a href="">Trang điểm</a>
                  </li>
                  <li>
                    <a href="">Chăm sóc tóc</a>
                  </li>
                  <li>
                    <a href="">Chăm sóc cơ thể</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Da mặt</a>
                <ul className="sub-menu">
                  <li>
                    <a href="">Tẩy trang</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="">Garnie</a>
                      </li>
                      <li>
                        <a href="">Loreal</a>
                      </li>
                      <li>
                        <a href="">SVR</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Sữa rửa mặt</a>
                  </li>
                  <li>
                    <a href="">Mặt nạ</a>
                  </li>
                  <li>
                    <a href="">Serum</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Trang điểm</a>
                <ul className="sub-menu">
                  <li>
                    <a href="">Kem nền</a>
                  </li>
                  <li>
                    <a href="">Son thỏi</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="">3CE</a>
                      </li>
                      <li>
                        <a href="">MAYBELINE</a>
                      </li>
                      <li>
                        <a href="">Background</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">Mascara</a>
                  </li>
                  <li>
                    <a href="">Phấn phủ</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Tóc</a>
                <ul className="sub-menu">
                  <li>
                    <a href="">Dầu gội</a>
                  </li>
                  <li>
                    <a href="">Dầu xả</a>
                  </li>
                  <li>
                    <a href="">Dưỡng tóc</a>
                  </li>
                  <li>
                    <a href="">Thuốc nhuộm tóc</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Cơ thể</a>
                <ul className="sub-menu">
                  <li>
                    <a href="">Sữa tắm</a>
                  </li>
                  <li>
                    <a href="">Muối tắm</a>
                  </li>
                  <li>
                    <a href="">Dưỡng ẩm</a>
                  </li>
                  <li>
                    <a href="">Kem tan mỡ</a>
                  </li>
                  <li>
                    <a href="">Tẩy tế bào chết</a>
                  </li>
                  <li>
                    <a href="">Lăn khử mùi</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Cá nhân</a>
                <ul className="sub-menu">
                  <li>
                    <a href="">Gel rửa tay</a>
                  </li>
                  <li>
                    <a href="">Mặt nạ xông hơi</a>
                  </li>
                  <li>
                    <a href="">Khẩu trang</a>
                  </li>
                  <li>
                    <a href="">Kem đánh răng</a>
                  </li>
                  <li>
                    <a href="">Chỉ nha khoa</a>
                  </li>
                  <li>
                    <a href="">Nước xúc miệng</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Nước hoa</a>
                <ul className="sub-menu">
                  <li>
                    <a href="">Laura Anna</a>
                  </li>
                  <li>
                    <a href="">Foelie</a>
                  </li>
                  <li>
                    <a href="">Malissa</a>
                  </li>
                  <li>
                    <a href="">Pinker Bell</a>
                  </li>
                  <li>
                    <a href="">Versace</a>
                  </li>
                  <li>
                    <a href="">Buberry</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </header>
      </div>
      <nav className="thanhngang">
        <ul>
          <li>HASAKI DEALS</li>
          <li>HOT DEALS</li>
          <li>THƯƠNG HIỆU</li>
          <li>HÀNG MỚI VỀ</li>
          <li>BÁN CHẠY</li>
          <li>CLINIC & SPA</li>
        </ul>
        <div className="tracuu">
          <ul style={{ right: "100px" }}>
            <li>Tra cứu đơn hàng</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
