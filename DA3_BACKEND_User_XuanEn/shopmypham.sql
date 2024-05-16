CREATE DATABASE ShopMyPham
USE ShopMyPham

CREATE TABLE TaiKhoan (
	MaTaiKhoan INT PRIMARY KEY auto_increment,
	TenTaiKhoan Nvarchar(20),
	MatKhau Nvarchar(20),
	Email Varchar(30),
	SDT Varchar(20),
	Quyen Int
);
select*from TaiKhoan

CREATE TABLE BaiViet (
	MaBV INT PRIMARY KEY auto_increment,
	TieuDe Nvarchar(100),
	NguoiDang Nvarchar(20),
	TGDang Date,
	NgayKT Date, 
	NoiDung text
);

CREATE TABLE LoaiMyPham
(
	MaLoaiMP INT PRIMARY KEY auto_increment,
	TenLoaiMP Nvarchar(30) not null, 
	AnhDaiDien nvarchar(500),
	MoTa text
);

CREATE TABLE MyPham
(
	MaMP INT PRIMARY KEY auto_increment,
	TenMP Nvarchar(50),
	MaLoaiMP INT, FOREIGN KEY (MaLoaiMP) REFERENCES LoaiMyPham(MaLoaiMP) ON DELETE CASCADE ON UPDATE CASCADE,
	GiaBan Decimal(10, 2),
    GiaGoc Decimal(10, 2),
	XuatXu Nvarchar(30),
	KhoiLuong Nvarchar(10),
	NgaySX Date,
	HSD Nvarchar(10),
	SLTon Int check (SLTon>=0),
	AnhDaiDien nvarchar(500),
	MoTa text,
	GhiChu Nvarchar(30)
);

CREATE TABLE GiaBan (
    MaGB INT PRIMARY KEY AUTO_INCREMENT,
    MaMP INT,
    GiaBan FLOAT,
    NgayBD DATE,
    NgayKT DATE,
    FOREIGN KEY (MaMP) REFERENCES MyPham(MaMP),
    CONSTRAINT check_NgayBD CHECK (YEAR(NgayBD) > 2023),
    CONSTRAINT check_NgayKT CHECK (YEAR(NgayKT) > YEAR(NgayBD))
);

CREATE TABLE NhanVien
(
	MaNV INT PRIMARY KEY auto_increment,
	MaTaiKhoan Int UNIQUE, FOREIGN KEY (MaTaiKhoan) REFERENCES TaiKhoan(MaTaiKhoan),
	HoTenNV Nvarchar(30),
	ChucVu Nvarchar(20),
	Luong Decimal(10, 2),
	CaLam Nvarchar(8),
	SDTNV Varchar(11) DEFAULT N'Không có',
	DiachiNV Nvarchar(30)
);

CREATE TABLE KhachHang
(
	MaKH INT PRIMARY KEY auto_increment,
	HoTenKH Nvarchar(30),
	SDTKH Varchar(11) DEFAULT N'Không có',
	DiaChiKH Nvarchar(30)
);

CREATE TABLE NhaCC
(
	MaNCC Int PRIMARY KEY auto_increment,
	HoTenNCC Nvarchar(30) not null,
	SDTNCC Varchar(11) DEFAULT N'Không có',
	DiaChiNCC Nvarchar(30)
);

CREATE TABLE HoaDonNhap
(
	MaHDN Int PRIMARY KEY auto_increment,
	MaNV Int, FOREIGN KEY(MaNV) REFERENCES NhanVien(MaNV),
	MaNCC Int,  FOREIGN KEY(MaNCC) REFERENCES NhaCC(MaNCC),
	NgayNhap Date,
	KieuThanhToan Nvarchar(20),
	TongTien float
);

CREATE TABLE ChiTietHoaDonNhap
(
	MaCTHDN Int PRIMARY KEY auto_increment,
	MaHDN Int, FOREIGN KEY (MaHDN) REFERENCES HoaDonNhap(MaHDN),
	MaMP Int,  FOREIGN KEY (MaMP) REFERENCES MyPham(MaMP),
	TenMP Nvarchar(50) not null, 
	SLNhap float check (SLNhap>0),
	DGNhap float check (DGNhap>0),
	ThanhTien float check (ThanhTien>=0)
);
select*from HoaDonban
CREATE TABLE HoaDonBan
(
	MaHDB INT PRIMARY KEY auto_increment,
	HoTenKH Nvarchar(30),
	SDTKH Varchar(10) DEFAULT N'Không có',
	DiaChiKH nvarchar(30),
	NgayTao datetime,
	TongTien decimal(18, 0)
);
ALTER TABLE KhachHang
DROP FOREIGN KEY khachhang_ibfk_1;


