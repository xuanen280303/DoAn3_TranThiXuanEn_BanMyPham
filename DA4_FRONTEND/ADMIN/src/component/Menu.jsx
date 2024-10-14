function Menu() {
  return (
    <div>
      <div className="danhsach">
        <ul className="danhsach_ul">
          <a href="Adminpage.html" className="ds_link active">
            <i className="fa-solid fa-house-user"></i>
            <span className="ds_text" style={{ marginLeft: "5px" }}>
              Trang chủ
            </span>
          </a>
          <a href="BaiViet.html" className="ds_link active">
            <i className="fa-solid fa-pen-to-square"></i>
            <span className="ds_text" style={{ marginLeft: "5px" }}>
              Bài viết
            </span>
          </a>
          <a href="MyPham.html" className="ds_link active">
            <i className="fa-brands fa-product-hunt"></i>
            <span className="ds_text" style={{ marginLeft: "11px" }}>
              Mỹ phẩm
            </span>
          </a>
          <a href="KhachHang.html" className="ds_link active">
            <i className="fa-solid fa-users" style={{ color: "#ffffff" }}></i>
            <span className="ds_text" style={{ marginLeft: "6px" }}>
              Khách hàng
            </span>
          </a>
          <a href="NhaCungCap.html" className="ds_link active">
            <i className="fa-solid fa-truck-field"></i>
            <span className="ds_text" style={{ marginLeft: "7px" }}>
              Nhà cung cấp
            </span>
          </a>
          <a href="NhanVien.html" className="ds_link active">
            <i className="fa-regular fa-user"></i>
            <span className="ds_text" style={{ marginLeft: "10px" }}>
              Nhân viên
            </span>
          </a>
          <a href="HoaDonNhap.html" className="ds_link active">
            <i className="fa-solid fa-money-bill"></i>
            <span className="ds_text" style={{ marginLeft: "8px" }}>
              Hoá đơn nhập
            </span>
          </a>
          <a href="DonHangDat.html" className="ds_link active">
            <i className="fa-solid fa-file-invoice"></i>
            <span className="ds_text" style={{ marginLeft: "14px" }}>
              Đơn hàng đặt
            </span>
          </a>
          <a href="ThongKe.html" className="ds_link active">
            <i className="fa-solid fa-circle-info"></i>
            <span className="ds_text" style={{ marginLeft: "10px" }}>
              Thống kê
            </span>
          </a>
          <a href="#" className="ds_link active">
            <i className="fa-brands fa-instalod"></i>
            <span className="ds_text" style={{ marginLeft: "10px" }}>
              Cài đặt
            </span>
          </a>
          <a href="Taikhoan.html" className="ds_link active">
            <i className="fa-solid fa-lock"></i>
            <span className="ds_text" style={{ marginLeft: "10px" }}>
              Account
            </span>
          </a>
          <a href="LoginAdmin.html" className="ds_link active">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span className="ds_text" style={{ marginLeft: "10px" }}>
              Đăng xuất
            </span>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
