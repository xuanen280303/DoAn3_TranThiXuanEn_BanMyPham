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
            
            <div className="bodybenphai"> 
                <div className="headerthongke">
                    <div style={{display: "flex"}}>
                        <p style={{fontSize: "22px"}}>THỐNG KÊ</p>
                    </div>          
                    <img className="imgheader" src="./Hinhanh/icons8_Circle_Chart.svg" alt="#" />
                </div>

                <div className="tongquatheader"> 
                    <div className="doanhthu" style={{backgroundColor: "#01A6D6", width: "220px"}}>
                        <div className="hinhanh">
                            <img src="Hinhanh/icons8_Money_Bag_Pounds_1.svg" alt="" />
                        </div>                  
                        <div className="tieude">
                            <p style={{marginTop: "15px"}}>Doanh thu</p>
                            <p style={{marginTop: "3px"}}>283.000.000đ</p>
                        </div>
                    </div>
                    <div className="doanhthu" style={{backgroundColor: "#59AF6D", width: "220px"}}>
                        <div className="hinhanh">
                            <img src="Hinhanh/icons8_Create_Order.svg" alt="" />
                        </div>                  
                        <div className="tieude">
                            <p style={{marginTop: "15px"}}>Đơn hàng nhập: 500</p>
                            <p style={{marginTop: "3px"}}>Mỹ phẩm nhập: 825</p>
                        </div>
                    </div>
                    <div className="doanhthu" style={{backgroundColor: "#326E51", width: "220px"}}>
                        <div className="hinhanh">
                            <img src="Hinhanh/icons8_purchase_order.svg" alt="" />
                        </div>                  
                        <div className="tieude">
                            <p style={{marginTop: "15px"}}>Đơn hàng đặt: 200</p>
                            <p style={{marginTop: "3px"}}>Mỹ phẩm bán: 250</p>
                        </div>
                    </div>
                    <div className="doanhthu" style={{backgroundColor: "#991B26", width: "220px"}}>
                        <div className="hinhanh">
                            <img src="Hinhanh/icons8_replace.svg" alt="" />
                        </div>                  
                        <div className="tieude">
                            <p style={{marginTop: "15px"}}>Đơn hoàn trả</p>
                            <p style={{marginTop: "3px"}}>12</p>
                        </div>
                    </div>         
                </div>

                <div className="luachon">
                    <label htmlFor="selectOption">Chọn loại thống kê:</label>
                    <select id="selectOption" onChange={showChart}>
                        <option value="" disabled selected>Chọn loại thống kê</option>
                        <option value="option1">Số lượng mỹ phẩm bán được</option>
                        <option value="option2">Số lượng mỹ phẩm tồn trong kho</option>
                        <option value="option3">Doanh thu theo tuần</option>
                    </select>           
                </div>
                <div style={{width: "90%", marginLeft: "90px", marginTop: "30px", height: "500px"}}>
                    <canvas id="myChart" width="1350" height="530" style={{display: "block", boxSizing: "border-box", height: "500px", width: "1000px"}}></canvas>
                </div>          
            </div>
        </div>   
    </div>
  )
}
export default App;