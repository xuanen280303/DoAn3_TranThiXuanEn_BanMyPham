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
            <div className="bodybenphaimp"> 
                <div className="headerbaiviet">
                    <div style={{display: "flex"}}>
                        <p style={{fontSize: "25px", marginLeft: "450px"}}>QUẢN LÝ NHÀ CUNG CẤP</p>
                    </div>          
                    <img className="imgheader" src="./Hinhanh/icons8_Australia_Post.svg" alt="#"/>
                </div> 
                
                <div className="phantren">
                    <div className="phantren1">
                        <div className="nhap-thongtin">
                            <h3 className="text-header"><i className="fa-solid fa-pen-to-square" style={{color: "#ff6600"}}></i>Nhập thông tin nhà cung cấp</h3>
                            <form className="nhap-thongtin-sp">
                                <label htmlFor="MaMP" className="txtmasp">Mã nhà cung cấp: </label>
                                <input id="mabv" type="text" style={{width: "347px"}} placeholder="Nhập mã nhà cung cấp..."/>
                                <label htmlFor="MaMP" className="txtmasp">Họ tên: </label>
                                <input id="tieudebv" type="text" style={{width: "347px"}} placeholder="Nhập tiêu đề nhà cung cấp..."/>
                            </form>                  
                        </div>      
                        <div className="nhap-thongtin">
                            <form className="nhap-thongtin-sp" style={{marginTop: "80px"}}>
                                <label htmlFor="TenMP" className="txtmasp">Số điện thoại: </label>
                                <input id="nguoidangbv" type="text" style={{width: "347px"}} placeholder="Nhập tên người đăng nhà cung cấp..."/>         
                                <label htmlFor="TenMP" className="txtmasp">Địa chỉ: </label>
                                <input id="tgiandangbv" type="text" style={{width: "347px"}} placeholder="Nhập thời gian đăng nhà cung cấp..."/>         
                            </form>                  
                        </div>   
                    </div>            
                    <div className="cacbuttons">
                        <button id="thembv" className="themmp"><i className="fa-solid fa-plus" style={{marginRight: "5px"}}></i>Thêm</button>
                        <button id="suabv" className="suamp"><i className="fa-solid fa-pen" style={{marginRight: "5px"}}></i>Sửa</button>
                        <button id="lammoibv" className="capnhatmp"><i className="fa-solid fa-arrows-rotate" style={{marginRight: "5px"}}></i>Làm mới</button>
                    </div> 
                </div>  
    
                <div className="phanduoi">
                    <div className="header-ds">
                        <h3 className="text-header" style={{marginLeft: "20px"}}><i className="fa-solid fa-list-ul"></i> Danh sách nhà cung cấp</h3>
                    </div>
                    <div className="searchs">
                        <input type="text" placeholder="Nhập mã, tên nhà cung cấp cần tìm kiếm..." style={{width: "1000px"}}/>
                        <button style={{marginLeft: "20px"}}><i className="fa-solid fa-magnifying-glass"></i>Tìm kiếm</button>
                    </div>

                    <table className="table-ds-sp">
                        <thead>
                            <tr style={{fontWeight: "bold", height: "40px", fontSize: "18px"}}>
                                <th></th>
                                <th>STT</th>
                                <th>Mã nhà cung cấp</th>
                                <th>Tên nhà cung cấp</th>
                                <th>SDT</th>
                                <th>Địa chỉ</th>
                                <th>Tác vụ</th>  
                            </tr>
                        </thead>
                        <tbody id="tbody_baiviet">
                            <tr style={{height: "40px", fontSize: "16px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td className="col-mamp" style={{paddingTop: "10px"}}>NCC01</td>
                                <td className="col-tenmp" style={{paddingTop: "10px"}}>Beauty Vlogs</td>
                                <td className="col-quantity">0987233625</td>
                                <td className="col-price">Phù Cừ, Hưng Yên</td>
                                <td className="col-tacvu"><i className="fa-solid fa-trash-can"></i></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="soluong">
                        <div className="tong-soluong">
                            <p>Số lượng nhà cung cấp: </p>
                            <small id="quantity" style={{paddingTop: "0px", marginLeft: "6px", fontSize: "1.1rem", color: "#e76800"}}>3</small>
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