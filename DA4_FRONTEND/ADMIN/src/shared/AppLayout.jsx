import React, { useState } from "react";
import { Image } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../index.css";
import {
  HomeOutlined,
  FileOutlined,
  PieChartOutlined,
  UnorderedListOutlined,
  UserOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, message } from "antd";
import { apiLogout } from "../services/login.service";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return { key, icon, children, label };
}

const handleLogout = async () => {
  try {
    const response = await apiLogout();
    localStorage.removeItem("user");
    message.success("Đăng xuất thành công!");
  } catch (error) {
    message.error("Đã xảy ra lỗi khi đăng xuất!");
  }
};

const items = [
  getItem(<Link to={"/"}>Trang chủ</Link>, "1", <HomeOutlined />),
  getItem(<Link to={"/thongke"}>Thống kê</Link>, "2", <PieChartOutlined />),

  getItem("Tài khoản", "sub1", <UserOutlined />, [
    getItem(<Link to={"/taikhoan"}>Danh sách</Link>, "3"),
  ]),
  getItem("Quản lý", "sub2", <UnorderedListOutlined />, [
    getItem(<Link to={"/loaimypham"}>Danh mục</Link>, "6"),
    getItem(<Link to={"/mypham"}>Mỹ phẩm</Link>, "7"),
    getItem(<Link to={"/nhanvien"}>Nhân viên</Link>, "8"),
    getItem(<Link to={"/nhacc"}>Nhà cung cấp</Link>, "9"),
    getItem(<Link to={"/khachhang"}>Khách hàng</Link>, "10"),
  ]),
  getItem("Hóa đơn", "sub3", <ShoppingCartOutlined />, [
    getItem(<Link to={"/hoadonban"}>Hóa đơn bán</Link>, "11"),
  ]),
  getItem("Files", "12", <FileOutlined />),
  getItem(
    <Link to={"/login"} onClick={handleLogout}>
      Đăng xuất
    </Link>,
    "13",
    <LoginOutlined />
  ),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  let defaultSelectedKeys;
  switch (location.pathname) {
    case "/thongke":
      defaultSelectedKeys = ["2"];
      break;
    case "/taikhoan":
      defaultSelectedKeys = ["3"];
      break;
    case "/loaimypham":
      defaultSelectedKeys = ["6"];
      break;
    case "/mypham":
      defaultSelectedKeys = ["7"];
      break;
    case "/nhanvien":
      defaultSelectedKeys = ["8"];
      break;
    case "/nhacc":
      defaultSelectedKeys = ["9"];
      break;
    case "/khachhang":
      defaultSelectedKeys = ["10"];
      break;
    case "/hoadonban":
      defaultSelectedKeys = ["11"];
      break;
    case "/login":
      defaultSelectedKeys = ["13"];
      break;
    default:
      defaultSelectedKeys = ["1"];
  }
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        style={{ background: "#326e51", color: "#FFF" }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" style={{ textAlign: "center" }}>
          <Link to={"/"}>
            <Image
              style={{
                width: collapsed ? "100px" : "100px",
                height: collapsed ? "100px" : "100px",
                marginBottom: "10px",
              }}
              src="/Hinhanh/logo1.jpg"
              preview={false}
            ></Image>
          </Link>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={defaultSelectedKeys}
          mode="inline"
          items={items}
          style={{ color: "#FFF", background: "#326e51" }}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#326e51",
          }}
        >
          <div className="logo" />
          {/* <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={new Array(5).fill(null).map((_, index) => {
              const key = String(index + 1);
              return getItem(key, key);
            })}
          /> */}
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button type="submit">
              <SearchOutlined />
            </button>
          </div>
        </Header>

        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Outlet></Outlet>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Hasaki VietNam ©{new Date().getFullYear()} Created by Xuan En
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
