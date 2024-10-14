import React from "react";

function App() {
  return (
    <div>
      <header className="header-support-c">
        <div className="header_support">
          <a href="index.html">
            <img src="Images/logo.svg" alt="" />
          </a>
          <div className="taikhoan">
            <div className="sp-one_line" style={{ marginRight: "5px" }}>
              Gửi yều cầu
            </div>
            <div className="sp-one_line" style={{ marginRight: "5px" }}>
              |
            </div>
            <div className="sp-one_line" style={{ marginLeft: "3px" }}>
              <a href="logincustomer.html" className="dangnhap_sp">
                Đăng nhập
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="background">
        <div className="khungtimkiem">
          <h5>Xin chào! Chúng tôi có thể giúp gì được cho bạn?</h5>
          <div className="finds">
            <input
              type="text"
              className="timkiem"
              placeholder="Nhập từ khoá để tìm sản phẩm, thương hiệu bạn mong muốn. Ví dụ: Hasaki"
            />
            <div className="icon_timkiems">
              <img src="Images/icon_search1.svg" alt="" />
            </div>
          </div>
          <div className="info_lienhe">
            <div className="iconss">
              <img src="Images/icon_dauhoi.svg" alt="" />
            </div>
            <div className="phone">
              <p>1800 6310</p>
            </div>
            <div className="others">
              <p>(Khiếu nại, góp ý)</p>
            </div>
            <div className="iconss" style={{ marginLeft: "20px" }}>
              <img src="Images/icon_block_call.svg" alt="" />
            </div>
            <div className="phone">
              <p>1800 6324</p>
            </div>
            <div className="others">
              <p>(Tư vấn)</p>
            </div>
            <div className="iconss" style={{ marginLeft: "20px" }}>
              <img src="Images/icon_chat1.svg" alt="" />
            </div>
            <div className="phone">
              <p>Chat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="link-out">
        <div className="link">
          <a href="index.html">Trang chủ </a>
          <i className="fas fa-caret-right"></i>
          <b style={{ color: "black" }}> Hệ thống cửa hàng Hasaki</b>
        </div>
      </div>

      <div className="cover_system">
        <div className="system-trai">
          <div className="info-system">
            <div className="icons">
              <img src="Images/icon_1.svg" alt="" />
            </div>
            <div className="icon-tittle">
              <p>Tài khoản</p>
            </div>
          </div>
          <div className="info-system" style={{ marginTop: "0.5px" }}>
            <div className="icons">
              <img src="Images/icon_8.svg" alt="" />
            </div>
            <div className="icon-tittle">
              <p>Đặt hàng</p>
            </div>
          </div>
          <div className="info-system" style={{ marginTop: "0.5px" }}>
            <div className="icons">
              <img src="Images/icon_2.svg" alt="" />
            </div>
            <div className="icon-tittle">
              <p>Quy cách đóng gói</p>
            </div>
          </div>
          <div className="info-system" style={{ marginTop: "0.5px" }}>
            <div className="icons">
              <img src="Images/icon_3_ship.svg" alt="" />
            </div>
            <div className="icon-tittle">
              <p>Đặt hàng</p>
            </div>
          </div>
          <div className="info-system" style={{ marginTop: "0.5px" }}>
            <div className="icons">
              <img src="Images/icon_4_money.svg" alt="" />
            </div>
            <div className="icon-tittle">
              <p>Phí vận chuyển</p>
            </div>
          </div>
          <div className="info-system" style={{ marginTop: "0.5px" }}>
            <div className="icons">
              <img src="Images/icon_5.svg" alt="" />
            </div>
            <div className="icon-tittle">
              <p>Đổi trả, hoàn tiền</p>
            </div>
          </div>
          <div className="info-system" style={{ marginTop: "0.5px" }}>
            <div className="icons">
              <img src="Images/icon_6.svg" alt="" />
            </div>
            <div className="icon-tittle">
              <p>Dịch vụ Spa</p>
            </div>
          </div>
          <div className="info-system" style={{ marginTop: "0.5px" }}>
            <div className="icons">
              <img src="Images/icon_7.svg" alt="" />
            </div>
            <div className="icon-tittle">
              <p>Tuyển dụng</p>
            </div>
          </div>
          <div className="info-help">
            <div className="title-help" style={{ marginTop: "25px" }}>
              <b>Thông tin hỗ trợ</b>
            </div>
            <div className="huongdan">
              <ul>
                <li>Giới thiệu Hasaki</li>
                <li>Liên hệ</li>
                <li>Khách hàng thân thiết</li>
                <li>Tích điểm đổi quà</li>
                <li>Hướng dẫn đổi quà</li>
                <li>Hướng dẫn đặt hàng</li>
                <li>Hướng dẫn đặt hàng 2H</li>
                <li>Phương thức thanh toán</li>
                <li>Thẻ quà tặng Got It</li>
                <li>Phiếu mua hàng Hasaki</li>
                <li>Chính sách vận chuyển giao nhận</li>
                <li>Điều khoản sử dụng</li>
                <li>Chính sách bảo mật</li>
                <li>Hướng dẫn tải & sử dụng App Hasaki</li>
                <li>Quy định giao dịch chung</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="system-phai">
          <div className="bando">
            <img src="Images/bannber_toanquoc.jpg" alt="" />
          </div>
          <div className="luachon">
            <select className="luachon_tpho">
              <option value="item1">Tất Cả Tỉnh Thành</option>
              <option value="item1">Hồ Chí Minh</option>
              <option value="item2">Hà Nội</option>
              <option value="item3">Đà Nẵng</option>
              <option value="item4">Cần Thơ</option>
              <option value="item1">An Giang</option>
              <option value="item2">Bà Rịa Vũng Tàu</option>
              <option value="item3">Bạc Liêu</option>
              <option value="item4">Bến Tre</option>
              <option value="item1">Bình Định</option>
              <option value="item2">Bình Dương</option>
              <option value="item3">Bình Phước</option>
              <option value="item4">Bình Thuận</option>
              <option value="item2">Cà Mau</option>
              <option value="item3">Đồng Nai</option>
              <option value="item4">Đồng Tháp</option>
              <option value="item1">Gia Lai</option>
              <option value="item2">Hải Phòng</option>
              <option value="item3">Khánh Hoà</option>
              <option value="item4">Kiên Giang</option>
            </select>
            <select className="luachon_quan">
              <option value="item1">Tất Cả Quận Huyện</option>
            </select>
            <form className="search">
              <input
                type="text"
                className="timkiem"
                placeholder="Nhập tên đường tỉnh thành quận huyện"
              />
            </form>
          </div>
          <div className="vitri">
            <div className="vitri_trai">
              <div className="ten_thanhpho">
                <p>Hồ Chí Minh</p>
              </div>
              <div className="quan_thanhpho">
                <p>Quận 1</p>
              </div>
              <div className="vitri_chitiet">
                CN 13: 81 Hồ Tùng Mậu, P.Bến Nghé, Q.1, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "50px" }}>
                <p>Quận 4</p>
              </div>
              <div className="vitri_chitiet">
                CN 18: 223 Đường Khánh Hội, P.3, Q.4, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>
              </div>
              <div className="quan_thanhpho">
                <p>Quận 6</p>
              </div>
              <div className="vitri_chitiet">
                CN 17: 94 Đường Hậu Giang, P.6, Q.6, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "70px" }}>
                <p>Quận 8</p>
              </div>
              <div className="vitri_chitiet">
                CN 88: 246 Dương Bá Trạc, P.2, Q.8, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "100px" }}>
                <p>Quận 10</p>
              </div>
              <div className="vitri_chitiet">
                CN 2: 555 Đường 3 Tháng 2, P.8, Q.10, TP.HCM (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>
              </div>
              <div className="quan_thanhpho">
                <p>Quận 12</p>
              </div>
              <div className="vitri_chitiet">
                CN 9: 6M-6M1 Nguyễn Ảnh Thủ, P.Trung Mỹ Tây, Q.12, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 27: 36A/5 Nguyễn Ảnh Thủ, Khu phố 2, P.Hiệp Thành, Q.12,
                TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 94: 392 Nguyễn Văn Quá, P.Đông Hưng Thuận, Q.12, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 97: 953 (số cũ 91/4) Hà Huy Giáp, P.Thạnh Xuân, Q.12, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "10px" }}>
                <p>Quận Tân Phú</p>
              </div>
              <div className="vitri_chitiet">
                CN 11: 104A Lê Trọng Tấn, P.Tây Thạnh, Q.Tân Phú, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 21: 220 Tân Hương, P.Tân Quý, Q.Tân Phú, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 40: 311 Tây Thạnh, P.Tây Thạnh, Q.Tân Phú, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 89: 350 Tân Sơn Nhì, P.Tân Sơn Nhì, Q.Tân Phú, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 90: 588 Lũy Bán Bích, P.Hòa Thạnh, Q.Tân Phú, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 91: 182 Thạch Lam, P.Phú Thạnh, Q.Tân Phú, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho">
                <p>Quận Gò Vấp</p>
              </div>
              <div className="vitri_chitiet">
                CN 6: 657B Quang Trung, P.11, Q.Gò Vấp, TP.HCM (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 8: 447 Phan Văn Trị, P.5, Q.Gò Vấp, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 20: 50 Phạm Văn Chiêu, P.8, Q.Gò Vấp, TP.HCM
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 35: 402 Lê Đức Thọ, P.6, Q.Gò Vấp, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 100: 304 Thống Nhất, P.16, Q.Gò Vấp, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho">
                <p>Quận Bình Tân</p>
              </div>
              <div className="vitri_chitiet">
                CN 10: 304 Lê Văn Quới, P.Bình Hưng Hoà A, Q.Bình Tân, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 25: 56 Nguyễn Thị Tú, P.Bình Hưng Hoà B, Q.Bình Tân, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 26: 631 Tỉnh Lộ 10, Khu Phố 2, P.Bình Trị Đông B, Q.Bình Tân,
                TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "20px" }}>
                <p>Huyện Hóc Môn</p>
              </div>
              <div className="vitri_chitiet">
                CN 30: 36/6 Phan Văn Hớn, Bà Điểm, Hóc Môn, Tp. Hồ Chí Minh, Xã
                Bà Điểm, H.Hóc Môn, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 44: 59/1A-59/1B Quang Trung, Khu phố 8, Thị trấn Hóc Môn,
                H.Hóc Môn, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "20px" }}>
                <p>Hà Nội</p>
              </div>
              <div className="quan_thanhpho">
                <p>Quận Cầu Giấy</p>
              </div>
              <div className="vitri_chitiet">
                CN 16: 182 Cầu Giấy, P.Quan Hoa, Q.Cầu Giấy, Hà Nội (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "15px" }}>
                <p>Quận Hai Bà Trưng</p>
              </div>
              <div className="vitri_chitiet">
                CN 84: 40 Bạch Mai, P.Cầu Dền, Q.Hai Bà Trưng, Hà Nội{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Đà Nẵng</p>
              </div>
              <div className="quan_thanhpho">
                <p>Quận Thanh Khê</p>
              </div>
              <div className="vitri_chitiet">
                CN 51: 393 Lê Duẩn, P.Tân Chính, Q.Thanh Khê, Đà Nẵng (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Cần Thơ</p>
              </div>
              <div className="quan_thanhpho">
                <p>Quận Ninh Kiều</p>
              </div>
              <div className="vitri_chitiet">
                CN 38: 189-197 đường 30 Tháng 4, P.Xuân Khánh, Q.Ninh Kiều, Cần
                Thơ (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 80: 25-25B Nguyễn Trãi, P.Tân An, Q.Ninh Kiều, Cần Thơ{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 92: 182 Trần Hưng Đạo, P.An Nghiệp, Q.Ninh Kiều, Cần Thơ{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 93: 58 Hùng Vương, P.Thới Bình, Q.Ninh Kiều, Cần Thơ{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>An Giang</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Long Xuyên</p>
              </div>
              <div className="vitri_chitiet">
                CN 60: 1395 Trần Hưng Đạo, P.Mỹ Long, Thành Phố Long Xuyên, An
                Giang{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Bà Rịa Vũng Tàu</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Vũng Tàu</p>
              </div>
              <div className="vitri_chitiet">
                CN 37: 177 Ba Cu, P.4, Thành Phố Vũng Tàu, Bà Rịa Vũng Tàu (Có
                SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Bạc Liêu</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Bạc Liêu</p>
              </div>
              <div className="vitri_chitiet">
                CN 59: 238 Trần Phú, P.7, Thành Phố Bạc Liêu, Bạc Liêu{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Bến Tre</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Bến Tre</p>
              </div>
              <div className="vitri_chitiet">
                CN 54: 75C Đại lộ Đồng Khởi, P.Phú Khương, Thành Phố Bến Tre,
                Bến Tre{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Bình Định</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Quy Nhơn</p>
              </div>
              <div className="vitri_chitiet">
                CN 77: 232A Phan Bội Châu, P.Trần Hưng Đạo, Thành Phố Quy Nhơn,
                Bình Định{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Bình Dương</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thị Xã Dĩ An</p>
              </div>
              <div className="vitri_chitiet">
                CN 34: 202-204 Nguyễn An Ninh, Khu phố Bình Minh 2, P.Dĩ An, Thị
                xã Dĩ An, Bình Dương{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 46: 28-30 Lê Trọng Tấn, P.An Bình, Thị xã Dĩ An, Bình Dương{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho">
                <p>Thị Xã Thuận An</p>
              </div>
              <div className="vitri_chitiet">
                CN 42: 11A Cách Mạng Tháng Tám, Tổ 13, Khu phố Chợ, P.Lái Thiêu,
                Thị xã Thuận An, Bình Dương{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 68: 7A/2B Tỉnh lộ 43, P.Bình Hòa, Thị xã Thuận An, Bình Dương{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "75px" }}>
                <p>Bình Phước</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thị Xã Đồng Xoài</p>
              </div>
              <div className="vitri_chitiet">
                CN 74: 513 Phú Riềng Đỏ, P.Tân Xuân, Thị Xã Đồng Xoài, Bình
                Phước{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Bình Thuận</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Phan Thiết</p>
              </div>
              <div className="vitri_chitiet">
                CN 62: 401 Trần Hưng Đạo, P.Bình Hưng, Thành Phố Phan Thiết,
                Bình Thuận{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Cà Mau</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Cà Mau</p>
              </div>
              <div className="vitri_chitiet">
                CN 67: 197-199 Trần Hưng Đạo, P.5, Thành Phố Cà Mau, Cà Mau{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Đắc Lắc</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Buôn Ma Thuột</p>
              </div>
              <div className="vitri_chitiet">
                CN 53: 96-98-100 Yjút, P.Thống Nhất, Thành Phố Buôn Ma Thuột,
                Đắk Lắk{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Đồng Nai</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Biên Hoà</p>
              </div>
              <div className="vitri_chitiet">
                CN 33: 1519-1521 Phạm Văn Thuận, P.Thống Nhất, Thành Phố Biên
                Hòa, Đồng Nai (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 41: 695 Phạm Văn Thuận, P.Tam Hiệp, Thành Phố Biên Hòa, Đồng
                Nai{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 43: 136/7 Phan Trung, Khu phố 7, P.Tân Tiến, Thành Phố Biên
                Hòa, Đồng Nai{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 45: 582 Nguyễn Ái Quốc, P.Hố Nai, Thành Phố Biên Hòa, Đồng
                Nai{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 95: 68 Bùi Văn Hòa, P.Long Bình Tân, Thành Phố Biên Hòa, Đồng
                Nai{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Đồng Tháp</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Cao Lãnh</p>
              </div>
              <div className="vitri_chitiet">
                CN 58: 96 Nguyễn Huệ, P.2, Thành Phố Cao Lãnh, Đồng Tháp{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Gia Lai</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Pleiku</p>
              </div>
              <div className="vitri_chitiet">
                CN 70: 30-30B Phan Đình Phùng, P.Tây Sơn, Thành Phố Pleiku, Gia
                Lai{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Hải Phòng</p>
              </div>
              <div className="quan_thanhpho">
                <p>Quận Ngô quyền</p>
              </div>
              <div className="vitri_chitiet">
                CN 72: 113C-113D Lương Khánh Thiện, P.Cầu Đất, Q.Ngô Quyền, Hải
                Phòng{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Khánh Hoà</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Nha Trang</p>
              </div>
              <div className="vitri_chitiet">
                CN 57: 58 Lý Thánh Tôn, P.Phương Sài, Thành Phố Nha Trang, Khánh
                Hòa{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Kiên Giang</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Rạch Giá</p>
              </div>
              <div className="vitri_chitiet">
                CN 48: 407 Nguyễn Trung Trực, P.Vĩnh Lạc, Thành Phố Rạch Giá,
                Kiên Giang{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Lâm Đồng</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Đà Lạt</p>
              </div>
              <div className="vitri_chitiet">
                CN 61: 1-3 Hai Bà Trưng, P.6, Thành Phố Đà Lạt, Lâm Đồng (Có
                SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Long An</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Tân An</p>
              </div>
              <div className="vitri_chitiet">
                CN 64: 12 Nguyễn Đình Chiểu, P.1, Thành Phố Tân An, Long An{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Nghệ An</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Vinh</p>
              </div>
              <div className="vitri_chitiet">
                CN 75: 217 Nguyễn Văn Cừ, P.Hưng Bình, Thành Phố Vinh, Nghệ An{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Ninh Thuận</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Phan Rang</p>
              </div>
              <div className="vitri_chitiet">
                CN 102: 562-564 Thống Nhất, P.Đạo Long, Thành Phố Phan Rang,
                Ninh Thuận{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Tây Ninh</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Tây Ninh</p>
              </div>
              <div className="vitri_chitiet">
                CN 65: 499-501 Cách Mạng Tháng Tám, P.3, Thành Phố Tây Ninh, Tây
                Ninh{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Thanh Hoá</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Thanh Hoá</p>
              </div>
              <div className="vitri_chitiet">
                CN 78: 137 Nguyễn Trãi, P.Tân Sơn, Thành Phố Thanh Hóa, Thanh
                Hóa
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Thừa Thiên Huế</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Huế</p>
              </div>
              <div className="vitri_chitiet">
                CN 55: 76 Bà Triệu, P.Phú Hội, Thành Phố Huế, Thừa Thiên Huế{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 98: 146 Hùng Vương, P.Phú Nhuận, Thành Phố Huế, Thừa Thiên
                Huế{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Tiền Giang</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Mỹ Tho</p>
              </div>
              <div className="vitri_chitiet">
                CN 49: 194 Ấp Bắc, P.5, Thành Phố Mỹ Tho, Tiền Giang{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Trà Vinh</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Trà Vinh</p>
              </div>
              <div className="vitri_chitiet">
                CN 56: 38-40 Phạm Thái Bường, Khóm 1, P.3, Thành Phố Trà Vinh,
                Trà Vinh
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="ten_thanhpho" style={{ marginTop: "25px" }}>
                <p>Vĩnh Long</p>
              </div>
              <div className="quan_thanhpho">
                <p>Thành Phố Vĩnh Long</p>
              </div>
              <div className="vitri_chitiet">
                CN 63: 168 Trưng Nữ Vương, P.1, Thành Phố Vĩnh Long, Vĩnh Long{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>
                <br />
              </div>
            </div>

            <div className="vitri_phai">
              <div className="quan_thanhpho" style={{ marginTop: "25px" }}>
                <p>Quận 2</p>
              </div>
              <div className="vitri_chitiet">
                CN 22: 109 Đường Nguyễn Duy Trinh, P.Bình Trưng Tây, Q.2, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 79: 112 Trần Não, P.An Khánh, Q.2, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "33px" }}>
                <p>Quận 5</p>
              </div>
              <div className="vitri_chitiet">
                CN 12: 141A-143 Nguyễn Trãi, P.2, Q.5, TP.HCM (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho">
                <p>Quận 7</p>
              </div>
              <div className="vitri_chitiet">
                CN 7: 468A Nguyễn Thị Thập, P.Tân Quy, Q.7, TP.HCM (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 29: 420 Huỳnh Tấn Phát, P.Bình Thuận, Q.7, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 82: 219 Nguyễn Thị Thập, P.Tân Phú, Q.7, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 99: 726 Huỳnh Tấn Phát, P.Tân Phú, Q.7, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "18px" }}>
                <p>Quận 9</p>
              </div>
              <div className="vitri_chitiet">
                CN 4: 94 Lê Văn Việt, P.Hiệp Phú, Q.9, TP.HCM (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 28 : 256 Đỗ Xuân Hợp, Khu phố 4, P.Phước Long A, Q.9, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 69: 224A Lê Văn Việt, P.Tăng Nhơn Phú B, Q.9, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 76: 39 Nguyễn Văn Tăng, P.Long Thạnh Mỹ, Q.9, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 85: 1207 Nguyễn Duy Trinh, P.Long Trường, Q.9, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "40px" }}>
                <p>Quận 11</p>
              </div>
              <div className="vitri_chitiet">
                CN 50: 296-298 Lãnh Binh Thăng, P.11, Q.11, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho">
                <p>Quận Tân Bình</p>
              </div>
              <div className="vitri_chitiet">
                CN 1: 71 Hoàng Hoa Thám, P.13, Q.Tân Bình, TP.HCM (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 23: 28 Phan Huy Ích, P.15, Q.Tân Bình, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 32: 694 Âu Cơ, P.14, Q.Tân Bình, TP.HCM
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 71: 31-33 Phổ Quang, P.2, Q.Tân Bình, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 73: 723 Cách Mạng Tháng Tám, P.6, Q.Tân Bình, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho">
                <p>Quận Phú Nhuận</p>
              </div>
              <div className="vitri_chitiet">
                CN 3: 176 Phan Đăng Lưu, P.3, Q.Phú Nhuận, TP.HCM (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 14: 48 Lê Văn Sỹ, P.11, Q.Phú Nhuận, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "76px" }}>
                <p>Quận Bình Thạnh</p>
              </div>
              <div className="vitri_chitiet">
                CN 5: 119-121 Nguyễn Gia Trí (D2 cũ), P.25, Q.Bình Thạnh, TP.HCM
                (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 47: 167 Nguyễn Xí, P.26, Q.Bình Thạnh, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 52: 274 Xô Viết Nghệ Tĩnh, P.21, Q.Bình Thạnh, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 66: 261 Lê Quang Định, P.7, Q.Bình Thạnh, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho">
                <p>Quận Thủ Đức</p>
              </div>
              <div className="vitri_chitiet">
                CN 15: 15 Võ Văn Ngân, P.Linh Chiểu, Q.Thủ Đức, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 31: 133 Hiệp Bình, KP 7, P.Hiệp Bình Chánh, Q.Thủ Đức, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 81: 1134 Kha Vạn Cân, P.Linh Chiểu, Q.Thủ Đức, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 101: 363-365A Tô Ngọc Vân, P.Linh Đông, Q.Thủ Đức, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "19px" }}>
                <p>Huyện Bình Chánh</p>
              </div>
              <div className="vitri_chitiet">
                CN 24: 441 Quốc Lộ 50, Xã Bình Hưng, H.Bình Chánh, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 36: 1261 Phạm Hùng, ấp 4A, Xã Bình Hưng, H.Bình Chánh, TP.HCM{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "65px" }}>
                <p>Quận Đống Đa</p>
              </div>
              <div className="vitri_chitiet">
                CN 19: 169 Thái Hà, P.Láng Hạ, Q.Đống Đa, Hà Nội{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "20px" }}>
                <p>Quận Long Biên</p>
              </div>
              <div className="vitri_chitiet">
                CN 83: 594 Nguyễn Văn Cừ, P.Gia Thụy, Q.Long Biên, Hà Nội{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "800px" }}>
                <p>Thị Xã Tân Uyên</p>
              </div>
              <div className="vitri_chitiet">
                CN 103: 34 ĐT746, P.Tân Phước Khánh, Thị xã Tân Uyên, Bình Dương{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "30px" }}>
                <p>Thành Phố Thủ Dầu Một</p>
              </div>
              <div className="vitri_chitiet">
                CN 39: 219 Yersin, P.Phú Cường, Thành Phố Thủ Dầu Một, Bình
                Dương (Có SPA){" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 86: 4 Đường 30/4, P.Phú Hòa, Thành Phố Thủ Dầu Một, Bình
                Dương{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
                CN 87: 517 Phú Lợi, P.Phú Lợi, Thành Phố Thủ Dầu Một, Bình Dương{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "460px" }}>
                <p>Thị Xã Long Khánh</p>
              </div>
              <div className="vitri_chitiet">
                CN 104: 361 Hồ Thị Hương, P.Xuân Thanh, Thị Xã Long Khánh, Đồng
                Nai{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
              <div className="quan_thanhpho" style={{ marginTop: "680px" }}>
                <p>Thành Phố Bảo Lộc</p>
              </div>
              <div className="vitri_chitiet">
                CN 96: 63 - 65 Lê Hồng Phong, P.1, Thành phố Bảo Lộc, Lâm Đồng{" "}
                <a href="" style={{ color: "#0B7043" }}>
                  Xem bản đồ
                </a>{" "}
                <br />
              </div>
            </div>
          </div>
          <div className="support_lienhe">
            <div>
              <img src="Images/icon_map.jpg" alt="" />
              <p
                className="help"
                style={{ width: "60px", top: "37%", left: "-50px" }}
              >
                Bản đồ
              </p>
            </div>
            <div>
              <img src="Images/icon_contact.jpg" alt="" />
              <p
                className="help"
                style={{ width: "210px", top: "37%", left: "-200px" }}
              >
                Để lại lời nhắn cho chúng tôi
              </p>
            </div>
            <div>
              <img src="Images/icon_call.jpg" alt="" />
              <p
                className="help"
                style={{ width: "70px", top: "37%", left: "-60px" }}
              >
                Gọi ngay
              </p>
            </div>
            <div>
              <img src="Images/icon_messenger.jpg" alt="" />
              <p
                className="help"
                style={{ width: "160px", top: "37%", left: "-150px" }}
              >
                Facebook Messenger
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
