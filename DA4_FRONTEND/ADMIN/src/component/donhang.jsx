import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Menu from "./Menu";

function App() {
  return (
    <div>
        <div className="phanthanto">
            <div className="menubentrai">
                <a className="header_support" href="index.html">
                    <img src="Hinhanh/logo1.jpg" alt=""/>
                </a>   
                <Menu/>
            </div>

            <div className="bodybenphai" id="main">             
                <div className="danhsach-mp">
                    <div className="header-ds">
                        <h3 className="text-header" style={{marginLeft: "20px",  fontSize: "30px"}}><i className="fa-solid fa-list-ul"></i> Danh sách đơn hàng đặt</h3>
                    </div>
                    <div className="search">
                        <input id="timkiemtt" type="text" placeholder="Nhập mã đơn hàng mà bạn muốn tìm kiếm..." style={{width: "1245px"}}/>
                        <button onClick="timKiem()"><i className="fa-solid fa-magnifying-glass"></i>Tìm kiếm</button>
                    </div>

                    <table className="table-ds-đh" style={{ width: "1280px", marginTop: "30px", marginLeft: "20px" }}>
                        <thead>
                            <tr style={{fontWeight: "bold", height: "40px"}}>
                                <th></th>
                                <th>STT</th>
                                <th>Mã đơn hàng đặt</th>
                                <th>Mã mỹ phẩm</th>
                                <th>Tên mỹ phẩm</th>
                                <th>Mã nhân viên</th>
                                <th>Tên khách hàng</th>
                                <th>SDT</th>
                                <th>Ngày đặt</th>
                                <th>Đơn giá</th>
                                <th>Số lượng</th>
                                <th>Thành tiền</th>
                                <th>Tác vụ</th>  
                            </tr>
                        </thead>

                        <tbody id="tbody_donhang">
                            <tr style={{height: "40px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td style={{paddingTop: "10px"}}>1</td>
                                <td style={{paddingTop: "10px"}}>ĐHĐ001</td>
                                <td style={{paddingTop: "10px"}}>NC001</td>
                                <td style={{paddingTop: "10px"}}>Kem chống nắng Cushion C</td>
                                <td style={{paddingTop: "10px"}}>NV001</td>
                                <td style={{paddingTop: "10px"}}>Trần Thị Thu Trà</td>
                                <td style={{paddingTop: "10px"}}>0987233625</td>
                                <td style={{paddingTop: "10px"}}>15/11/2023</td>
                                <td style={{paddingTop: "10px"}}>325.000</td>
                                <td style={{paddingTop: "10px"}}>2</td>
                                <td style={{paddingTop: "10px"}}>650.000</td>
                                <td className="col-tacvu"><i className="fa-solid fa-trash-can"></i></td>
                            </tr>

                            <tr style={{height: "40px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td style={{paddingTop: "10px"}}>2</td>
                                <td style={{paddingTop: "10px"}}>ĐHĐ002</td>
                                <td style={{paddingTop: "10px"}}>S001</td>
                                <td style={{paddingTop: "10px"}}>Son Background</td>
                                <td style={{paddingTop: "10px"}}>NV003</td>
                                <td style={{paddingTop: "10px"}}>Đặng Ngọc Hoa</td>
                                <td style={{paddingTop: "10px"}}>0987233623</td>
                                <td style={{paddingTop: "10px"}}>28/11/2023</td>
                                <td style={{paddingTop: "10px"}}>225.000</td>
                                <td style={{paddingTop: "10px"}}>10</td>
                                <td style={{paddingTop: "10px"}}>2.225.000</td>
                                <td className="col-tacvu"><i className="fa-solid fa-trash-can"></i></td>
                            </tr>

                            <tr style={{height: "40px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td style={{paddingTop: "10px"}}>3</td>
                                <td style={{paddingTop: "10px"}}>ĐHĐ003</td>
                                <td style={{paddingTop: "10px"}}>PP003</td>
                                <td style={{paddingTop: "10px"}}>Phấn phủ kiềm dầu</td>
                                <td style={{paddingTop: "10px"}}>NV002</td>
                                <td style={{paddingTop: "10px"}}>Phạm Linh Linh</td>
                                <td style={{paddingTop: "10px"}}>0387233623</td>
                                <td style={{paddingTop: "10px"}}>2/12/2023</td>
                                <td style={{paddingTop: "10px"}}>350.000</td>
                                <td style={{paddingTop: "10px"}}>1</td>
                                <td style={{paddingTop: "10px"}}>350.000</td>
                                <td className="col-tacvu"><i className="fa-solid fa-trash-can"></i></td>
                            </tr>

                            <tr style={{height: "40px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td style={{paddingTop: "10px"}}>4</td>
                                <td style={{paddingTop: "10px"}}>ĐHĐ004</td>
                                <td style={{paddingTop: "10px"}}>S004</td>
                                <td style={{paddingTop: "10px"}}>Son MAC</td>
                                <td style={{paddingTop: "10px"}}>NV001</td>
                                <td style={{paddingTop: "10px"}}>Nguyễn Thị Huyền</td>
                                <td style={{paddingTop: "10px"}}>0357233623</td>
                                <td style={{paddingTop: "10px"}}>10/12/2023</td>
                                <td style={{paddingTop: "10px"}}>400.000</td>
                                <td style={{paddingTop: "10px"}}>2</td>
                                <td style={{paddingTop: "10px"}}>800.000</td>
                                <td className="col-tacvu"><i className="fa-solid fa-trash-can"></i></td>
                            </tr>

                            <tr style={{height: "40px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td style={{paddingTop: "10px"}}>5</td>
                                <td style={{paddingTop: "10px"}}>ĐHĐ005</td>
                                <td style={{paddingTop: "10px"}}>KCN005</td>
                                <td style={{paddingTop: "10px"}}>Kem chống nắng The Earth</td>
                                <td style={{paddingTop: "10px"}}>NV003</td>
                                <td style={{paddingTop: "10px"}}>Trịnh Thuỳ Linh</td>
                                <td style={{paddingTop: "10px"}}>0988233623</td>
                                <td style={{paddingTop: "10px"}}>5/11/2023</td>
                                <td style={{paddingTop: "10px"}}>300.000</td>
                                <td style={{paddingTop: "10px"}}>5</td>
                                <td style={{paddingTop: "10px"}}>1.500.000</td>
                                <td className="col-tacvu"><i className="fa-solid fa-trash-can"></i></td>
                            </tr>

                            <tr style={{height: "40px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td style={{paddingTop: "10px"}}>6</td>
                                <td style={{paddingTop: "10px"}}>ĐHĐ006</td>
                                <td style={{paddingTop: "10px"}}>NTT006</td>
                                <td style={{paddingTop: "10px"}}>Nước tẩy trang Garnie</td>
                                <td style={{paddingTop: "10px"}}>NV005</td>
                                <td style={{paddingTop: "10px"}}>Cao Xuân Tài</td>
                                <td style={{paddingTop: "10px"}}>0988233623</td>
                                <td style={{paddingTop: "10px"}}>5/11/2023</td>
                                <td style={{paddingTop: "10px"}}>200.000</td>
                                <td style={{paddingTop: "10px"}}>3</td>
                                <td style={{paddingTop: "10px"}}>600.000</td>
                                <td className="col-tacvu"><i className="fa-solid fa-trash-can"></i></td>
                            </tr>

                            <tr style={{height: "40px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td style={{paddingTop: "10px"}}>7</td>
                                <td style={{paddingTop: "10px"}}>ĐHĐ007</td>
                                <td style={{paddingTop: "10px"}}>KCN002</td>
                                <td style={{paddingTop: "10px"}}>Kem chống nắng Skin 1004</td>
                                <td style={{paddingTop: "10px"}}>NV001</td>
                                <td style={{paddingTop: "10px"}}>Trần An Nhiên</td>
                                <td style={{paddingTop: "10px"}}>0988233623</td>
                                <td style={{paddingTop: "10px"}}>5/12/2023</td>
                                <td style={{paddingTop: "10px"}}>800.000</td>
                                <td style={{paddingTop: "10px"}}>5</td>
                                <td style={{paddingTop: "10px"}}>3.500.000</td>
                                <td className="col-tacvu"><i className="fa-solid fa-trash-can"></i></td>
                            </tr>

                            <tr style={{height: "40px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td style={{paddingTop: "10px"}}>8</td>
                                <td style={{paddingTop: "10px"}}>ĐHĐ008</td>
                                <td style={{paddingTop: "10px"}}>SN005</td>
                                <td style={{paddingTop: "10px"}}>Son Romand</td>
                                <td style={{paddingTop: "10px"}}>NV008</td>
                                <td style={{paddingTop: "10px"}}>Nguyễn Ngân Hà</td>
                                <td style={{paddingTop: "10px"}}>0358233623</td>
                                <td style={{paddingTop: "10px"}}>14/10/2023</td>
                                <td style={{paddingTop: "10px"}}>900.000</td>
                                <td style={{paddingTop: "10px"}}>5</td>
                                <td style={{paddingTop: "10px"}}>4.500.000</td>
                                <td className="col-tacvu"><i className="fa-solid fa-trash-can"></i></td>
                            </tr>

                        </tbody>
                    </table>
                
                <div className="soluong" style={{width: "1280px"}}>
                    <div className="tong-soluong">
                        <p>Số lượng đơn hàng đặt chưa xử lý: </p>
                        <small id="quantity" style={{paddingTop: "0px", marginLeft: "6px", fontSize: "1.1rem", color: "#e76800"}}>8</small>
                    </div>
                    <div className="page">
                        <button><i className="fa-solid fa-angles-left"></i></button>
                        <button><i className="fa-solid fa-angle-left"></i></button>
                        <button>1</button>
                        <button>2</button>
                        <button><i className="fa-solid fa-angle-right"></i></button>
                        <button><i className="fa-solid fa-angles-right"></i></button>
                </div>
            </div>        
        </div>         
    </div>   
        </div>
    </div>
  )
}
export default App;