select*from ChiTietHoaDonBan left join HoaDonBan on HoaDonBan.MaHDB = ChiTietHoaDonBan.MaHDB

SELECT c.MaCTHDB, c.MaHDB, c.MaMP, c.SLBan, c.TongTien, m.TenMP, m.GiaBan, k.HoTenKH, k.SDTKH, k.DiaChiKH
FROM ChiTietHoaDonBan c
JOIN HoaDonBan h ON c.MaHDB = h.MaHDB
JOIN MyPham m ON c.MaMP = m.MaMP
JOIN KhachHang k ON h.HoTenKH = k.HoTenKH;

CREATE TABLE ChiTietHoaDonBan
(
	MaCTHDB INT PRIMARY KEY auto_increment,
	MaHDB INT, FOREIGN KEY(MaHDB) REFERENCES HoaDonBan(MaHDB),
	MaMP Int, FOREIGN KEY(MaMP) REFERENCES MyPham(MaMP),
	SLBan INT ,
	TongTien decimal(18, 0)
)
DELETE FROM KhachHang;
INSERT INTO TaiKhoan (TenTaiKhoan, MatKhau, Email, SDT, Quyen) 
VALUES  
('a', '123', 'enchan@gmail.com', '0123456789', 1),
('b', '5678','enchan@gmail.com', '0987654321', 2),
('c', '45678','enchan@gmail.com', '0456789123', 1),
('d', '5678', 'enchan@gmail.com', '0789123456', 2),
('e', '678','enchan@gmail.com', '0321654987', 1),
('k', '678', 'enchan@gmail.com', '0987233625', 1),
('l', '678','enchan@gmail.com', '09876464644', 2),
('m', '678','enchan@gmail.com', '0567894321', 1),
('y', '78', 'enchan@gmail.com', '00234567891', 2),
('z', '678','enchan@gmail.com', '0345678921', 1)


INSERT INTO BaiViet(TieuDe, NguoiDang, TGDang, NgayKT, NoiDung) 
VALUES ( N'Dùng kem chống nắng như thế nào?', N'Nhân viên', '2023-09-09', '2024-01-09', N'Dùng mỗi ngày'), 
       ( N'Dùng nước tẩy trang như thế nào?', N'Quản lý', '2023-12-05', '2024-01-01', N'Dùng mỗi ngày'), 
       ( N'Dùng toner như thế nào?', N'Nhân viên', '2023-08-03', '2024-05-03', N'Dùng mỗi ngày');

INSERT INTO LoaiMyPham(TenLoaiMP, AnhDaiDien, MoTa)
VALUES(N'Dưỡng Tóc',N'danhmuc1.jpg', N'Các loại mỹ phẩm Dưỡng Tóc'),
      (N'Dầu Gội, Xả', N'danhmuc2.jpg', N' Các loại mỹ phẩm Dầu Gội'),
	  (N'Dưỡng Thể ', N'danhmuc3.jpg',N' Các loại mỹ phẩm Dưỡng Thể'),
	  (N'Toner Rose',N'danhmuc4.jpg',N' Các loại mỹ phẩm Toner'),
	  (N'Nước Hoa',N'danhmuc5.jpg',N' Các loại mỹ phẩm Nước hoa'),
	  (N'Son dưỡng',N'danhmuc6.jpg',N' Các loại mỹ phẩm Son Môi'),
	  (N'Kem Nền',N'danhmuc7.jpg',N' Các loại mỹ phẩm Kem Nền'),
	  (N'Chống Nắng',N'danhmuc8.jpg',N' Các loại mỹ phẩm Kem'),
	  (N'Rửa Mặt',N'danhmuc9.jpg',N' Các loại mỹ phẩm Sữa Rửa Mặt'),
	  (N'Tẩy Trang',N'danhmuc10.jpg',N'Các loại mỹ phẩm Nước Tẩy Trang');

