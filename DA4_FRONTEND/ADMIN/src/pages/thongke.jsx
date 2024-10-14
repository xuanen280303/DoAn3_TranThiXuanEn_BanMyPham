import React, { useEffect, useState } from "react";
import { Breadcrumb, message } from "antd";
import { Link } from "react-router-dom";
import { apiMyPhamBanChay } from "../services/thongke.service";
import { Column } from "@ant-design/plots";

const ThongKe = () => {
  document.title = "Thống kê";
  const [messageApi, contextHolder] = message.useMessage();
  const [data, setData] = useState([]);

  const loadData = async () => {
    const results = await apiMyPhamBanChay();
    if (results?.status === 200) {
      setData(results?.data);
    } else {
      messageApi.error("Lỗi khi tải dữ liệu");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const commonConfig = {
    data: data,
    xField: "SLMyPhamDaBan",
    yField: "TenMP",
    meta: {
      SLMyPhamDaBan: { alias: "Số lượng mỹ phẩm đã bán" },
      TenMP: { alias: "Tên mỹ phẩm" },
    },
    yAxis: { label: { formatter: (v) => `${v}` } },
    xAxis: {
      title: {
        text: "Số lượng mỹ phẩm đã bán",
        style: { fontSize: 16, fontWeight: "bold" },
      },
    },
    yAxis: {
      title: {
        text: "Tên mỹ phẩm",
        style: { fontSize: 16, fontWeight: "bold" },
      },
    },
    colorField: "TenMP",
    color: ["#3b82f6", "#f97316", "#10b981", "#f43f5e", "#6366f1"],
  };

  return (
    <>
      {contextHolder}
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[
          { title: <Link to={"/"}>Trang chủ</Link> },
          { title: "Thống kê" },
        ]}
      />
      <div
        style={{ padding: 24, minHeight: 360, background: "#fff", borderRadius: "8px" }}>
        <h2>THỐNG KÊ TOP 5 MỸ PHẨM BÁN CHẠY</h2>
        <Column {...commonConfig} />
      </div>
    </>
  );
};

export default ThongKe;
