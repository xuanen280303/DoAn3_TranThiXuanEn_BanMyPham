-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: da3_shopmypham
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `baiviet`
--

DROP TABLE IF EXISTS `baiviet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `baiviet` (
  `MaBV` int NOT NULL AUTO_INCREMENT,
  `TieuDe` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `NguoiDang` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `TGDang` date DEFAULT NULL,
  `NgayKT` date DEFAULT NULL,
  `NoiDung` text,
  PRIMARY KEY (`MaBV`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `baiviet`
--

LOCK TABLES `baiviet` WRITE;
/*!40000 ALTER TABLE `baiviet` DISABLE KEYS */;
INSERT INTO `baiviet` VALUES (1,'Dùng kem chống nắng như thế nào?','Nhân viên','2023-09-09','2024-01-09','Dùng mỗi ngày'),(2,'Dùng nước tẩy trang như thế nào?','Quản lý','2023-12-05','2024-01-01','Dùng mỗi ngày'),(3,'Dùng toner như thế nào?','Nhân viên','2023-08-03','2024-05-03','Dùng mỗi ngày');
/*!40000 ALTER TABLE `baiviet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitiethoadonban`
--

DROP TABLE IF EXISTS `chitiethoadonban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitiethoadonban` (
  `MaCTHDB` int NOT NULL AUTO_INCREMENT,
  `MaHDB` int DEFAULT NULL,
  `MaMP` int DEFAULT NULL,
  `SLBan` int DEFAULT NULL,
  `GiaTien` decimal(18,0) DEFAULT NULL,
  `TongTien` decimal(18,0) DEFAULT NULL,
  PRIMARY KEY (`MaCTHDB`),
  KEY `MaHDB` (`MaHDB`),
  KEY `MaMP` (`MaMP`),
  CONSTRAINT `chitiethoadonban_ibfk_1` FOREIGN KEY (`MaHDB`) REFERENCES `hoadonban` (`MaHDB`),
  CONSTRAINT `chitiethoadonban_ibfk_2` FOREIGN KEY (`MaMP`) REFERENCES `mypham` (`MaMP`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiethoadonban`
--

