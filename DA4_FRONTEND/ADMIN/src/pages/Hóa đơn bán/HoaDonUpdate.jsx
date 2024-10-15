import React, { useEffect, useState } from 'react';
import { Drawer, Form, Input, Button, message, Table, Tag } from 'antd';
import { getThongTinHoaDon } from '../../services/hoadonban.service';
import dayjs from 'dayjs';
import KhachHang from './Update/KhachHang';
import HoaDonBan from './Update/HoaDonBan';
import { apiSearchLichSu } from '../../services/lichsu.service';
import Search from 'antd/es/transfer/search';

const HoaDonUpdate = ({ open, onClose, maHDB }) => {
  const [form] = Form.useForm();
  const [lichSu, setlichSu] = useState([]);
  const [isKhachHangModalOpen, setIsKhachHangModalOpen] = useState(false);
  const [isHoaDonBanModalOpen, setIsHoaDonBanModalOpen] = useState(false);

  const [inforOrder, setInforOrder] = useState(null);
  const [prevMaHDB, setPrevMaHDB] = useState(null);

  const loadData = async (id) => {
    const [hoaDonBan, lichSu] = await Promise.all([getThongTinHoaDon(id), apiSearchLichSu({page: 1, pageSize: 30, search: maHDB })]);
    if (hoaDonBan.status === 200) {
      setInforOrder(hoaDonBan);
    }
    
    if (lichSu.status === 200) {
      setlichSu(lichSu.data.data);
    }
  };
  
  useEffect(() => {
    if (maHDB !== null && maHDB !== prevMaHDB) {
      
      loadData(maHDB);
      setPrevMaHDB(maHDB);
    }
  }, [maHDB, prevMaHDB]);
  
  const { khachhang, hoaDonBan, chitiethdb } = inforOrder || {khachhang: {}, hoaDonBan: {}, chitiethdb: []};
  const handleTag = (value) => {
        switch (value) {
          case "Chờ xác nhận":
            return "gold";
          case "Đã xác nhận":
            return "blue";
          case "Đang giao hàng":
            return "orange";
          case "Hoàn thành":
            return "green";
          case "Đã hủy":
            return "red";
          default:
            return "geekblue";  // Màu mặc định nếu không khớp với các trạng thái trên
        }
      };
  const hoaDonBanColumns = [
        { title: 'Mã HDB', dataIndex: 'MaHDB', key: 'MaHDB', width: '90px'},
        { title: "Trạng thái", dataIndex: "TrangThai",key: 'TrangThai',
            render: (_, record) => <Tag style={{fontSize:"14px"}} color={handleTag(record.TrangThai)}>{record.TrangThai}</Tag>,
        },
        { title: 'Trạng thái thanh toán', dataIndex: 'TrangThaiThanhToan', key: 'TrangThaiThanhToan' },
        { title: 'Tổng tiền', dataIndex: 'TongTien', key: 'TongTien' },
        { title: 'Ngày tạo', dataIndex: 'NgayTao', key: 'NgayTao',
            render: (text) => dayjs(text).format('DD/MM/YYYY lúc HH:mm')
        },
      ];
    
      const khachHangColumns = [
        { title: 'Mã KH', dataIndex: 'MaKH', key: 'MaKH', width: '80px'},
        { title: 'Tên KH', dataIndex: 'HoTenKH', key: 'HoTenKH', width: '200px' },
        { title: 'Địa chỉ', dataIndex: 'DiaChiKH', key: 'DiaChiKH' },
        { title: 'SĐT', dataIndex: 'SDTKH', key: 'SDTKH' , width: '100px'},
       
      ];
    
      const chiTietHDBColumns = [
        { title: 'Mã MP', dataIndex: 'MaMP', key: 'MaMP' ,width: '80px'},
        { title: 'Tên mặt hàng', dataIndex: 'TenMP', key: 'TenMP' },
        { title: 'Đơn giá', dataIndex: 'GiaTien', key: 'GiaTien' },
        { title: 'Số lượng', dataIndex: 'SLBan', key: 'SLBan' },
        { title: 'Tổng tiền', dataIndex: 'TongTien', key: 'TongTien' },
        // Thêm các cột khác cho chiTietHDB
      ];
      const lichSuColumns = [
        { title: "Trạng thái", dataIndex: "TrangThai",key: 'TrangThai',
          render: (_, record) => <Tag style={{fontSize:"14px"}} color={handleTag(record.TrangThai)}>{record.TrangThai}</Tag>,
      },
      { title: 'Ngày tạo', dataIndex: 'NgayTao', key: 'NgayTao',
        render: (text) => dayjs(text).format('DD/MM/YYYY lúc HH:mm')
    },
      ];

  const handleOpenKhachHangModal = () => {
    setIsKhachHangModalOpen(true);
  };

  const handleCloseKhachHangModal = () => {
    setIsKhachHangModalOpen(false);
  };

  const handleOpenHoaDonBanModal = () => {
    setIsHoaDonBanModalOpen(true);
  };

  const handleCloseHoaDonBanModal = () => {
    setIsHoaDonBanModalOpen(false);
  };
  return (
    <Drawer
      title="Cập nhật Hóa đơn bán"
      width={800}
      onClose={onClose}
      open={open}
      bodyStyle={{ paddingBottom: 80 }}
    >
    
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Hóa đơn bán</h3>
        <Button type="primary" onClick={handleOpenHoaDonBanModal}>Sửa HĐB</Button>
      </div>
      <Table dataSource={[hoaDonBan]} columns={hoaDonBanColumns} pagination={false} />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
        <h3>Khách hàng</h3>
        <Button type="primary" onClick={handleOpenKhachHangModal}>Sửa khách hàng</Button>
      </div>
      <Table dataSource={[khachhang]} columns={khachHangColumns} pagination={false} />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
      <h3>Chi tiết hóa đơn bán</h3>
        <Button type="primary">Sửa chi tiết HĐB</Button>
      </div>
      <Table dataSource={chitiethdb} columns={chiTietHDBColumns}  />
      
      <h3>Lịch sử trạng thái</h3>
      <Table dataSource={lichSu} columns={lichSuColumns} pagination={false} />
      

      <KhachHang
        open={isKhachHangModalOpen}
        cancelModal={handleCloseKhachHangModal}
        maKH={khachhang?.MaKH}
        loadData={(id) => loadData(maHDB)}
      />

      <HoaDonBan
      open={isHoaDonBanModalOpen}
      cancelModal={handleCloseHoaDonBanModal}
      MaHDB={hoaDonBan?.MaHDB}
      loadData={(id) => loadData(maHDB)}
    />


    </Drawer>
  );
};

export default HoaDonUpdate;
