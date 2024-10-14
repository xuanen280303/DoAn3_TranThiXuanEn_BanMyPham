import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getThongTinHoaDon } from "../../services/hoadonban.service";
import { Button, Modal } from "antd";

export const formatPrice = (price) => {
  if (price == null) return "0";
  return parseInt(price).toLocaleString("vi-VN");
};

function printInvoice() {
  window.print();
}

function ChiTietHoaDonban(props) {
  const [inforOrder, setInforOrder] = useState(null);
  const loadData = async (id) => {
      debugger
    const res = await getThongTinHoaDon(id);
    if (res.status === 200) {
      setInforOrder(res);
    }
  };

  useEffect( () => {
    debugger
    if(props.maHDB !== ""){
        loadData(props.maHDB);
    }
  }, [props.maHDB]);

  const { khachhang, hoaDonBan, chitiethdb } = inforOrder || {};

  return (
    <Modal
    title="Thông tin chi tiết hoá đơn"
    open={props.open}
    onOk={props.cancelModal}
    onCancel={props.cancelModal}
    width={1200}
    okText="Lưu"
    destroyOnClose={true}
    footer={[
        <Button key="submit" type="primary" onClick={props.cancelModal}>
            Lưu
        </Button>
    ]}
>
    Đây là hoá đơn bán
</Modal>

  );
}

export default ChiTietHoaDonban;