LOCK TABLES `chitiethoadonban` WRITE;
/*!40000 ALTER TABLE `chitiethoadonban` DISABLE KEYS */;
INSERT INTO `chitiethoadonban` VALUES (11,1,1,10,NULL,500000),(12,2,2,10,NULL,6000000),(13,4,4,20,NULL,800000),(14,5,5,30,NULL,200000),(15,6,7,25,NULL,NULL),(16,7,7,25,NULL,NULL),(17,16,7,2,500000,1000000);
/*!40000 ALTER TABLE `chitiethoadonban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitiethoadonnhap`
--

DROP TABLE IF EXISTS `chitiethoadonnhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitiethoadonnhap` (
  `MaCTHDN` int NOT NULL AUTO_INCREMENT,
  `MaHDN` int DEFAULT NULL,
  `MaMP` int DEFAULT NULL,
  `TenMP` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `SLNhap` float DEFAULT NULL,
  `DGNhap` float DEFAULT NULL,
  `ThanhTien` float DEFAULT NULL,
  PRIMARY KEY (`MaCTHDN`),
  KEY `MaHDN` (`MaHDN`),
  KEY `MaMP` (`MaMP`),
  CONSTRAINT `chitiethoadonnhap_ibfk_1` FOREIGN KEY (`MaHDN`) REFERENCES `hoadonnhap` (`MaHDN`),
  CONSTRAINT `chitiethoadonnhap_ibfk_2` FOREIGN KEY (`MaMP`) REFERENCES `mypham` (`MaMP`),
  CONSTRAINT `chitiethoadonnhap_chk_1` CHECK ((`SLNhap` > 0)),
  CONSTRAINT `chitiethoadonnhap_chk_2` CHECK ((`DGNhap` > 0)),
  CONSTRAINT `chitiethoadonnhap_chk_3` CHECK ((`ThanhTien` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiethoadonnhap`
--

LOCK TABLES `chitiethoadonnhap` WRITE;
/*!40000 ALTER TABLE `chitiethoadonnhap` DISABLE KEYS */;
INSERT INTO `chitiethoadonnhap` VALUES (1,1,1,'Dầu LOreal Tinh Dầu Hoa Tự Nhiên;',20,250000,4500000),(2,1,2,'Nước Xịt Dưỡng Tóc Double Rich',10,300000,2700000),(3,1,3,'Dầu Gội Tsubaki Phục Hồi',20,20000,380000),(4,1,4,'Bộ Gội Xả TRESemmé Keratin Vào Nếp',30,150000,3825000),(5,1,5,'Sữa Dưỡng Thể Nivea Sáng Da',20,300000,6000000);
/*!40000 ALTER TABLE `chitiethoadonnhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giaban`
--

DROP TABLE IF EXISTS `giaban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giaban` (
  `MaGB` int NOT NULL AUTO_INCREMENT,
  `MaMP` int DEFAULT NULL,
  `GiaBan` float DEFAULT NULL,
  `NgayBD` date DEFAULT NULL,
  `NgayKT` date DEFAULT NULL,
  PRIMARY KEY (`MaGB`),
  KEY `MaMP` (`MaMP`),
  CONSTRAINT `giaban_ibfk_1` FOREIGN KEY (`MaMP`) REFERENCES `mypham` (`MaMP`),
  CONSTRAINT `check_NgayBD` CHECK ((year(`NgayBD`) > 2023)),
  CONSTRAINT `check_NgayKT` CHECK ((year(`NgayKT`) > year(`NgayBD`)))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giaban`
--

LOCK TABLES `giaban` WRITE;
/*!40000 ALTER TABLE `giaban` DISABLE KEYS */;
/*!40000 ALTER TABLE `giaban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadonban`
--

DROP TABLE IF EXISTS `hoadonban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadonban` (
  `MaHDB` int NOT NULL AUTO_INCREMENT,
  `MaNV` int DEFAULT NULL,
  `MaKH` int DEFAULT NULL,
  `TrangThai` varchar(250) DEFAULT NULL,
  `TongTien` decimal(18,0) DEFAULT NULL,
  `NgayTao` datetime DEFAULT NULL,
  `TrangThaiThanhToan` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`MaHDB`),
  KEY `MaNV` (`MaNV`),
  KEY `hoadonban_ibfk_2_idx` (`MaKH`),
  CONSTRAINT `hoadonban_ibfk_1` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`),
  CONSTRAINT `hoadonban_ibfk_2` FOREIGN KEY (`MaKH`) REFERENCES `khachhang` (`MaKH`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadonban`
--

LOCK TABLES `hoadonban` WRITE;
/*!40000 ALTER TABLE `hoadonban` DISABLE KEYS */;
INSERT INTO `hoadonban` VALUES (1,NULL,NULL,'Chờ xác nhận',600000,'2023-05-20 00:00:00','Thanh Toán khi nhận hàng'),(2,NULL,NULL,'Đã xác nhận',700000,'2023-04-21 00:00:00','Đã thanh toán'),(3,NULL,NULL,'Đang giao hàng',800000,'2023-05-07 00:00:00','Thanh Toán khi nhận hàng'),(4,NULL,NULL,'Hoàn thành',200000,'2023-06-24 00:00:00','Đã thanh toán'),(5,NULL,NULL,'Đã hủy',1000000,'2023-05-07 00:00:00','Thanh Toán khi nhận hàng'),(6,NULL,59,'Hoàn thành',12500000,'2023-05-07 00:00:00','Đã thanh toán'),(7,NULL,60,'Hoàn thành',12500000,'2023-05-07 00:00:00','Thanh Toán khi nhận hàng'),(16,NULL,69,'Chờ xác nhận',NULL,'2024-10-11 08:22:13','Thanh toán khi nhận hàng');
/*!40000 ALTER TABLE `hoadonban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadonnhap`
--

DROP TABLE IF EXISTS `hoadonnhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadonnhap` (
  `MaHDN` int NOT NULL AUTO_INCREMENT,
  `MaNV` int DEFAULT NULL,
  `MaNCC` int DEFAULT NULL,
  `NgayNhap` date DEFAULT NULL,
  `KieuThanhToan` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `TongTien` float DEFAULT NULL,
  PRIMARY KEY (`MaHDN`),
  KEY `MaNV` (`MaNV`),
  KEY `MaNCC` (`MaNCC`),
  CONSTRAINT `hoadonnhap_ibfk_1` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`),
  CONSTRAINT `hoadonnhap_ibfk_2` FOREIGN KEY (`MaNCC`) REFERENCES `nhacc` (`MaNCC`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadonnhap`
--

LOCK TABLES `hoadonnhap` WRITE;
/*!40000 ALTER TABLE `hoadonnhap` DISABLE KEYS */;
INSERT INTO `hoadonnhap` VALUES (1,1,1,'2023-08-10','Trả trước',500000),(2,2,2,'2023-09-26','Trả sau',500000),(3,3,3,'2022-07-28','Trả trước',500000),(4,4,4,'2023-05-10','Trả trước',500000),(5,5,5,'2023-12-15','Trả trước',500000);
/*!40000 ALTER TABLE `hoadonnhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `MaKH` int NOT NULL AUTO_INCREMENT,
  `HoTenKH` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `SDTKH` varchar(11) DEFAULT 'Không có',
  `DiaChiKH` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`MaKH`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (1,'Trần Thị Liễu','9875678888','Yên Mỹ, Hưng Yên'),(2,'Vũ Thị Minh','9455671232','Cẩm Giàng, Hải Dương'),(3,'Trịnh Thị Lan','3435556777','Mỹ Hào, Hưng Yên'),(4,'Trần Thanh Thuỷ','3538312793','Phù Cừ, Hưng Yên'),(5,'Nguyễn Hoa Như','9585638696','Mê Linh, Hà Nội'),(59,'Test','0987233625','hy'),(60,'h','0987233625','hy'),(69,'Test','0987233625','6666');
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lichsu`
--

DROP TABLE IF EXISTS `lichsu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lichsu` (
  `MaLS` int NOT NULL AUTO_INCREMENT,
  `MaHDB` int DEFAULT NULL,
  `TrangThai` varchar(45) DEFAULT NULL,
  `NgayTao` datetime DEFAULT NULL,
  PRIMARY KEY (`MaLS`),
  KEY `lichsu_fk_idx` (`MaHDB`),
  CONSTRAINT `lichsu_fk` FOREIGN KEY (`MaHDB`) REFERENCES `hoadonban` (`MaHDB`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lichsu`
--

LOCK TABLES `lichsu` WRITE;
/*!40000 ALTER TABLE `lichsu` DISABLE KEYS */;
INSERT INTO `lichsu` VALUES (3,16,'Chờ xác nhận','2024-10-11 08:22:13');
/*!40000 ALTER TABLE `lichsu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaimypham`
--

DROP TABLE IF EXISTS `loaimypham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaimypham` (
  `MaLoaiMP` int NOT NULL AUTO_INCREMENT,
  `TenLoaiMP` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `AnhDaiDien` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `MoTa` text,
  PRIMARY KEY (`MaLoaiMP`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaimypham`
--

LOCK TABLES `loaimypham` WRITE;
/*!40000 ALTER TABLE `loaimypham` DISABLE KEYS */;
INSERT INTO `loaimypham` VALUES (1,'Dưỡng Tóc','danhmuc1.jpg','Các loại mỹ phẩm Dưỡng Tóc'),(2,'Dầu Gội, Xả','danhmuc2.jpg',' Các loại mỹ phẩm Dầu Gội'),(3,'Dưỡng Thể ','danhmuc3.jpg',' Các loại mỹ phẩm Dưỡng Thể'),(4,'Toner Rose','danhmuc4.jpg',' Các loại mỹ phẩm Toner'),(5,'Nước Hoa','danhmuc5.jpg',' Các loại mỹ phẩm Nước hoa'),(6,'Son dưỡng','danhmuc6.jpg',' Các loại mỹ phẩm Son Môi'),(7,'Kem Nền','danhmuc7.jpg',' Các loại mỹ phẩm Kem Nền'),(8,'Chống Nắng','danhmuc8.jpg',' Các loại mỹ phẩm Kem'),(9,'Rửa Mặt','danhmuc9.jpg',' Các loại mỹ phẩm Sữa Rửa Mặt'),(10,'Tẩy Trang','danhmuc10.jpg','Các loại mỹ phẩm Nước Tẩy Trang');
/*!40000 ALTER TABLE `loaimypham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mypham`
--

DROP TABLE IF EXISTS `mypham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mypham` (
  `MaMP` int NOT NULL AUTO_INCREMENT,
  `TenMP` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `MaLoaiMP` int DEFAULT NULL,
  `GiaBan` decimal(10,2) DEFAULT NULL,
  `GiaGoc` decimal(10,2) DEFAULT NULL,
  `XuatXu` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `KhoiLuong` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `NgaySX` date DEFAULT NULL,
  `HSD` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `SLTon` int DEFAULT NULL,
  `AnhDaiDien` varchar(500) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `MoTa` text,
  `GhiChu` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`MaMP`),
  KEY `MaLoaiMP` (`MaLoaiMP`),
  CONSTRAINT `mypham_ibfk_1` FOREIGN KEY (`MaLoaiMP`) REFERENCES `loaimypham` (`MaLoaiMP`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `mypham_chk_1` CHECK ((`SLTon` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mypham`
--

LOCK TABLES `mypham` WRITE;
/*!40000 ALTER TABLE `mypham` DISABLE KEYS */;
INSERT INTO `mypham` VALUES (1,'Dầu LOreal Tinh Dầu Hoa Tự Nhiên',1,300000.00,350000.00,'VietNam','500gram','2024-02-09','2027-02-09',150,'daugoi1.jpg','Dầu LOreal Tinh Dầu Hoa Tự Nhiên','Phù hợp với da dầu'),(2,'Nước Xịt Dưỡng Tóc Double Rich',1,200000.00,360000.00,'France','300gram','2024-02-05','2027-02-05',100,'daugoi2.jpg','Kem chống nắng Laroche Posay','Phù hợp với da nhạy cảm'),(3,'Dầu LOreal Tinh Dầu Hoa Cúc Tự Nhiên',1,300000.00,350000.00,'VietNam','500gram','2024-02-09','2027-02-09',150,'daugoi4.jpg','Dầu LOreal Tinh Dầu Hoa Tự Nhiên','Phù hợp với da dầu'),(4,'Nước Xịt Dưỡng Tóc Double Pow',1,200000.00,360000.00,'France','300gram','2024-02-05','2027-02-05',100,'daugoi1.jpg','Kem chống nắng Laroche Posay','Phù hợp với da nhạy cảm'),(5,'Dầu LOreal Tinh Dầu Hoa Nhài Tự Nhiên',1,300000.00,350000.00,'VietNam','500gram','2024-02-09','2027-02-09',150,'daugoi2.jpg','Dầu LOreal Tinh Dầu Hoa Tự Nhiên','Phù hợp với da dầu'),(6,'Nước Xịt Dưỡng Tóc Double Lera',1,200000.00,360000.00,'France','300gram','2024-02-05','2027-02-05',100,'daugoi3.jpg','Kem chống nắng Laroche Posay','Phù hợp với da nhạy cảm'),(7,'Dầu Gội Tsubaki Phục Hồi',2,500000.00,600000.00,'England','1000gram','2024-03-08','2027-03-08',148,'daugoi1.jpg','Ngăn rụng tóc','Mượt tóc'),(8,'Bộ Gội Xả TRESemmé Keratin Vào Nếp',2,370000.00,400000.00,'France','600gram','2024-02-05','2027-02-05',150,'daugoi2.jpg','Ngăn rụng tóc','Mượt tóc'),(9,'Dầu Gội Sunsilk Phục Hồi',2,500000.00,600000.00,'England','1000gram','2024-03-08','2027-03-08',50,'daugoi1.jpg','Ngăn rụng tóc','Mượt tóc'),(10,'Bộ Gội Xả TRESemmé Keratin Vào Nếp',2,370000.00,400000.00,'France','600gram','2024-02-05','2027-02-05',150,'daugoi2.jpg','Ngăn rụng tóc','Mượt tóc'),(11,'Dầu Gội Dove Phục Hồi',2,500000.00,600000.00,'England','1000gram','2024-03-08','2027-03-08',50,'daugoi1.jpg','Ngăn rụng tóc','Mượt tóc'),(12,'Bộ Gội Xả TRESemmé Keratin Vào Nếp',2,370000.00,400000.00,'France','600gram','2024-02-05','2027-02-05',150,'daugoi2.jpg','Ngăn rụng tóc','Mượt tóc'),(13,'Sữa Dưỡng Thể Nivea Sáng Da',3,120000.00,200000.00,'VietNam','500gram','2024-02-01','2027-02-01',500,'dt2.png','Sữa Dưỡng Thể Nivea Sáng Da','Phù hợp với mọi loại da'),(14,'Dầu Chăm Sóc Da Bio-Oil ',3,350000.00,400000.00,'France','300gram','2024-02-05','2027-02-05',100,'dt4.jpg','Dầu Chăm Sóc Da Bio-Oil ','Phù hợp với da khô'),(15,'Sữa Dưỡng Thể Olay Sáng Da',3,120000.00,200000.00,'VietNam','500gram','2024-02-01','2027-02-01',500,'dt2.png','Sữa Dưỡng Thể Nivea Sáng Da','Phù hợp với mọi loại da'),(16,'Dầu Chăm Sóc Da Bio-Oil ',3,350000.00,400000.00,'France','300gram','2024-02-05','2027-02-05',100,'dt4.jpg','Dầu Chăm Sóc Da Bio-Oil ','Phù hợp với da khô'),(17,'Sữa Dưỡng Thể Niva Sáng Da',3,120000.00,200000.00,'VietNam','500gram','2024-02-01','2027-02-01',500,'dt2.png','Sữa Dưỡng Thể Nivea Sáng Da','Phù hợp với mọi loại da'),(18,'Dầu Chăm Sóc Da Biotin ',3,350000.00,400000.00,'France','300gram','2024-02-05','2027-02-05',100,'dt4.jpg','Dầu Chăm Sóc Da Bio-Oil ','Phù hợp với da khô'),(19,'Toner Laroche Posay',4,300000.00,500000.00,'England','400gram','2024-01-05','2027-01-05',100,'t3.png','Toner Laroche Posay','Phù hợp với người trên 12 tuổi'),(20,'Nước hoa hồng Klair',4,450000.00,500000.00,'France','800gram','2024-02-05','2027-02-05',30,'t4.jpg','Nước hoa hồng Klair','Phù hợp với người trên 12 tuổi'),(21,'Toner Hoa Cúc',4,300000.00,500000.00,'England','400gram','2024-01-05','2027-01-05',100,'t3.png','Toner Laroche Posay','Phù hợp với người trên 12 tuổi'),(22,'Nước hoa hồng Klair',4,450000.00,500000.00,'France','800gram','2024-02-05','2027-02-05',30,'t4.jpg','Nước hoa hồng Klair','Phù hợp với người trên 12 tuổi'),(23,'Toner Lamone',4,300000.00,500000.00,'England','400gram','2024-01-05','2027-01-05',100,'t3.png','Toner Laroche Posay','Phù hợp với người trên 12 tuổi'),(24,'Nước hoa hồng Klair',4,450000.00,500000.00,'France','800gram','2024-02-05','2027-02-05',30,'t4.jpg','Nước hoa hồng Klair','Phù hợp với người trên 12 tuổi'),(25,'Nước hoa nữ Caloria',5,850000.00,900000.00,'France','300gram','2023-09-06','2026-09-06',50,'nh2.png','Nước hoa nữ Caloria','Hương nữ'),(26,'Nước hoa nam Nica',5,990000.00,999000.00,'England','700gram','2023-02-08','2026-02-08',50,'nh4.jpg','Nước hoa nam Paco','Hương nam'),(27,'Nước hoa nữ Taylo',5,850000.00,900000.00,'France','300gram','2023-09-06','2026-09-06',50,'nh2.png','Nước hoa nữ Caloria','Hương nữ'),(28,'Nước hoa nam Paco',5,990000.00,999000.00,'England','700gram','2023-02-08','2026-02-08',50,'nh4.jpg','Nước hoa nam Paco','Hương nam'),(29,'Nước hoa nữ Ysl',5,850000.00,900000.00,'France','300gram','2023-09-06','2026-09-06',50,'nh2.png','Nước hoa nữ Caloria','Hương nữ'),(30,'Nước hoa nam Paco',5,990000.00,999000.00,'England','700gram','2023-02-08','2026-02-08',50,'nh4.jpg','Nước hoa nam Paco','Hương nam'),(31,'Son Kem lì 3CE',6,350000.00,400000.00,'VietNam','900gram','2024-03-03','2027-03-03',100,'sm2.jpg','Son Kem lì 3CE','Thơm và mềm môi'),(32,'Son Bóng Romand',6,250000.00,300000.00,'France','200gram','2024-02-05','2027-02-05',50,'sm3.png','Son Bóng Mac','Thơm và mềm môi'),(33,'Son Kem lì BackGround',6,350000.00,400000.00,'VietNam','900gram','2024-03-03','2027-03-03',100,'sm2.jpg','Son Kem lì 3CE','Thơm và mềm môi'),(34,'Son Bóng Mac',6,250000.00,300000.00,'France','200gram','2024-02-05','2027-02-05',50,'sm3.png','Son Bóng Mac','Thơm và mềm môi'),(35,'Son Kem lì Babi',6,350000.00,400000.00,'VietNam','900gram','2024-03-03','2027-03-03',100,'sm2.jpg','Son Kem lì 3CE','Thơm và mềm môi'),(36,'Son Bóng Mac',6,250000.00,300000.00,'France','200gram','2024-02-05','2027-02-05',50,'sm3.png','Son Bóng Mac','Thơm và mềm môi'),(37,'Son Kem lì 3CE',6,350000.00,400000.00,'VietNam','900gram','2024-03-03','2027-03-03',100,'sm2.jpg','Son Kem lì 3CE','Thơm và mềm môi'),(38,'Son Bóng Mac',6,250000.00,300000.00,'France','200gram','2024-02-05','2027-02-05',50,'sm3.png','Son Bóng Mac','Thơm và mềm môi'),(39,'Phấn Nước Lanegie Mịn',7,650000.00,800000.00,'France','300gram','2024-01-09','2027-01-09',30,'m2.png','Phấn Nước Lanegie Mịn','Phù hợp với mọi loại da'),(40,'Kem Nền Maybeline',7,200000.00,300000.00,'England','300gram','2024-02-05','2027-02-05',100,'m3.jpg','Kem Nền Maybeline','Phù hợp với mọi loại da'),(41,'Phấn Nước Gila',7,650000.00,800000.00,'France','300gram','2024-01-09','2027-01-09',30,'m2.png','Phấn Nước Lanegie Mịn','Phù hợp với mọi loại da'),(42,'Kem Nền Zeesea',7,200000.00,300000.00,'England','300gram','2024-02-05','2027-02-05',100,'m3.jpg','Kem Nền Maybeline','Phù hợp với mọi loại da'),(43,'Phấn Nước Catrie',7,650000.00,800000.00,'France','300gram','2024-01-09','2027-01-09',30,'m2.png','Phấn Nước Lanegie Mịn','Phù hợp với mọi loại da'),(44,'Kem Nền Maybeline',7,200000.00,300000.00,'England','300gram','2024-02-05','2027-02-05',100,'m3.jpg','Kem Nền Maybeline','Phù hợp với mọi loại da'),(45,'Kem Chống Nắng Laroche Posay',8,350000.00,500000.00,'England','200gram','2024-02-05','2027-02-05',100,'kcn1.png','Kem Chống Nắng Laroche Posay','Phù hợp với da khô'),(46,'Kem Chống Nắng Centella 1004',8,250000.00,300000.00,'England','300gram','2024-02-05','2027-02-05',50,'kcn2.png','Kem Chống Nắng Centella 1004','Phù hợp với da dầu'),(47,'Kem Chống Nắng SunPlay',8,350000.00,500000.00,'England','200gram','2024-02-05','2027-02-05',100,'kcn1.png','Kem Chống Nắng Laroche Posay','Phù hợp với da khô'),(48,'Kem Chống Nắng CoCoon',8,250000.00,300000.00,'England','300gram','2024-02-05','2027-02-05',50,'kcn2.png','Kem Chống Nắng Centella 1004','Phù hợp với da dầu'),(49,'Kem Chống Nắng Foxx',8,350000.00,500000.00,'England','200gram','2024-02-05','2027-02-05',100,'kcn1.png','Kem Chống Nắng Laroche Posay','Phù hợp với da khô'),(50,'Kem Chống Nắng Centella 1004',8,250000.00,300000.00,'England','300gram','2024-02-05','2027-02-05',50,'kcn2.png','Kem Chống Nắng Centella 1004','Phù hợp với da dầu'),(51,'Sữa Rửa Mặt SVR',9,420000.00,500000.00,'France','700gram','2023-01-09','2028-01-09',100,'s1.png','Sữa Rửa Mặt SVR','Phù hợp với da khô'),(52,'Sữa Rửa Mặt Bí Đao Cocoon',9,200000.00,300000.00,'VietNam','800gram','2024-08-02','2025-08-02',50,'s2.png','Sữa Rửa Mặt Bí Đao Cocoon','Phù hợp với da dầu'),(53,'Sữa Rửa Mặt Cetenphill',9,420000.00,500000.00,'France','700gram','2023-01-09','2028-01-09',100,'s1.png','Sữa Rửa Mặt SVR','Phù hợp với da khô'),(54,'Sữa Rửa Mặt Thảo Mộc',9,200000.00,300000.00,'VietNam','800gram','2024-08-02','2025-08-02',50,'s2.png','Sữa Rửa Mặt Bí Đao Cocoon','Phù hợp với da dầu'),(55,'Sữa Rửa Mặt SVR',9,420000.00,500000.00,'France','700gram','2023-01-09','2028-01-09',100,'s1.png','Sữa Rửa Mặt SVR','Phù hợp với da khô'),(56,'Sữa Rửa Mặt Bí Đao Cocoon',9,200000.00,300000.00,'VietNam','800gram','2024-08-02','2025-08-02',50,'s2.png','Sữa Rửa Mặt Bí Đao Cocoon','Phù hợp với da dầu'),(57,'Tẩy Trang Biodema',10,450000.00,500000.00,'VietNam','400gram','2024-05-07','2027-05-07',100,'tt1.jpg','Tẩy Trang Biodema','Phù hợp với mọi loại da'),(58,'Tẩy Trang Thảo Mộc',10,450000.00,500000.00,'VietNam','400gram','2024-05-07','2027-05-07',100,'tt1.jpg','Tẩy Trang Biodema','Phù hợp với mọi loại da'),(59,'Tẩy Trang Lemon',10,250000.00,300000.00,'VietNam','300gram','2024-06-06','2027-06-06',50,'tt2.png','Tẩy Trang Garnie','Phù hợp với mọi loại da'),(60,'Tẩy Trang Manoed',10,450000.00,500000.00,'VietNam','400gram','2024-05-07','2027-05-07',100,'tt1.jpg','Tẩy Trang Biodema','Phù hợp với mọi loại da'),(61,'Tẩy Trang SVR',10,250000.00,300000.00,'VietNam','300gram','2024-06-06','2027-06-06',50,'tt2.png','Tẩy Trang Garnie','Phù hợp với mọi loại da'),(62,'Tẩy Trang Gila',10,450000.00,500000.00,'VietNam','400gram','2024-05-07','2027-05-07',100,'tt1.jpg','Tẩy Trang Biodema','Phù hợp với mọi loại da'),(63,'Tẩy Trang Foxx',10,250000.00,300000.00,'VietNam','300gram','2024-06-06','2027-06-06',50,'tt2.png','Tẩy Trang Garnie','Phù hợp với mọi loại da'),(64,'Tẩy Trang Garnie',10,250000.00,300000.00,'VietNam','300gram','2024-06-06','2027-06-06',50,'tt2.png','Tẩy Trang Garnie','Phù hợp với mọi loại da');
/*!40000 ALTER TABLE `mypham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhacc`
--

DROP TABLE IF EXISTS `nhacc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhacc` (
  `MaNCC` int NOT NULL AUTO_INCREMENT,
  `HoTenNCC` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `SDTNCC` varchar(11) DEFAULT 'Không có',
  `DiaChiNCC` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`MaNCC`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhacc`
--

LOCK TABLES `nhacc` WRITE;
/*!40000 ALTER TABLE `nhacc` DISABLE KEYS */;
INSERT INTO `nhacc` VALUES (1,'Cosmetic Hoa Lê','987233625','Bà Rịa, Vũng Tàu'),(2,'Cocoon Group','989233625','Thuận Thành, Bắc Ninh'),(3,'Sỉ lẻ Ngọc Bích','387233625','Cầu Giấy, Hà Nội'),(4,'Thanh Hằng Mỹ phẩm','357233625','Quận 9, TP Hồ Chí Minh'),(5,'Makeup Beuty','997233622','Thanh Xuân, Hà Nội');
/*!40000 ALTER TABLE `nhacc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `MaNV` int NOT NULL AUTO_INCREMENT,
  `MaTaiKhoan` int DEFAULT NULL,
  `HoTenNV` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `ChucVu` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `Luong` decimal(10,2) DEFAULT NULL,
  `CaLam` varchar(8) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `SDTNV` varchar(11) DEFAULT 'Không có',
  `DiachiNV` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  PRIMARY KEY (`MaNV`),
  UNIQUE KEY `MaTaiKhoan` (`MaTaiKhoan`),
  CONSTRAINT `nhanvien_ibfk_1` FOREIGN KEY (`MaTaiKhoan`) REFERENCES `taikhoan` (`MaTaiKhoan`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES (1,1,'Mai Thị Hoa','Nhân viên bán hàng',200.00,'FullTime','981890898','Mỹ Hào, Hưng Yên'),(2,2,'Trần Tuấn','Nhân viên thu ngân',300.00,'PartTime','904898998',' Hưng Yên'),(3,3,'Nguyễn An','Nhân viên kho',500.00,'FullTime','996890777','Hà Nội'),(4,4,'Vũ Thị Liên','Nhân viên bán hàng',300.00,'FullTime','984890005','Thái Bình'),(5,5,'Lê Mai Anh','Nhân viên bán hàng',400.00,'PartTime','946890123','Nam Định');
/*!40000 ALTER TABLE `nhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `MaTaiKhoan` int NOT NULL AUTO_INCREMENT,
  `TenTaiKhoan` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `MatKhau` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `Email` varchar(30) DEFAULT NULL,
  `SDT` varchar(20) DEFAULT NULL,
  `Quyen` int DEFAULT NULL,
  PRIMARY KEY (`MaTaiKhoan`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (1,'a','123','enchan@gmail.com','0123456789',1),(2,'b','5678','enchan@gmail.com','0987654321',2),(3,'c','45678','enchan@gmail.com','0456789123',1),(4,'d','5678','enchan@gmail.com','0789123456',2),(5,'e','678','enchan@gmail.com','0321654987',1),(6,'k','678','enchan@gmail.com','0987233625',1),(7,'l','678','enchan@gmail.com','09876464644',2),(8,'m','678','enchan@gmail.com','0567894321',1),(9,'y','78','enchan@gmail.com','00234567891',2),(10,'z','678','enchan@gmail.com','0345678921',1);
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'admin','2@gmail.com','$2y$10$Blwj09yfogGDK58II7hsY.uDX5XMpyiYQxI9VeEeID.LbK0XOrIfy',0,'2024-05-14 00:24:54','2024-06-06 17:40:09'),(6,'3','3@gmail.com','$2y$10$kvc2MrxcqCWyIT9Wjv6/RO0mMgxkMTNWdS9Rj0ZULffMKhsCk8wE6',2,'2024-05-14 00:38:00','2024-05-14 00:38:00'),(7,'2','khang2@gmail.com','$2y$10$Ly4SfaW56bhkZDS4g.MXzuXD43azkaDB8mMVfYDHto414ISevcwyi',2,'2024-05-24 17:40:35','2024-05-24 17:40:35'),(10,'khang','khang@gmail.com','$2y$10$Kvay79hLn.ertvllWM/FO.dCWIZhBNCCRCthS2nbdA9YcsmCMC5Za',0,'2024-05-24 17:53:27','2024-06-05 18:58:39'),(14,'khang2','duykhang02vnn@gmail.com','$2y$10$lQ2gokyEDz54ljYtvWupLu8JQSIFz7/4vCXD/0ju6JryqC0ABXOLS',1,'2024-06-05 23:40:08','2024-06-05 23:40:08'),(15,'khang3','khang3@a.dd','$2y$10$TJkOOrRsPPA6ude6yQCq1eDwwBWTnIY9F1tOTaz6DbaKFnbEHXBLC',1,'2024-06-05 23:58:04','2024-06-05 23:58:04'),(16,'test','test@gma.cs','$2y$10$5vGkpi4G7gx2h3QmIeUCvetNd4oBEeEWmKRllF2BRAxFCRe0U7cSG',1,'2024-06-06 00:05:20','2024-06-06 00:05:20'),(17,'d','d@d.fsd','$2y$10$PegxQToSAgVar/giMclA0eIBFtFokCY3k/0Xsc3ZaGs2JB7xNF.M.',1,'2024-06-06 00:08:50','2024-06-06 00:08:50'),(18,'sd','s2@f.hg','$2y$10$JDGIO/PTYHQW.milUZmK9.p6yVQ60ZHDLZfWlQZ4dXAE5LLaGJPaK',1,'2024-06-06 00:09:46','2024-06-06 00:09:46'),(19,'sda','ds@d.jkk','$2y$10$pWST2PL4D02rWp4GleH/J.VE1v0ABFkIn4BDHhPXfMXbn0HMkt1wu',1,'2024-06-06 00:10:33','2024-06-06 00:10:33'),(20,'exampleUser','example@example.com','$2y$10$sY3Wfa0T90elbcUCEFSQg.328lLGiZbYya7rU/AhZugehB5PdASkO',1,'2024-06-06 00:12:58','2024-06-06 00:12:58'),(21,'tessss','lolhy44@gmail.com','$2y$10$h7c3y5A59SLveMTvqbJbTOlUzASVcGxmlHcc0OwvqaZDco5IClyw6',1,'2024-06-06 00:34:15','2024-06-06 00:34:15'),(22,'ads','dsas@ad.dsd','$2y$10$SQPF4DDue50osfm71bDRru/LuH5KMf4zyT1FoKViTFjLQVhrL5q2W',1,'2024-06-06 01:27:48','2024-06-06 01:27:48'),(23,'test2','test2@gmail.com','$2y$10$cmQF.CieWEzfLzTsTuFuneg7eQ2MLsdVJcL0BQQtU7b71fmx/8VAS',1,'2024-06-06 01:29:03','2024-06-06 01:29:03');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-13 14:12:31
