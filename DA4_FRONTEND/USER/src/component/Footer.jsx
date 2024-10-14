
function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-in">
          <div className="cot-1">
            <div className="tieude2">Hỗ Trợ khách Hàng</div>
            <div className="content0">Hotline: 1800 6324</div>
            <div className="content2">(miễn phí, 08-22h kể cả T7, CN)</div>
            <div className="content2">Các câu hỏi thường gặp</div>
            <div className="content2">Gửi yêu cầu hỗ trợ</div>
            <div className="content2">Hướng dẫn đặt hàng</div>
            <div className="content2">Phương thức thanh toán</div>
            <div className="content2">Phương thức vận chuyển</div>
            <div className="content2">Chính sách đổi trả</div>
          </div>
          <div className="cot-2">
            <div className="tieude2">Về hasaki.vn</div>
            <div className="content2">Giới thiệu Hasaki.vn</div>
            <div className="content2">Tuyển dụng</div>
            <div className="content2">Chính sách bảo mật</div>
            <div className="content2">Điều khoản sử dụng</div>
            <div className="content2">Liên hệ</div>
          </div>
          <div className="cot-3">
            <div className="tieude2">Hợp tác & liên kết</div>
            <div className="content2">Kênh người bán</div>
            <div className="content2">https://hasaki.vn/spa.html</div>
            <div className="content2">Hasaki cẩm nang</div>
            <div className="media-icons">
              <a href="https://www.facebook.com/Hasaki.vn"></a>
              <img src="Images/fb.svg" alt="" />
              <a href="https://www.instagram.com/hasakibeauty"></a>
              <img src="Images/instagram.svg" alt="" />
            </div>
            <div className="tieude2">Thanh toán</div>
            <div className="media-icons">
              <img src="Images/card.svg" alt="" />
              <img src="Images/visa.svg" alt="" />
              <img src="Images/atm.svg" alt="" />
            </div>
          </div>
          <div className="cot-4">
            <div style={{ fontSize: "18px" }}>
              Cập nhật thông tin khuyến mãi
            </div>
            <input
              type="text"
              style={{
                width: "190px",
                height: "30px",
                border: "0.5px solid gray",
                marginTop: "5px",
              }}
              placeholder="Email của bạn"
            />
            <label>
              <input
                style={{ marginLeft: "10px" }}
                type="radio"
                name="gender"
                value="male"
              />
              <span className="radio"></span>
              Nam
            </label>
            <label>
              <input type="radio" name="gender" value="female" />
              <span className="radio"></span>
              Nữ
            </label>
            <button className="btn-dangky" style={{ marginLeft: "10px" }}>
              Đăng ký
            </button>
            <div className="cot4-hinhanh" style={{ marginTop: "10px" }}>
              <img
                src="Images/qr_download_app.svg"
                style={{ width: "100px" }}
                alt=""
              />
              <div className="cot4-hinhanh_anhphu">
                <div>
                  <img
                    src="Images/dl_apple.svg"
                    style={{ width: "140px" }}
                    alt=""
                  />
                </div>
                <img
                  src="Images/dl_google.svg"
                  style={{ width: "150px" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
