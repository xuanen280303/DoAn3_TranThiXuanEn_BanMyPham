import React, { useState } from "react";
import { uploads } from "../constant/api";
import { useEffect } from "react";

import { getProductDetail } from "../services/detail.service";
import { useParams } from "react-router-dom";
import { message } from "antd";
import { addToCart } from "../services/cart.service";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};

function Productdetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const [quantity, setQuantity] = useState(1);
  const [slTon, setSLTon] = useState(1);

  async function loadData(id) {
    const chiTiet = await getProductDetail(id);
    setData(chiTiet);
    setSLTon(chiTiet?.SLTon || 1); // Cập nhật SLTon từ dữ liệu mỹ phẩm
  }
  //tải dữ liệu sản phẩm khi giá trị id thay đổi
  useEffect(() => {
    loadData(id);
  }, [id]);
  
  // Xử lý số lượng nhập vào input
  const handleSoLuongChange = (event) => {
    const value = parseInt(event.target.value, 10);
    const newQuantity = Math.max(1, Math.min(value, slTon));
    setQuantity(newQuantity);
  };

  const handleAddToCart = async () => {
    if (!data) {
      messageApi.error("Vui lòng chọn mỹ phẩm!");
      return;
    }
    if (quantity <= 0) {
      messageApi.error("Vui lòng chọn số lượng mỹ phẩm hợp lệ!");
      return;
    }
    await addToCart(data, quantity);
  };

  return (
    <div>
      {contextHolder}

      <div
        className="link-outs"
        style={{ fontSize: "14px", marginBottom: "10px", marginLeft: "10px" }} >
        <div className="link" style={{ marginTop: "15px" }}>
          <a href="/index" className="trangchus">
            Trang chủ{" "}
          </a>
          <i className="fas fa-caret-right"></i> Sức khoẻ-làm đẹp
          <i className="fas fa-caret-right"></i> Nước hoa
          <i className="fas fa-caret-right"></i> Nước hoa nữ
          <i className="fas fa-caret-right"></i> Eau De Parfum Cho Nữ
          <i className="fas fa-caret-right"></i> Nước Hoa Nữ Chloé Love Story
          Eau De Perfum 75ml
        </div>
      </div>
      <div className="details_products">
        <div className="bentrai">
          <div className="sanpham-bentrai">
            <div className="bentrai1">
              <div className="hinhanh">
                <img src={`${uploads()}${data?.AnhDaiDien}`} alt="" />
              </div>
            </div>
            <div className="bentrai2">
              <div className="tensp">
                <img src="../Images/icon_nowfree.png" alt="" />
                <p>Chloé</p>
              </div>
              <div className="tittle1">
                <p>{data?.TenMP}</p>
              </div>
              <div className="tittle2">
                <p>Love Story Eau De Parfum Spray</p>
              </div>
              <div className="xephang1">
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <span className="star">&#9733;</span>
                <div className="xephang-number">
                  1 đánh giá | 0 Hỏi Đáp | Mã sản phẩm: 100390070
                </div>
              </div>
              <div className="deals">
                <div className="thanhngang_trai">
                  <img src="../Images/flash_deal_title.svg" alt="" />
                </div>
                <div className="thanhngang_phai">
                  <p>DEAL ĐÃ HẾT HẠN</p>
                </div>
              </div>
              <div className="giasp">
                <div className="gia1">
                  <p style={{ marginTop: "2px" }}>
                    {formatPrice(data?.GiaBan)} <span className="dong"> đ</span>
                  </p>
                </div>
                <div className="mota">
                  <p style={{ marginTop: "6px" }}>(Đã bao gồm VAT)</p>
                </div>
              </div>
              <div className="giathitruong">
                <span style={{ fontSize: "14px", marginTop: "5px" }}>
                  Giá thị trường :
                </span>
                <p
                  style={{
                    marginLeft: "5px",
                    fontSize: "14px",
                    marginTop: "0.2px",
                  }}
                >
                  {formatPrice(data?.GiaGoc)} <span className="dong">đ</span>
                </p>
                <span
                  style={{
                    marginLeft: "5px",
                    fontSize: "14px",
                    marginTop: "5px",
                  }}
                >
                  Tiết kiệm: 90.000 ₫
                </span>
                <span
                  style={{
                    color: "#ff6600",
                    fontSize: "14px",
                    marginTop: "5px",
                  }}
                >
                  (-34%)
                </span>
              </div>
              <div className="dungtich">
                <p>Khối lượng: {data?.KhoiLuong}</p>
                <img
                  style={{ width: "70px", height: "70px" }}
                  src={`${uploads()}${data?.AnhDaiDien}`}
                  alt=""
                />
              </div>
              <div>
                <p style={{ fontSize: "15px" }}>
                  Số lượng:
                  <input
                    style={{
                      width: "50px",
                      height: "35px",
                      marginLeft: "10px",
                      marginRight: "10px",
                      textAlign: "center",
                    }}
                    type="number"
                    value={quantity}
                    onChange={handleSoLuongChange}
                  />
                </p>
              </div>
              <div className="giaohang">
                <img src="../Images/icon_nowfree.png" alt="" />
                <p>Giao Nhanh Miễn Phí 2H tại 35 Tỉnh Thành:</p>
              </div>
              <div className="giaohang1">
                <p>
                  Bạn muốn nhận hàng trước 11h hôm nay (Miễn phí). Đặt hàng
                  trong 46 phút tới và chọn giao hàng 2H ở bước thanh toán. Xem
                  chi tiết
                </p>
              </div>
              <div className="nhanchon">
                <div className="nut1">
                  <div className="nut1_tren">
                    <p style={{ marginTop: "2px" }}>31/ 104 Chi Nhánh</p>
                  </div>
                  <div className="nut1_duoi">
                    <p style={{ marginTop: "2px" }}>Còn sản phẩm</p>
                  </div>
                </div>
                <div className="nut2">
                  <i className="fas fa-shopping-cart"></i>
                  <p style={{ marginTop: "2px" }} onClick={handleAddToCart}>
                    Giỏ hàng
                  </p>
                </div>
                <div className="nut3">
                  <div className="nut3_tren">
                    <p style={{ marginTop: "0.5px" }}>Mua ngay NowFree 2H</p>
                  </div>
                  <div className="nut3_duoi">
                    <p style={{ marginTop: "1px" }}>Trễ tặng 100k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mota_sanpham">
            <div className="gioithieusp">
              <p>Thông tin sản phẩm</p>
              <p>Thông số sản phẩm</p>
              <p>Thành phần sản phẩm</p>
              <p>Hướng dẫn sử dụng</p>
              <p>Hỏi đáp</p>
              <p>Đánh giá</p>
            </div>
            <div className="contents_sp">
              <p style={{ fontSize: "15px" }}>
                Nước Hoa Nữ Chloe Love Story EDP 75ml là sản phẩm nước hoa eau
                de parfum cho nữ đến từ thương hiệu Chloe của Pháp. Với mùi
                hương hoa cỏ gần gũi, nữ tính và ngọt ngào mang lại nét đẹp dịu
                dàng thanh lịch cho những cô gái yêu thích sự lãng mạn. Thiết kế
                chai theo hình cái móc khóa mô phỏng hình ảnh những chiếc khóa
                tình yêu trên cầu Pont des Arts, bên trên móc khóa là dãy ruy
                băng mỏng manh khéo léo cột vào, góp phần tăng sự nữ tính và hấp
                dẫn.
              </p>
            </div>
            <div className="anh_nuochoa">
              <img src="../Images/nuochoa_nu.jpg" alt="" />
            </div>
            <div className="contents_sp" style={{ marginTop: "24px" }}>
              <p style={{ fontSize: "15px" }}>
                Tháng 9 năm 2014, thương hiệu Chloe cho ra mắt dòng nước hoa mới
                mang tên Love story, được sáng tạo bởi nhà pha chế nước hoa Anne
                Flipo. Lấy cảm hứng từ các câu chuyện tình lãng mạn ở Paris và
                những cái móc khóa tình yêu trên cây cầu nổi tiếng Pont des
                Arts.
              </p>
              <p style={{ marginTop: "10px", fontSize: "15px" }}>
                Ấn tượng đầu tiên khi đến với Love Story là hương thơm tươi mát,
                quyến rũ của dầu hoa cam, sau đó chuyển dần qua sức hút của hoa
                lài trâu mang lại đôi chút cảm giác nữ tính. Hương cuối ấm áp
                với gỗ tuyết tùng và xạ hương. Love Story được xem là một sự kết
                hợp hoàn mỹ làm nổi bật vẻ đẹp tinh tế của người phụ nữ, nhưng
                vẫn không kém phần quyến rũ, lưu lại dấu ấn khó quên với người
                đối diện.
              </p>
              <p style={{ marginTop: "10px", fontSize: "15px" }}>
                Hiện sản phẩm Nước Hoa Nữ Chloe Love Story EDP 75ml đã có mặt
                tại
                <a href="#">Hasaki.</a>
              </p>
            </div>
            <div className="anh_nuochoa">
              <img src="../Images/nuochoa_nu2.jpg" alt="" />
            </div>
            <div className="tieude_nuochoa">
              <p style={{ fontSize: "15px" }}>Các tầng hương:</p>
              <div className="mota_chitiet">
                <ul style={{ fontSize: "15px" }}>
                  <li>Hương đầu: Hoa cam Neroli.</li>
                  <li>Hương giữa: Hoa cam, Hoa lài trâu.</li>
                  <li>Hương cuối: Xạ hương, Gỗ tuyết tùng.</li>
                </ul>
                <p style={{ marginTop: "12px" }}>
                  Nhóm hương: Floral (Hương hoa)
                </p>
                <p style={{ fontSize: "15px" }}>
                  Thời điểm khuyên dùng: Xuân, Ngày, Đêm
                </p>
                <p style={{ fontSize: "15px" }}>Độ lưu hương: 3 - 6 tiếng</p>
              </div>
            </div>
            <div className="tieude_nuochoa">
              <p style={{ fontSize: "15px" }}>Bảo quản:</p>
              <div className="mota_chitiet">
                <ul>
                  <li style={{ fontSize: "15px" }}>
                    Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp.
                  </li>
                  <li>Đậy nắp kín sau khi sử dụng.</li>
                </ul>
              </div>
            </div>
            <div className="tieude_nuochoa">
              <p style={{ fontSize: "15px" }}>Thông số sản phẩm:</p>
              <div className="mota_chitiet">
                <ul style={{ fontSize: "15px" }}>
                  <li>Nồng độ: Eau De Perfum (EDP)</li>
                  <li>Dung tích: 30ml; 75ml</li>
                  <li>Thương hiệu: Chloe</li>
                  <li>Xuất xứ thương hiệu: Pháp.</li>
                </ul>
              </div>
            </div>
            <div className="ghichu_sp">
              <div className="tieude_nuochoa">
                <p style={{ fontSize: "15px" }}>
                  Làm sao để phân biệt hàng có trộn hay không ?
                </p>
                <div className="mota_chitiet">
                  <ul style={{ fontSize: "14px" }}>
                    <li>
                      Hàng trộn sẽ không thể xuất hoá đơn đỏ (VAT) 100% được do
                      có hàng không nguồn gốc trong đó.
                    </li>
                    <li>
                      Tại Hasaki, 100% hàng bán ra sẽ được xuất hoá đơn đỏ cho
                      dù khách hàng có lấy hay không. Nếu có nhu cầu lấy hoá đơn
                      đỏ, quý khách vui lòng lấy trước 22h cùng ngày. Vì sau
                      22h, hệ thống Hasaki sẽ tự động xuất hết hoá đơn cho những
                      hàng hoá mà khách hàng không đăng kí lấy hoá đơn.
                    </li>
                    <li>
                      Do xuất được hoá đơn đỏ 100% nên đảm bảo 100% hàng tại
                      Hasaki là hàng chính hãng có nguồn gốc rõ ràng.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="thugon">
              <p>Thu gọn nội dung</p>
            </div>
          </div>
          <div className="thanhphan-sanpham">
            <div className="tieude">
              <p style={{ marginTop: "15px" }}>Thành phần sản phẩm</p>
              <p style={{ fontSize: "14px" }}>Các tầng hương:</p>
              <ul style={{ fontSize: "13.5px" }}>
                <li>Hương đầu: Hoa cam Neroli.</li>
                <li>Hương giữa: Hoa cam, Hoa lài trâu.</li>
                <li>Hương cuối: Xạ hương, Gỗ tuyết tùng.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="benphai">
          <div className="sanpham-benphai">
            <div className="benphai1">
              <div className="vanchuyen">
                <div className="anh">
                  <img src="../Images/delivery1.png" alt="" />
                </div>
                <div className="noidung">
                  <p>
                    Giao nhanh miễn phí 2H (tại 35 tỉnh thành). Trễ tặng 100K
                  </p>
                </div>
              </div>
              <div className="vanchuyen">
                <div className="anh">
                  <img src="../Images/quality.png" alt="" />
                </div>
                <div className="noidung">
                  <p style={{ marginTop: "-10px" }}>
                    Hasaki đền bù 100% + hãng đền bù 100% nếu phát hiện hàng giả
                  </p>
                </div>
              </div>
              <div className="vanchuyen">
                <div className="anh">
                  <img src="../Images/quality_2.png" alt="" />
                </div>
                <div className="noidung">
                  <p style={{ marginTop: "-10px" }}>
                    Giao Hàng Miễn Phí (từ 90K tại 35 Tỉnh Thành trừ huyện, toàn
                    Quốc từ 249K)
                  </p>
                </div>
              </div>
              <div className="vanchuyen">
                <div className="anh">
                  <img src="../Images/quality_4.png" alt="" />
                </div>
                <div className="noidung">
                  <p style={{ marginTop: "10px" }}>Đổi trả trong 14 ngày.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="benphai2">
            <div className="benphai2_anh">
              <img src="../Images/Chloe-logo.jpg" alt="" />
            </div>
          </div>
          <div className="benphai3">
            <div className="title-benphai">Sản phẩm xem cùng</div>
            <div className="products-sanpham-quangcao">
              <img
                src="../Images/sanpham1.jpg"
                alt=""
                className="sanpham-imgs"
              />
            </div>

            <div className="products-sanpham-quangcao">
              <img
                src="../Images/sanpham2.jpg"
                alt=""
                className="sanpham-imgs"
              />
            </div>

            <div className="products-sanpham-quangcao">
              <img
                src="../Images/sanpham3.jpg"
                alt=""
                className="sanpham-imgs"
              />
            </div>

            <div className="products-sanpham-quangcao">
              <img
                src="../Images/sanpham4.jpg"
                alt=""
                className="sanpham-imgs"
              />
            </div>

            <div className="products-sanpham-quangcao">
              <img
                src="../Images/sanpham5.jpg"
                alt=""
                className="sanpham-imgs"
              />
            </div>
          </div>
          <div className="benphai4">
            <div className="title-benphai">Sản phẩm cùng thương hiệu</div>
            <div className="sanphams">
              <div className="sanpham1">
                <img src="../Images/hinhanh1.jpg" alt="" />
                <div className="noidungphai">
                  <div className="sanpham-tittle">
                    <span>Chloé</span>
                  </div>
                  <div className="sanpham-content">
                    <p>
                      {" "}
                      Nước Hoa Nữ <br />
                      Eau De Parfum
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sanpham-duoi">
          <div className="sanpham-so1">
            <img src="../Images/anh1.png" alt="" />
            <div style={{ marginTop: "10px" }} className="sanpham-price">
              <div className="sanpham_giagoc">
                <p>
                  375.000 <span className="dong">đ</span>
                </p>
              </div>
              <div className="sanpham-price-old">
                <p>
                  525.000 <span className="dong">đ</span>
                </p>
              </div>
              <div>
                <button className="sanpham_icon">30%</button>
              </div>
            </div>
            <div className="sanpham-tittle">
              <span>LA ROCHE-POSAY</span>
            </div>
            <div className="sanpham-content">
              <p>
                Kem Chống Nắng La Roche-Posay <br /> Anthelios Anti-Shine
                Gel-Cream{" "}
              </p>
            </div>
            <div className="xephang">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <div className="xephang-number">
                (119) |<i className="fa fa-shopping-cart"></i>
                4659
              </div>
            </div>
            <div className="sanpham-quatang">
              Bill 399k Tặng Kem Dưỡng La Roc...
            </div>
          </div>
          <div className="sanpham-so1">
            <img src="../Images/anh2.png" alt="" />
            <div style={{ marginTop: "10px" }} className="sanpham-price">
              <div className="sanpham_giagoc">
                <p>
                  159.000 <span className="dong">đ</span>
                </p>
              </div>
              <div className="sanpham-price-old">
                <p>
                  219.000 <span className="dong">đ</span>
                </p>
              </div>
              <div>
                <button className="sanpham_icon">31%</button>
              </div>
            </div>
            <div className="sanpham-tittle">
              <span>L'REAL</span>
            </div>
            <div className="sanpham-content">
              <p>
                Nước Tẩy Trang Lo'Real Tươi Mát
                <br /> Water 3-IN-1 3ml Refreashing
              </p>
            </div>
            <div className="xephang">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <div className="xephang-number">
                (119) |<i className="fa fa-shopping-cart"></i>
                4659
              </div>
            </div>
            <div className="sanpham-quatang">
              Bill 399k Tặng Kem Dưỡng La Roc...
            </div>
          </div>
          <div className="sanpham-so1">
            <img src="../Images/anh3.png" alt="" />
            <div style={{ marginTop: "10px" }} className="sanpham-price">
              <div className="sanpham_giagoc">
                <p>
                  258.000 <span className="dong">đ</span>
                </p>
              </div>
              <div className="sanpham-price-old">
                <p>
                  399.000 <span className="dong">đ</span>
                </p>
              </div>
              <div>
                <button className="sanpham_icon">31%</button>
              </div>
            </div>
            <div className="sanpham-tittle">
              <span>Klairs</span>
            </div>
            <div className="sanpham-content">
              <p>
                Nước Hoa Hồng Klairs Không Mùi
                <br /> Anthelios Anti-Shine Gel-Cream{" "}
              </p>
            </div>
            <div className="xephang">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <div className="xephang-number">
                (119) |<i className="fa fa-shopping-cart"></i>
                4659
              </div>
            </div>
            <div className="sanpham-quatang">
              Bill 399k Tặng Kem Dưỡng La Roc...
            </div>
          </div>
          <div className="sanpham-so1">
            <img src="../Images/anh4.png" alt="" />
            <div style={{ marginTop: "10px" }} className="sanpham-price">
              <div className="sanpham_giagoc">
                <p>
                  429.000 <span className="dong">đ</span>
                </p>
              </div>
              <div className="sanpham-price-old">
                <p>
                  715.000 <span className="dong">đ</span>
                </p>
              </div>
              <div>
                <button className="sanpham_icon">40%</button>
              </div>
            </div>
            <div className="sanpham-tittle">
              <span>ASSENSA</span>
            </div>
            <div className="sanpham-content">
              <p>
                Sữa Chống Nắng ASSENSA
                <br /> Perfect UV Sunscreen Skincare
              </p>
            </div>
            <div className="xephang">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <div className="xephang-number">
                (53)|
                <i className="fa fa-shopping-cart"></i>
                1083
              </div>
            </div>
            <div className="sanpham-quatang">
              Bill 399k Tặng Kem Dưỡng La Roc...
            </div>
          </div>
          <div className="sanpham-so1">
            <img src="../Images/anh5.png" alt="" />
            <div style={{ marginTop: "10px" }} className="sanpham-price">
              <div className="sanpham_giagoc">
                <p>
                  367.000 <span className="dong">đ</span>
                </p>
              </div>
              <div className="sanpham-price-old">
                <p>
                  525.000 <span className="dong">đ</span>
                </p>
              </div>
              <div>
                <button className="sanpham_icon">30%</button>
              </div>
            </div>
            <div className="sanpham-tittle">
              <span>BIODERMA</span>
            </div>
            <div className="sanpham-content">
              <p>
                Nước Tẩy Trang Bioderma Dành <br /> Sensibio H2O
              </p>
            </div>
            <div className="xephang">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <div className="xephang-number">
                (97) |<i className="fa fa-shopping-cart"></i>
                1580
              </div>
            </div>
            <div className="sanpham-quatang">
              Bill 399k Tặng Kem Dưỡng La Roc...
            </div>
          </div>
          <div className="sanpham-so1">
            <img src="../Images/anh6.png" alt="" />
            <div style={{ marginTop: "10px" }} className="sanpham-price">
              <div className="sanpham_giagoc">
                <p>
                  159.000 <span className="dong">đ</span>
                </p>
              </div>
              <div className="sanpham-price-old">
                <p>
                  219.000 <span className="dong">đ</span>
                </p>
              </div>
              <div>
                <button className="sanpham_icon">31%</button>
              </div>
            </div>
            <div className="sanpham-tittle">
              <span>L'OREAL</span>
            </div>
            <div className="sanpham-content">
              <p>
                Nước Tẩy Trang L'Oreal Làm Sạch
                <br /> Water 3-IN-1 Deep
              </p>
            </div>
            <div className="xephang">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9734;</span>
              <div className="xephang-number">
                (250) |<i className="fa fa-shopping-cart"></i>
                3659
              </div>
            </div>
            <div className="sanpham-quatang">
              Bill 399k Tặng Kem Dưỡng La Roc...
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Productdetail;
