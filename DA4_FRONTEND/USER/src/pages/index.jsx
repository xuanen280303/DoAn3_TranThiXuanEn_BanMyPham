import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { uploads } from "../constant/api";
import { getDanhMuc, getMyPham } from "../services/index.service";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};

function Index() {
  const [data, setData] = useState(null);

  async function loadData() {
    const [myPham, loaiMyPham] = await Promise.all([getMyPham(), getDanhMuc()]);
    setData({ myPham, loaiMyPham });
  }
  console.log(data);
  useEffect(() => {
    loadData();
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <div className="brand">
        <div className="thuonghieu">
          <p>
            <i>innisfree</i>
          </p>
        </div>
        <div className="info">
          <div className="tieude_brand">
            <p>innisfree</p>
            <div className="gianhang">
              <p>Gian hàng chính hãng</p>
            </div>
          </div>
        </div>
        <div className="tieude_brand">
          <p
            style={{ marginTop: "42px", fontSize: "15px", marginLeft: "10px" }}
          >
            4505 theo dõi
          </p>
        </div>
        <div className="tieude_brand">
          <div
            className="gianhang"
            style={{
              width: "110px",
              height: "28px",
              marginLeft: "40px",
              fontSize: "18px",
              marginTop: "35px",
              fontWeight: "bold",
            }}
          >
            <p>+ Theo dõi</p>
          </div>
        </div>
      </div>

      <div className="banner_main">
        <div className="slider">
          <Slider {...settings}>
            <div className="slider-item">
              <div style={{ height: "100%" }} className="congnghe-khunganh">
                <img src="Images/dot6.jpg" alt="#" />
              </div>
            </div>

            <div className="slider-item">
              <div style={{ height: "100%" }} className="congnghe-khunganh">
                <img src="Images/dot3.jpg" alt="#" />
              </div>
            </div>

            <div className="slider-item">
              <div style={{ height: "100%" }} className="congnghe-khunganh">
                <img src="Images/dot4.jpg" alt="#" />
              </div>
            </div>

            <div className="slider-item">
              <div style={{ height: "100%" }} className="congnghe-khunganh">
                <img src="Images/dot8.jpg" alt="#" />
              </div>
            </div>

            <div className="slider-item">
              <div style={{ height: "100%" }} className="congnghe-khunganh">
                <img src="Images/dot7.jpg" />
              </div>
            </div>
          </Slider>
        </div>
        <div class="anhbenphai">
          <img
            src="Images/phaitren.jpg"
            style={{ width: "480px", height: "145px" }}
            alt=""
          />
          <img
            src="Images/phaiduoi.jpg"
            style={{ width: "480px", height: "145px", marginTop: "5px" }}
            alt=""
          />
        </div>
      </div>

      {/* <!------------------------------------ DANH MỤC ------------------------------> */}
      <div className="danhmucsanpham">
        <div className="tendanhmuc">Danh mục</div>
        <div className="sanphams">
          {data?.loaiMyPham?.map((lmp) => (
            <div
              className="sanpham"
              key={lmp.MaLoaiMP}
              style={{ backgroundColor: "#F9B294" }}>
              <div className="khunganhsp">
                <Link to={`/category/${lmp.MaLoaiMP}`}>
                  <img src={uploads() + lmp.AnhDaiDien} alt="no" />
                </Link>
              </div>
              <div className="tensanpham">{lmp.TenLoaiMP}</div>
            </div>
          ))}
        </div>
      </div>

      {/* <!---------------------------- MỸ PHẨM ---------------------------------------> */}
      <div className="cover_products">
        <div className="menu-con">
          <div>
            <div className="tieude11">Thương hiệu</div>
            <div className="content1">Innisfree (50)</div>
          </div>
          <div>
            <div className="tieude11" style={{ marginTop: "30px" }}>
              Vấn đề về da
            </div>
            <div className="content1">Da dầu, lỗ chân lông to (9) </div>
            <div className="content1">Da sạm, xỉn, không đều màu (6) </div>
            <div className="content1">Da khô, mất nước (3) </div>
            <div className="content1">Da mụn (2) </div>
          </div>
          <div>
            <div className="tieude11" style={{ marginTop: "30px" }}>
              Size
            </div>
            <div className="content1">Fullsize (32) </div>
            <div className="content1">Một miếng (10) </div>
            <div className="content1">Bộ sản phẩm (2) </div>
            <div className="content1">Minisize (1) </div>
            <div className="content1">Hộp (1) </div>
            <div className="content1">Chai vừa(200ml-400ml) (1) </div>
          </div>
          <div>
            <div className="tieude11" style={{ marginTop: "30px" }}>
              Thành phần
            </div>
            <div className="content1">Trà xanh (11) </div>
            <div className="content1">Retinol (3) </div>
            <div className="content1">Mật ong (2) </div>
            <div className="content1">Vật lý (2) </div>
          </div>
          <div>
            <div className="tieude11" style={{ marginTop: "30px" }}>
              Loại da
            </div>
            <div className="content1">Da thường/Mọi loại da (25) </div>
            <div className="content1">Da dầu, hỗn hợp dầu (8) </div>
          </div>
          <div>
            <div className="tieude1" style={{ marginTop: "30px" }}>
              Công dụng
            </div>
            <div className="content1">Dưỡng ẩm (8) </div>
            <div className="content1">Làm sáng da (6) </div>
            <div className="content1">Làm sạch da (6) </div>
            <div className="content1">Trang điểm môi (3) </div>
          </div>
          <div>
            <div className="tieude11" style={{ marginTop: "30px" }}>
              Tông màu
            </div>
            <div className="content1">Tự nhiên (3) </div>
            <div className="content1">Nâu (3) </div>
          </div>
          <div>
            <div className="tieude11" style={{ marginTop: "30px" }}>
              Loại sản phẩm
            </div>
            <div className="content1">Mặt nạ giấy (3) </div>
            <div className="content1">Sữa rửa mặt (4) </div>
            <div className="content1">Kem dưỡng (8) </div>
            <div className="content1">Toner (2) </div>
            <div className="content1">Kem chống nắng (10) </div>
            <div className="content1">Son thỏi (100) </div>
            <div className="content1">Cushion (30) </div>
            <div className="content1">Serum (35) </div>
            <div className="content1">Tẩy trang (20) </div>
            <div className="content1">Phấn phủ (8) </div>
          </div>
          <div>
            <div className="tieude11" style={{ marginTop: "30px" }}>
              Kết cấu
            </div>
            <div className="content1">Dạng thỏi (3) </div>
            <div className="content1">Dạng miếng (4) </div>
            <div className="content1">Dạng chì (5) </div>
            <div className="content1">Tinh chất (2) </div>
            <div className="content1">Dạng nước (6) </div>
            <div className="content1">dạng gel(10) </div>
            <div className="content1">Dạng kem (3) </div>
            <div className="content1">Dạng bột (5) </div>
          </div>
          <div>
            <div className="tieude11" style={{ marginTop: "30px" }}>
              Giới tính
            </div>
            <div className="content1">Nam & Nữ (50) </div>
          </div>
          <div>
            <div className="tieude11" style={{ marginTop: "30px" }}>
              Đặc tính
            </div>
            <div className="content1">Dạng lì (9) </div>
            <div className="content1">Có mùi (3) </div>
            <div className="content1">2 in 1 (1) </div>
            <div className="content1">Có màu (1) </div>
            <div className="content1">Chống nước/Lâu trôi (1) </div>
            <div className="content1">Ban ngày (1) </div>
          </div>
          <div>
            <div className="tieude11" style={{ marginTop: "30px" }}>
              Xuất xứ thương hiệu
            </div>
            <div className="content1">Hàn Quốc (50) </div>
          </div>
        </div>
        <div className="cover_product">
          <div className="sapxep">
            <span className="sapxep__label">Sắp xếp</span>
            <button className="btn btn--primary sapxep__btn1">Mới nhất</button>
            <button className="btn sapxep__btn2">Bán chạy</button>
            <button
              className="btn btn--primary sapxep__btn1"
              style={{ width: "120px" }}
            >
              Giá thấp đến cao
            </button>
            <button className="btn sapxep__btn1" style={{ width: "120px" }}>
              Giá cao đến thấp
            </button>
            <div className="sapxep__page">
              <span className="sapxep__page-num">
                <span className="sapxep__page-begin">1</span>/
                <span className="sapxep__page-begin">10</span>
              </span>
              <div className="sapxep__page-control">
                <a
                  href="#"
                  className="sapxep__page-btn sapxep__page-btn--disable"
                >
                  <i className="fas fa-angle-left sapxep__page-icon"></i>
                </a>
                <a href="#" className="sapxep__page-btn">
                  <i className="fas fa-angle-right sapxep__page-icon"></i>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- SẢN PHẨM --> */}
          <div className="products">
            {data?.myPham?.data.map((mp) => (
              <div className="product-sanpham" key={mp.MaMP}>
                <Link to={`/productdetail/${mp.MaMP}`}>
                  <img
                    src={uploads() + mp.AnhDaiDien}
                    alt=""
                    className="sanpham-img"
                  />
                </Link>
                <div className="sanpham-price">
                  <div className="sanpham-giagoc">
                    <p>
                      {formatPrice(mp.GiaBan)} <span className="dong">đ</span>
                    </p>
                  </div>
                  <div className="sanpham-price-old">
                    <p>
                      {formatPrice(mp.GiaGoc)} <span className="dong">đ</span>
                    </p>
                  </div>
                  <div>
                    <button className="sanpham-icon">23%</button>
                  </div>
                </div>
                <div className="sanpham-tittle">
                  <span>innisfree</span>
                </div>
                <div className="sanpham-content">
                  <p>{mp.TenMP}</p>
                </div>
                <div className="xephang">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <div className="xephang-number">
                    (6) |<i className="fa fa-shopping-cart"></i>
                    {mp.SLTon}
                  </div>
                </div>
                <div className="thanh_bar-line">
                  <div className="time_deal_process">
                    <span
                      style={{ width: "80%" }}
                      className="progress_bar_fill active"
                    ></span>
                  </div>
                  <div className="sanpham-phantram">34%</div>
                </div>
                <div className="sanpham-combo">
                  Bill 399k tặng Bộ sản phẩm dưỡng ẩm da Green...
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
export default Index;