INSERT INTO MyPham(TenMP, MaLoaiMP, GiaBan, GiaGoc, XuatXu, KhoiLuong, NgaySX, HSD, SLTon, AnhDaiDien, MoTa, GhiChu)
VALUES(N'Dầu LOreal Tinh Dầu Hoa Tự Nhiên',1,300000,350000,N'VietNam',N'500gram','2024-02-09','2027-02-09',5, N'sp4.png', N'Dầu LOreal Tinh Dầu Hoa Tự Nhiên',N'Phù hợp với da dầu'),
      (N'Nước Xịt Dưỡng Tóc Double Rich',1,200000,360000,N'France',N'300gram','2024-02-05','2027-02-05',100, N'sp5.jpg',N'Kem chống nắng Laroche Posay',N'Phù hợp với da nhạy cảm'),
  
    (N'Dầu Gội Tsubaki Phục Hồi',2,500000,600000,N'England',N'1000gram','2024-03-08','2027-03-08',50,N'daugoi1.jpg',N'Ngăn rụng tóc',N'Mượt tóc'),
    (N'Bộ Gội Xả TRESemmé Keratin Vào Nếp',2,370000,400000,N'France',N'600gram','2024-02-05','2027-02-05',150,N'daugoi2.jpg',N'Ngăn rụng tóc',N'Mượt tóc'),
 
    (N'Sữa Dưỡng Thể Nivea Sáng Da',3,120000,200000, N'VietNam',N'500gram','2024-02-01','2027-02-01',500,N'dt2.png',N'Sữa Dưỡng Thể Nivea Sáng Da',N'Phù hợp với mọi loại da'),
    (N'Dầu Chăm Sóc Da Bio-Oil ',3,350000, 400000,N'France',N'300gram','2024-02-05','2027-02-05',100,N'dt4.jpg',N'Dầu Chăm Sóc Da Bio-Oil ',N'Phù hợp với da khô'),
 
    (N'Toner Laroche Posay',4,300000,500000, N'England',N'400gram','2024-01-05','2027-01-05',100,N't3.png',N'Toner Laroche Posay',N'Phù hợp với người trên 12 tuổi'),
    (N'Nước hoa hồng Klair',4,450000,500000, N'France',N'800gram','2024-02-05','2027-02-05',30,N't4.jpg',N'Nước hoa hồng Klair',N'Phù hợp với người trên 12 tuổi'),
 
    (N'Nước hoa nữ Caloria',5,850000,900000, N'France',N'300gram','2023-09-06','2026-09-06',50,N'nh2.png',N'Nước hoa nữ Caloria',N'Hương nữ'),
    (N'Nước hoa nam Paco',5,990000,999000, N'England',N'700gram','2023-02-08','2026-02-08',50,N'nh4.jpg',N'Nước hoa nam Paco',N'Hương nam'),
 
    (N'Son Kem lì 3CE',6,350000,400000, N'VietNam',N'900gram','2024-03-03','2027-03-03',100,N'sm2.jpg',N'Son Kem lì 3CE',N'Thơm và mềm môi'),
    (N'Son Bóng Mac',6,250000,300000, N'France',N'200gram','2024-02-05','2027-02-05',50,N'sm3.png',N'Son Bóng Mac',N'Thơm và mềm môi'),
   
    (N'Phấn Nước Lanegie Mịn',7,650000,800000, N'France',N'300gram','2024-01-09','2027-01-09',30,N'm2.png',N'Phấn Nước Lanegie Mịn',N'Phù hợp với mọi loại da'),
    (N'Kem Nền Maybeline',7,200000,300000, N'England',N'300gram','2024-02-05','2027-02-05',100,N'm3.jpg',N'Kem Nền Maybeline',N'Phù hợp với mọi loại da'),
    
    (N'Kem Chống Nắng Laroche Posay',8,350000,500000, N'England',N'200gram','2024-02-05','2027-02-05',100,N'kcn1.png',N'Kem Chống Nắng Laroche Posay',N'Phù hợp với da khô'),
    (N'Kem Chống Nắng Centella 1004',8,250000,300000, N'England',N'300gram','2024-02-05','2027-02-05',50,N'kcn2.png',N'Kem Chống Nắng Centella 1004',N'Phù hợp với da dầu'),
     
    (N'Sữa Rửa Mặt SVR',9,420000,500000, N'France',N'700gram','2023-01-09','2028-01-09',100,N's1.png',N'Sữa Rửa Mặt SVR',N'Phù hợp với da khô'),
    (N'Sữa Rửa Mặt Bí Đao Cocoon',9,200000,300000, N'VietNam',N'800gram','2024-08-02','2025-08-02',50,N's2.png',N'Sữa Rửa Mặt Bí Đao Cocoon',N'Phù hợp với da dầu'),
 
    (N'Tẩy Trang Biodema',10,450000,500000, N'VietNam',N'400gram','2024-05-07','2027-05-07',100,N'tt1.jpg',N'Tẩy Trang Biodema',N'Phù hợp với mọi loại da'),
    (N'Tẩy Trang Garnie',10,250000,300000, N'VietNam',N'300gram','2024-06-06','2027-06-06',50,N'tt2.png',N'Tẩy Trang Garnie',N'Phù hợp với mọi loại da');


