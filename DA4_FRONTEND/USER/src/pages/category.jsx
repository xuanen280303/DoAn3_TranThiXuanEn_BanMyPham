import React, { useState } from "react";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { uploads } from "../constant/api";
import { getLocGia } from "../services/category.service";
import { useParams } from "react-router-dom";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};

function Category() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [giaTu, setgiaTu] = useState("");
  const [giaDen, setgiaDen] = useState("");
  const [search, setSearch] = useState("");

  async function loadData(id, priceFilter = {}) {
    const boLoc = await getLocGia(id, priceFilter);
    setData(boLoc);
  }

  useEffect(() => {
    loadData(id);
  }, [id]);

  const handlepriceFilterChange = (e) => {
    e.preventDefault();
    const priceFilter = {
      giatu: giaTu,
      giaden: giaDen,
      timkiem: search,
    };
    //Gọi hàm loadData để tải lại dữ liệu theo các tiêu chí lọc mới
    loadData(id, priceFilter);
  };

  return (
    <div>

      <div className="link-out">
        <div className="link" style={{ marginTop: "15px" }}>
          <a href="index.html">Trang chủ </a>
          <i className="fas fa-caret-right"></i> Sức khoẻ-làm đẹp
          <i className="fas fa-caret-right"></i> Chăm Sóc Tóc Và Da Dầu
          <i className="fas fa-caret-right"></i> Dưỡng Tóc
          <i className="fas fa-caret-right"></i> Serum / Dầu Dưỡng Tóc
        </div>
      </div>

      <div style={{ width: "100%", height: "95px" }}>
        <img
          src="/Images/bannertoc.jpg"
          style={{
            width: "98%",
            height: "92px",
            marginTop: "-5px",
            marginLeft: "14px",
          }}
          alt=""
        />
      </div>

      {/* <!---------------------------- 20 SẢN PHẨM ---------------------------------------> */}
      <div className="cover_products">
        {/* <!-- Menu dọc --> */}
        <div className="menu-con">
          <div className="bolocs" style={{ marginTop: "30px" }}>
            <div className="title-boloc">BỘ LỌC TÌM KIẾM</div>
            <div className="locgia">
              <div className="inputs-loc">
                <input
                  type="text"
                  name="timkiem"
                  id="timkiem"
                  placeholder="Tìm kiếm..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="locgia">
              <div className="title-locgia">Khoảng giá</div>
              <div className="inputs-loc">
                <input
                  type="number"
                  name="giatu"
                  id="giatu"
                  placeholder="TỪ"
                  value={giaTu}
                  min="0"
                  onChange={(e) => setgiaTu(e.target.value)}
                />
                -
                <input
                  type="number"
                  name="giaden"
                  id="giaden"
                  placeholder="ĐẾN"
                  value={giaDen}
                  onChange={(e) => setgiaDen(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" onClick={handlepriceFilterChange}>
              ÁP DỤNG
            </button>
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
            {data?.data.map((item) => (
              <div className="product-sanpham" key={item.MaMP}>
                <Link to={`/productdetail/${item.MaMP}`}>
                  <img
                    src={uploads() + item.AnhDaiDien}
                    alt=""
                    className="sanpham-img"
                  />
                </Link>
                <div className="sanpham-price">
                  <div className="sanpham-giagoc">
                    <p>
                      {formatPrice(item.GiaBan)} <span className="dong">đ</span>
                    </p>
                  </div>
                  <div className="sanpham-price-old">
                    <p>
                      {formatPrice(item.GiaGoc)} <span className="dong">đ</span>
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
                  <p>{item.TenMP}</p>
                </div>
                <div className="xephang">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <div className="xephang-number">
                    (6) |<i className="fa fa-shopping-cart"></i>
                    {item.SLTon}
                  </div>
                </div>
                <div className="thanh_bar-line">
                  <div className="time_deal_process">
                    <span
                      style={{ width: "80%" }}
                      className="progress_bar_fill active"
                    ></span>
                  </div>
                  <div className="sanpham-phantram">9%</div>
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
export default Category;
