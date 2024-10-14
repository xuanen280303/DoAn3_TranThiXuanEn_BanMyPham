import { Breadcrumb, theme } from "antd";

const LoaiMP= function () {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Loại mỹ phẩm</Breadcrumb.Item>
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
        Hiển thị
      </div>
    </>
  );
};
export default LoaiMP;