INSERT INTO NhanVien(MaTaiKhoan, HoTenNV, ChucVu,Luong, CaLam, SDTNV, DiaChiNV)
VALUES(1,N'Mai Thị Hoa',N'Nhân viên bán hàng',200,'FullTime',0981890898,N'Mỹ Hào, Hưng Yên'),
      (2,N'Trần Tuấn',N'Nhân viên thu ngân',300,'PartTime',0904898998,N' Hưng Yên'),
      (3,N'Nguyễn An',N'Nhân viên kho',500,'FullTime',0996890777,N'Hà Nội'),
      (4,N'Vũ Thị Liên',N'Nhân viên bán hàng',300,N'FullTime',0984890005,N'Thái Bình'),
      (5,N'Lê Mai Anh',N'Nhân viên bán hàng',400,'PartTime',0946890123,N'Nam Định');

INSERT INTO KhachHang(HoTenKH, SDTKH, DiaChiKH)
VALUES(N'Trần Thị Liễu',09875678888,N'Yên Mỹ, Hưng Yên'),
	  (N'Vũ Thị Minh', 09455671232,N'Cẩm Giàng, Hải Dương'),
	  (N'Trịnh Thị Lan', 03435556777,N'Mỹ Hào, Hưng Yên'),
	  (N'Trần Thanh Thuỷ', 03538312793,N'Phù Cừ, Hưng Yên'),
      (N'Nguyễn Hoa Như', 09585638696,N'Mê Linh, Hà Nội');

INSERT INTO NHACC(HoTenNCC, SDTNCC, DiaChiNCC)
VALUES(N'Cosmetic Hoa Lê', 0987233625,N'Bà Rịa, Vũng Tàu'),
	  (N'Cocoon Group', 0989233625,N'Thuận Thành, Bắc Ninh'),
	  (N'Sỉ lẻ Ngọc Bích', 0387233625,N'Cầu Giấy, Hà Nội'),
	  (N'Thanh Hằng Mỹ phẩm', 0357233625,N'Quận 9, TP Hồ Chí Minh'),
      (N'Makeup Beuty', 0997233622,N'Thanh Xuân, Hà Nội');

INSERT INTO HoaDonNhap(MaNV,MaNCC,NgayNhap,KieuThanhToan,TongTien)
VALUES(1,1,'2023-08-10',N'Trả trước',500000),
      (2,2,'2023-09-26',N'Trả sau',500000),
	  (3,3,'2022-07-28',N'Trả trước',500000),
	  (4,4,'2023-05-10',N'Trả trước',500000),
	  (5,5,'2023-12-15',N'Trả trước',500000);

INSERT INTO ChiTietHoaDonNhap(MaHDN, MaMP, TenMP, SLNhap, DGNhap, ThanhTien)
VALUES(1,1,N'Dầu LOreal Tinh Dầu Hoa Tự Nhiên;',20, 250000,4500000),
      (1,2,N'Nước Xịt Dưỡng Tóc Double Rich',10, 300000,2700000),
	  (1,3,N'Dầu Gội Tsubaki Phục Hồi',20, 20000,380000),
	  (1,4,N'Bộ Gội Xả TRESemmé Keratin Vào Nếp',30, 150000,3825000),
      (1,5,N'Sữa Dưỡng Thể Nivea Sáng Da',20, 300000,6000000);

INSERT INTO HoaDonBan(HoTenKH, SDTKH, DiaChiKH, TrangThai, NgayTao, NgayDuyet, TongTien, TGGiaoHang)
VALUES  (N'Trần Thị Liễu', '0987567888', N'Yên Mỹ, Hưng Yên',2, '2023-05-20', '2023-05-21', 600000, '2023-05-22'),
		(N'Vũ Thị Minh', '0945567123', N'Cẩm Giàng, Hải Dương',1, '2023-04-21', '2023-04-23', 700000, '2023-04-25'),
		(N'Trần Thanh Thuỷ', '0353831279', N'Phù Cừ, Hưng Yên',1, '2023-05-07', '2023-05-08', 800000, '2023-05-09'),
		(N'Nguyễn Hoa Như', '0958563869', N'Mê Linh, Hà Nội',2, '2023-06-24', '2023-06-25', 200000, '2023-06-26'),
		(N'Vũ Thị Minh', '0945567123', N'Cẩm Giàng, Hải Dương',2, '2023-05-07', '2023-05-08', 1000000, '2023-05-08');
        
INSERT INTO ChiTietHoaDonBan(MaHDB, MaMP, SLBan, TongTien)
VALUES (1, 1, 10, 500000),
       (2, 2, 10, 6000000),
       (4, 4, 20, 800000),
       (5, 5, 30, 200000),
       (6, 6, 20, 300000);
