import { Breadcrumb, theme } from "antd";

const Home = function () {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          width:'100%',
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        <div className="bodybenphai">
          {/* <div className="welcome-contener">
            <div className="title-welcome" style={{ display: "flex" }}>
              <h1>
                Hi, Xuân Én Trần
                <img
                  src="../Hinhanh/icons8_heart_1.svg"
                  alt=""
                  style={{ width: 20, marginLeft: 10 }}
                />
              </h1>
              <p>Welcome to Manager Page</p>
            </div>
            <img
              className="image-welcome"
              src="../Hinhanh/icons8_businesswoman.svg"
              alt="#"
            />
          </div> */}
          <div className="tongthu">
            <div className="tongsp_dat">
              <div className="Tieude">
                <p>Total Order</p>
              </div>
              <div className="number">
                <p>40,869</p>
                <i className="bx bx-cart" />
              </div>
              <div className="muiten">
                <i className="bx bxs-up-arrow-circle" />
              </div>
            </div>
            <div className="tongsp_ban">
              <div className="Tieude">
                <p>Total Sales</p>
              </div>
              <div className="number_doanhthu">
                <p>38,876</p>
                <i className="bx bxs-cart-add" />
              </div>
              <div className="muiten">
                <i className="bx bxs-up-arrow-circle" />
              </div>
            </div>
            <div className="tongsp_ban">
              <div className="Tieude">
                <p>Total Profit</p>
              </div>
              <div className="number_loinhuan">
                <p>$12,289</p>
                <i className="bx bx-cart" />
              </div>
              <div className="muiten">
                <i className="bx bxs-up-arrow-circle" />
              </div>
            </div>
            <div className="tongsp_ban">
              <div className="Tieude" style={{ marginLeft: 10 }}>
                <p>Total Return</p>
              </div>
              <div className="number_trave">
                <p>38,876</p>
                <i className="bx bx-cart-download" />
              </div>
              <div className="muiten_trave">
                <i className="bx bx-down-arrow-circle" />
              </div>
            </div>
          </div>
          <div className="chitiet">
            <div className=" banhang">
              <div className="tittle_banhang">
                <p>Đơn hàng gần đây</p>
              </div>
              <div className="chitiet_banhang">
                <div className="thoigian">
                  <p>Thời gian</p>
                  <ul style={{ marginTop: 10, marginLeft: "-2px" }}>
                    <li>29-05-2024</li>
                    <li>15-06-2024</li>
                    <li>06-11-2023</li>
                    <li>20-11-2023</li>
                    <li>05-12-2023</li>
                    <li>28-10-2023</li>
                    <li>30-12-2023</li>
                    <li>01-10-2023</li>
                    <li>25-12-2023</li>
                  </ul>
                </div>
                <div className="thoigian" style={{ marginLeft: 90 }}>
                  <p>Khách hàng</p>
                  <ul>
                    <li>Trịnh Thuỳ Linh</li>
                    <li>Trần Thu Trà</li>
                    <li>Vũ Công Nam</li>
                    <li>Hoàng Phong</li>
                    <li>Nguyễn Huyền</li>
                    <li>Phạm Linh Linh</li>
                    <li>Trương Thị Loan</li>
                    <li>Tạ Hồng Đào</li>
                    <li>Nguyễn Minh Công</li>
                  </ul>
                </div>
                <div className="thoigian" style={{ marginLeft: 90 }}>
                  <p>Tình trạng</p>
                  <ul>
                    <li>Đã thanh toán</li>
                    <li>Hoàn hàng</li>
                    <li>Đang vận chuyển</li>
                    <li>Đã thanh toán</li>
                    <li>Đang vận chuyển</li>
                    <li>Đã thanh toán</li>
                    <li>Đã thanh toán</li>
                    <li>Đang vận chuyển</li>
                    <li>Hoàn hàng</li>
                  </ul>
                </div>
                <div className="thoigian" style={{ marginLeft: 100 }}>
                  <p>Tổng tiền</p>
                  <ul>
                    <li>$200</li>
                    <li>$309.21</li>
                    <li>$79</li>
                    <li>$103.45</li>
                    <li>$1000</li>
                    <li>$567</li>
                    <li>$48.98</li>
                    <li>$28.68</li>
                    <li>$283.03</li>
                  </ul>
                </div>
              </div>
              <div className="see_all">
                <p>Xem tất cả</p>
              </div>
            </div>
            <div className=" sanpham-banchay">
              <div className="tittle_banhang">
                <p>Top 10 Best-Seller</p>
              </div>
              <div className="sanphams">
                <img src="../Hinhanh/product20.jpg" alt="" />
                <p>Kem dưỡng da tay</p>
                <p style={{ marginLeft: 130 }}>$100</p>
              </div>
              <div className="sanphams">
                <img src="../Hinhanh/product23.jpg" alt="" />
                <p>Tonner dưỡng ẩm</p>
                <p style={{ marginLeft: 135 }}>$280</p>
              </div>
              <div className="sanphams">
                <img src="../Hinhanh/product22.jpg" alt="" />
                <p>Toner dưỡng body</p>
                <p style={{ marginLeft: 128 }}>$150</p>
              </div>
              <div className="sanphams">
                <img src="../Hinhanh/product24.jpg" alt="" />
                <p>Kem chống nắng</p>
                <p style={{ marginLeft: 140 }}>$980</p>
              </div>
              <div className="sanphams">
                <img src="../Hinhanh/product25.jpg" alt="" />
                <p>Mặt nạ nha đam</p>
                <p style={{ marginLeft: 147 }}>$1200</p>
              </div>
              <div className="sanphams">
                <img src="../Hinhanh/product27.jpg" alt="" />
                <p>Toner dưỡng da mặt</p>
                <p style={{ marginLeft: 116 }}>$360</p>
              </div>
              <div className="sanphams">
                <img src="../Hinhanh/product29.jpg" alt="" />
                <p>Kem dưỡng innisfree</p>
                <p style={{ marginLeft: 110 }}>$450</p>
              </div>
              <div className="sanphams">
                <img src="../Hinhanh/product30.jpg" alt="" />
                <p>Mặt nạ giấy</p>
                <p style={{ marginLeft: 185 }}>$3200</p>
              </div>
              <div className="sanphams">
                <img src="../Hinhanh/product38.jpg" alt="" />
                <p>Mặt nạ mật ong</p>
                <p style={{ marginLeft: 158 }}>$355</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
