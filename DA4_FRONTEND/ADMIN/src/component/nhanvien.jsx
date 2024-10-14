import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Menu from "./Menu";

function App() {
  return (
    <div>
        <section className="header">
            <div className="baoquat"> 
                <a className="header_support" href="index.html">
                    <img src="Hinhanh/logo1.jpg" alt=""/>
                </a>                    
                <div className="headerbaiviet">
                    <div>
                    <p style={{fontSize: "25px"}}>QUẢN LÝ NHÂN VIÊN</p>
                    </div>          
                    <img className="imgheader" src="./Hinhanh/icons8_users_1.svg" alt="#"/>
                </div>
            </div>       
        </section>

        <div className="phanthanto">
            <div className="menubentrai">
                <a className="header_support" href="index.html">
                    <img src="Hinhanh/logo1.jpg" alt=""/>
                </a>   
                <Menu/>
            </div>

            <div className="bodybenphai" id="main">  
                <div className="nhap-thongtin">
                    <h3 className="text-header"><i className="fa-solid fa-pen-to-square" style={{color: "#ff6600"}}></i>Nhập thông tin nhân viên</h3>
                    <form className="nhap-thongtin-sp">
                        <label htmlFor="manv" className="txtmasp">Mã nhân viên: </label>
                        <input type="text" id="manv" style={{width: "347px"}} placeholder="Nhập mã nhân viên.."/>
                        <label htmlFor="tennv" className="txtmasp">Tên nhân viên: </label>
                        <input type="text" id="tennv" style={{width: "347px"}} placeholder="Nhập tên nhân viên..."/>

                        <label htmlFor="calam" className="txtmasp">Ca làm: </label>
                        <select name="calam" id="calam" style={{width: "368px"}}>
                            <option value="choose">--Chọn ca làm</option>
                            <option value="Fulltime">Fulltime</option> 
                            <option value="Parttime">Parttime</option>         
                        </select>

                        <label htmlFor="sdtnv" className="txtmasp">Số điện thoại: </label>
                        <input type="text" id="sdtnv" style={{width: "347px"}} placeholder="Nhập số điện thoại nhân viên..."/>
                        <label htmlFor="diachinv" className="txtquantity">Địa chỉ: </label>
                        <input type="text" id="diachinv" style={{width: "347px"}} placeholder="Nhập địa chỉ nhân viên..."/>
                    </form>
                    <div className="buttons">
                        <button id="themnv" className="themnv"><i className="fa-solid fa-plus" style={{marginRight: "5px"}}></i>Thêm</button>
                        <button id="suanv" className="suanv"><i className="fa-solid fa-pen" style={{marginRight: "5px"}}></i>Sửa</button>
                        <button id="lammoinv" className="capnhat"><i className="fa-solid fa-arrows-rotate" style={{marginRight: "5px"}}></i>Làm mới</button>
                    </div>

                </div>
                <div className="danhsach-mp">
                    <div className="header-ds">
                        <h3 className="text-header"><i className="fa-solid fa-list-ul"></i> Danh sách nhân viên</h3>
                    </div>
                    <div className="search">
                        <input type="text" placeholder="Nhập mã, tên nhân viên muốn tìm kiếm..."/>
                        <button><i className="fa-solid fa-magnifying-glass"></i>Tìm kiếm</button>
                    </div>

                    <table className="table-ds-sp">
                        <thead>
                            <tr style={{fontWeight: "bold", height: "40px", fontSize: "18px"}}>
                                <th></th>
                                <th>STT</th>
                                <th>Mã nhân viên</th>
                                <th>Tên nhân viên</th>
                                <th>Ca làm</th>
                                <th>SĐT</th>
                                <th>Địa chỉ</th>
                                <th>Tác vụ</th>  
                            </tr>
                        </thead>
                        <tbody id="tbody_nhanvien">
                            <tr style={{height: "40px", fontSize: "16px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td className="col-mamp" style={{paddingTop: "10px"}}>1</td>
                                <td className="col-mamp" style={{paddingTop: "10px"}}>NV01</td>
                                <td className="col-tenmp">Trần Thu Trà</td>
                                <td className="col-quantity">Fulltime</td>
                                <td className="col-price">0987233625</td>
                                <td className="col-type">Phù Cừ, Hưng Yên</td>
                                <td className="col-tacvu"><i className="fa-solid fa-trash-can"></i></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <div className="soluong">
                        <div className="tong-soluong">
                            <p>Số lượng nhân viên</p>
                            <small id="quantity" style={{paddingTop: "0px", marginLeft: "6px", fontSize: "1.1rem", color: "#e76800"}}></small>
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