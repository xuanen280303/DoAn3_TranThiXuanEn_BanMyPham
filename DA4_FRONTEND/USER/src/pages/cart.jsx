import React, { useState, useEffect } from "react";

import { uploads } from "../constant/api";
import { Link, useNavigate } from "react-router-dom";
import "../assets/cart.css";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { InputNumber, message, Popconfirm } from "antd";
import {
  deleteItem,
  deleteAll,
  getTongTien,
  updateCart,
} from "../services/cart.service";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};

function Cart() {
  const navigate = useNavigate();
  const messageAPI = message;
  const [cart, setCart] = useState([]);
  const [tongTien, setTongTien] = useState(0);

  const loadData = () => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    setTongTien(getTongTien());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDeleteItem = async (MaMP) => {
    await deleteItem(MaMP);
    messageAPI.success("Sản phẩm đã được xóa khỏi giỏ hàng!");
    loadData();
  };

  const handleDeleteAll = async () => {
    await deleteAll();
    messageAPI.success("Sản phẩm đã được xóa khỏi giỏ hàng!");
    loadData();
  };
  
  // Cập nhật số lượng => Thành tiền
  const handleQuantityChange = async (value, MaMP) => {
    await updateCart(value, MaMP);
    loadData();
  };

  return (
    <div>

      <div className="baoquatgiohang" style={{ backgroundColor: "#F3F3F3" }}>
        <div className="link-out">
          <div className="link" style={{ marginTop: "15px" }}>
            <a href="index.html">Trang chủ </a>
            <i className="fas fa-caret-right"></i> Giỏ hàng
          </div>
          <div className="thongtin">Giỏ hàng của bạn</div>
          <div className="xoahet">
            <Popconfirm
              title="Xóa hết"
              description="Bạn có chắc muốn xoá hết mỹ phẩm trong giỏ hàng?"
              onConfirm={() => {
                handleDeleteAll();
              }}
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
            >
              <button>Xóa hết giỏ hàng</button>
            </Popconfirm>
          </div>
          <div className="thongtinsp">
            <div className="chitietsp">
              <div
                style={{ marginLeft: "30px", width: "100px" }}
                className="giatien" >
                Sản phẩm
              </div>
              <div
                style={{ marginLeft: "370px", width: "100px" }}
                className="giatien"
              >
                Giá tiền
              </div>
              <div
                style={{ marginLeft: "120px", width: "100px" }}
                className="sl"
              >
                Số lượng
              </div>
              <div
                style={{ marginLeft: "155px", width: "100px" }}
                className="thanhtien"
              >
                Thành tiền
              </div>
            </div>

            {/* HÓA ĐƠN */}
            <div className="hoadon">
              <hr
                style={{
                  marginTop: "-3px",
                  borderTop: "4px solid #326E51",
                  width: "358px",
                }}
              />
              <div className="hoadon1">
                <span>Hoá đơn của bạn</span>
              </div>
              <hr style={{ width: "359px", marginTop: "16px" }} />
              <div className="tamtinhhd">
                <div className="tamtinh1">
                  <p>Tạm tính:</p>
                </div>
                <div className="giatien2">
                  <p style={{ fontSize: "18px" }}>
                    {formatPrice(tongTien)}
                    <span className="dong">đ</span>
                  </p>
                </div>
              </div>
              <div className="tamtinhhd" style={{ marginTop: "8px" }}>
                <div className="tamtinh1">
                  <p>Giảm giá:</p>
                </div>
                <div className="giatien2" style={{ marginLeft: "236px" }}>
                  <p style={{ marginLeft: "-16px" }}>
                    -0 <span className="dong">đ</span>
                  </p>
                </div>
              </div>
              <hr style={{ width: "359px", marginTop: "16px" }} />
              <div className="tamtinhhd" style={{ marginTop: "11px" }}>
                <div className="tamtinh1">
                  <p>Tổng cộng:</p>
                </div>
                <div className="giatien2" style={{ marginLeft: "160px" }}>
                  <p style={{ color: "#FF6600", fontSize: "18px" }}>
                    {formatPrice(tongTien)}
                    <span className="dong" style={{ color: "#FF6600" }}>
                      đ
                    </span>
                  </p>
                </div>
              </div>
              <div className="tamtinhhd" style={{ marginTop: "11px" }}>
                <div className="tamtinh1">
                  <p>(Đã bao gồm VAT)</p>
                </div>
              </div>
              <div>
                <Link to="/checkout">
                  <button
                    style={{
                      border: "1px solid white",
                      marginTop: "10px",
                      marginLeft: "14px",
                      width: "330px",
                      height: "50px",
                      fontSize: "20px",
                      color: "#F3F3F3",
                      backgroundColor: "#FF6600",
                    }}
                  >
                    Tiến hành đặt hàng
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* SẢN PHẨM */}
          <div className="listsp">
            {cart.map((item) => (
              <div className="sanpham11" key={item.MaMP}>
                <div className="sp11">
                  <div className="hinhanhsp">
                    <img
                      style={{
                        fontSize: "15px",
                        marginTop: "-2px",
                        marginLeft: "10px",
                      }}
                      src={uploads() + item.AnhDaiDien}
                      alt="no"
                    />
                  </div>
                  <div className="tieude">
                    <span style={{ marginLeft: "10px", color: "#326E51" }}>
                      Innisfree
                    </span>
                    <br />
                    <div className="mota">
                      <span>{item.TenMP}</span>
                    </div>
                    <div className="traitim">
                      <Popconfirm
                        title="Xóa"
                        description="Bạn có chắc muốn xoá mỹ phẩm này?"
                        onConfirm={() => {
                          handleDeleteItem(item.MaMP);
                        }}
                        icon={
                          <QuestionCircleOutlined style={{ color: "red" }} />
                        }
                      >
                        <i className="fa-regular fa-heart"></i>
                        Yêu thích
                        <i
                          className="fa-solid fa-x"
                          style={{ paddingLeft: "20px", color: "red" }}
                        ></i>
                        Xoá
                      </Popconfirm>
                    </div>
                  </div>
                </div>
                <div className="giatien1">
                  <div className="giamoi">
                    <p>
                      {formatPrice(item.GiaMoi)} <span className="dong">đ</span>
                    </p>
                  </div>
                  <div className="giagoc">
                    <p>
                      {formatPrice(item.GiaCu)} <span className="dong">đ</span>
                    </p>
                  </div>
                </div>
                <div className="sluong">
                  <InputNumber
                    min={1}
                    max={200}
                    defaultValue={item.SoLuong}
                    onChange={(value) => handleQuantityChange(value, item.MaMP)}
                  />
                  {/* Update số lượng -> thành tiền */}
                </div>
                <div className="thanhtien1" id="thanhtien">
                  <p>
                    {formatPrice(item.SoLuong * item.GiaMoi)}{" "}
                    <span className="dong">đ</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <div className="dathang">
            <div className="tinhtien">
              <div className="tamtinh">
                <p>Tạm tính: </p>
              </div>
              <div className="tien-gh">
                <p style={{ marginLeft: "-10px", fontSize: "18px" }}>
                  {formatPrice(tongTien)}
                  <span className="dong">đ</span>
                </p>
              </div>
            </div>
            <div className="VAT">
              <p style={{ marginLeft: "910px" }}>(đã bao gồm VAT)</p>
            </div>
            <div className="dathang">
              <Link to="/checkout">
                <button
                  style={{
                    marginLeft: "902px",
                    marginTop: "10px",
                    width: "190px",
                    height: "35px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#F3F3F3",
                    backgroundColor: "#FF6600",
                    cursor: "pointer",
                    border: "1px solid white",
                  }}
                >
                  Tiến hành đặt hàng
                </button>
              </Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <div className="spdaxem">
        <p style={{ fontSize: "18px", color: "rgb(71, 70, 70)" }}>
          Sản phẩm đã xem
        </p>
        <img
          src="../Images/sp4.png"
          alt=""
          style={{ width: "72px", marginTop: "5px" }}
        />
      </div>

  
    </div>
  );
}
export default Cart;
