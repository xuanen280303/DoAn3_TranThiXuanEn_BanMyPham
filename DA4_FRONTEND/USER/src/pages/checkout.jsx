import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { uploads } from "../constant/api";
import { getTongTien } from "../services/cart.service";
import { setHoadonban } from "../services/hoadonban.service";
import { notification, Radio, Space } from "antd";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};

function Checkout() {
  const [cart, setCart] = useState([]);
  const [tongTien, setTongTien] = useState(0);
  const [khachhang, setKhachHang] = useState({
    HoTenKH: "",
    SDTKH: "",
    DiaChiKH: "",
    TrangThaiThanhToan: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onChange = (e) => {
    setKhachHang({...khachhang, TrangThaiThanhToan: e.target.value});
  }

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    setTongTien(getTongTien());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKhachHang((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const HopLe = () => {
    const newErrors = {};
    if (!khachhang.HoTenKH.trim()) {
      newErrors.HoTenKH = "Vui lòng nhập tên khách hàng!";
    } else if (
      !/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯăẠ-ỹ ]+$/.test(
        khachhang.HoTenKH
      )
    ) {
      newErrors.HoTenKH = "Tên khách hàng chỉ chứa chữ cái";
    }
    if (!khachhang.SDTKH.trim() || !/^\d{10}$/.test(khachhang.SDTKH)) {
      newErrors.SDTKH = "Vui lòng nhập số điện thoại hợp lệ!";
    }
    if (!khachhang.DiaChiKH.trim()) {
      newErrors.DiaChiKH = "Vui lòng nhập địa chỉ nhận hàng!";
    } else if (
      !/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯăẠ-ỹ0-9 ]+$/.test(
        khachhang.DiaChiKH
      )
    ) {
      newErrors.DiaChiKH = "Địa chỉ chỉ chứa chữ cái và số";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      notification.error({
        message: "Lỗi nhập liệu!",
        description: Object.values(newErrors).join(". "),
      });
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!HopLe()) {
      return;
    }
    //Truyền dữ liệu vào getHoaDonBan
    const DuLieuTam = {
      HoTenKH: khachhang.HoTenKH,
      SDTKH: khachhang.SDTKH,
      DiaChiKH: khachhang.DiaChiKH,
      TrangThaiThanhToan: khachhang.TrangThaiThanhToan,
      TongTien: tongTien,
      MaMP: cart.map((item) => item.MaMP),
      SLTon: cart.map((item) => item.SoLuong),
    };

    try {
    debugger
      const response = await setHoadonban(DuLieuTam);
      if (response.status === 200) {
        navigate(`/thanhtoanqr/${response?.hoaDonBan.MaHDB}`);
      } else {
        console.error("Lỗi khi tạo hóa đơn bán:", response.message);
      }
    } catch (error) {
      console.error("Lỗi khi tạo hóa đơn bán:", error);
    }
  };

  return (
    <div>
      <header className="header-support-c">
        <div className="headercheckout">
          <Link to="/">
            <img
              style={{
                width: "180px",
                marginLeft: "50px",
                marginTop: "10px",
                height: "50px",
              }}
              src="Images/logo-new.svg"
              alt=""
            />
          </Link>
          <div className="taikhoan"></div>
        </div>
      </header>

      <div className="coverorder">
        <div className="tonhat-co">
          <div className="bentrai-co">
            <div className="bentren">
              <div className="thongtin-o">
                <span>Thông tin nhận hàng</span>
              </div>
              <div className="nharieng">
                <div>
                  <button
                    style={{
                      marginTop: "5px",
                      backgroundColor: "#326E51",
                      color: "white",
                    }}
                  >
                    Nhà riêng
                  </button>
                </div>
              </div>
              <div className="thongtin-o" style={{ marginTop: "5px" }}>
                <span>Ghi chú: Chuyển khoản</span>
              </div>
              <div>
                <textarea
                  placeholder="Nhập ghi chú (nếu có)"
                  style={{
                    width: "100%",
                    height: "60px",
                    marginTop: "5px",
                    borderRadius: "5px",
                  }}
                ></textarea>
              </div>
            </div>

            <div className="vanchuyen-co">
              <div className="thongtin-o">
                <span>Hình thức thanh toán</span>
              </div>
              <Radio.Group onChange={onChange} value={khachhang.TrangThaiThanhToan}>
              <Space direction="vertical">
                <Radio value="Thanh toán khi nhận hàng">Thanh toán khi nhận hàng</Radio>
                <Radio value="Đã thanh toán">Thanh toán qua thẻ ngân hàng</Radio>
              </Space>
            </Radio.Group>
            </div>

            <div className="benduoi">
              <div className="thongtin-o">
                <span>Thông tin xuất hoá đơn</span>
              </div>
              <div>
                <input
                  type="text"
                  name="HoTenKH"
                  placeholder="Nhập tên khách hàng"
                  style={{
                    width: "100%",
                    height: "40px",
                    marginTop: "5px",
                    borderRadius: "10px",
                  }}
                  defaultValue={khachhang.HoTenKH}
                  onChange={handleInputChange}
                />
                {errors.HoTenKH && (
                  <div
                    style={{ color: "red", marginTop: "5px", fontSize: "14px" }}
                  >
                    {errors.HoTenKH}
                  </div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="SDTKH"
                  placeholder="Nhập số điện thoại khách hàng"
                  style={{
                    width: "100%",
                    height: "40px",
                    marginTop: "5px",
                    borderRadius: "10px",
                  }}
                  defaultValue={khachhang.SDTKH}
                  onChange={handleInputChange}
                />
                {errors.SDTKH && (
                  <div
                    style={{ color: "red", marginTop: "5px", fontSize: "14px" }}
                  >
                    {errors.SDTKH}
                  </div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="DiaChiKH"
                  placeholder="Nhập địa chỉ nhận hàng"
                  style={{
                    width: "100%",
                    height: "40px",
                    marginTop: "5px",
                    borderRadius: "10px",
                  }}
                  defaultValue={khachhang.DiaChiKH}
                  onChange={handleInputChange}
                />
                {errors.DiaChiKH && (
                  <div
                    style={{ color: "red", marginTop: "5px", fontSize: "14px" }}
                  >
                    {errors.DiaChiKH}
                  </div>
                )}
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Thông tin bổ sung"
                  style={{
                    width: "100%",
                    height: "40px",
                    marginTop: "5px",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div
                className="thongtin-o"
                style={{ marginTop: "5px", fontSize: "22px" }}
              >
                <span>Lưu Ý</span>
                <ul>
                  <li>
                    Không xuất hóa đơn cho các đơn hàng có sử dụng các loại
                    phiếu quà tặng (Got it)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="benphai-co">
            <div className="donhang">
              <span>ĐƠN HÀNG</span>
            </div>

            {cart.map((item, index) => (
              <div className="sp1" key={index}>
                <div className="hinhanhsp1">
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={`${uploads()}${item.AnhDaiDien}`}
                    alt="no"
                  />
                </div>
                <div className="tieude1">
                  <span>Innisfree</span>
                  <br />
                  <div className="motas">
                    <span>{item.TenMP}</span>
                    <p style={{ marginTop: "8px", color: "#FF6600" }}>
                      SL: {item.SoLuong}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <hr style={{ marginTop: "10px" }} />
            <div className="tamtinh-co">
              <div className="tamtinh-co1">Tạm tính:</div>
              <div className="giatien-co">{formatPrice(tongTien)}</div>
            </div>
            <div className="tamtinh-co">
              <div className="tamtinh-co1">Phí vận chuyển:</div>
              <div className="giatien-co">0 đ</div>
            </div>

            <div className="tamtinh-co">
              <div className="tamtinh-co1">Giảm giá:</div>
              <div className="giatien-co">0 đ</div>
            </div>
            <hr style={{ marginTop: "10px" }} />
            <div className="thanhtienn-co">
              <div className="tieude-co">Thành tiền</div>
              <div className="tien-co">{formatPrice(tongTien)}</div>
            </div>
            <div className="nhacnho-co">
              Đã bao gồm VAT, phí đóng gói, phí vận chuyển và các chi phí khác
              vui lòng xem chính sách vận chuyển
            </div>
            <div>
              <button
                style={{
                  border: "1px solid white",
                  marginLeft: "10px",
                  width: "415px",
                  height: "50px",
                  fontSize: "21px",
                  color: "#F3F3F3",
                  backgroundColor: "#FF6600",
                  cursor: "pointer",
                }}
                onClick={handlePlaceOrder}
              >
                ĐẶT HÀNG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
