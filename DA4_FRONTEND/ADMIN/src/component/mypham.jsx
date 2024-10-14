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
                    <p style={{fontSize: "25px"}}>QUẢN LÝ MỸ PHẨM</p>
                    </div>          
                    <img className="imgheader" src="./Hinhanh/icons8_lipstick.svg" alt="#"/>
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

            <div className="bodybenphaimp">  
                <div className="phantren">
                    <div className="phantren1">
                        <div className="nhap-thongtin">
                            <h3 className="text-header"><i className="fa-solid fa-pen-to-square" style={{color: "#ff6600"}}></i>Nhập thông tin mỹ phẩm</h3>
                            <form className="nhap-thongtin-sp">
                                <label htmlFor="MaMP" className="txtmasp">Mã mỹ phẩm: </label>
                                <input type="text" id="MaMP" style={{width: "347px"}} placeholder="Nhập mã mỹ phẩm..."/>

                                <label htmlFor="select-loai-sp">Mã loại mỹ phẩm: </label>
                                <select name="select-loai-sp" id="loaimp">
                                    <option value="choose">--Chọn loại mỹ phẩm</option>
                                    <option value="Kem chống nắng">Kem chống nắng</option>
                                    <option value="Son">Son</option>
                                    <option value="Nước tẩy trang">Nước tẩy trang</option>
                                    <option value="Sữa tắm">Sữa tắm</option>
                                    <option value="Toner">Toner</option>
                                    <option value="Nước hoa">Nước hoa</option>
                                    <option value="Cushion">Cushion</option>
                                    <option value="Dưỡng thể">Dưỡng thể</option>
                                    <option value="Phấn phủ">Phấn phủ</option>
                                    <option value="Ủ tóc">Ủ tóc</option>              
                                </select>

                            </form>                  
                        </div>      
                        <div className="nhap-thongtin">
                            <form className="nhap-thongtin-sp" style={{marginTop: "80px"}}>
                                <label htmlFor="TenMP" className="txtmasp">Tên mỹ phẩm: </label>
                                <input type="text" id="TenMP" style={{width: "347px"}} placeholder="Nhập tên mỹ phẩm..."/>         
                                <label htmlFor="hinhanh" className="txt-enterimg">Hình Ảnh: </label>
                                <input type="file" id="ImgMp" style={{width: "347px"}}/>
                            </form>                  
                        </div>   
                        <div className="nhap-thongtin">
                            <form className="nhap-thongtin-sp" style={{marginTop: "80px"}}>
                                <label htmlFor="MaMP" className="txtmasp">Số lượng: </label>
                                <input type="text" id="solg" style={{width: "347px"}} placeholder="Nhập số lượng mỹ phẩm..."/>
                                <label htmlFor="TenMP" className="txtmasp">Mô tả: </label>
                                <input type="text" id="mota" style={{width: "347px"}} placeholder="Nhập mô tả mỹ phẩm..."/>  
                            </form>                  
                        </div>  
                    </div>            
                    <div className="cacbuttons">
                        <button id="them" className="themmp"><i className="fa-solid fa-plus" style={{marginRight: "5px"}}></i>Thêm</button>
                        <button id="sua" className="suamp"><i className="fa-solid fa-pen" style={{marginRight: "5px"}}></i>Sửa</button>
                        <button id="lammoi" className="capnhatmp"><i className="fa-solid fa-arrows-rotate" style={{marginRight: "5px"}}></i>Làm mới</button>
                    </div> 
                </div>   
                <div className="phanduoi">
                    <div className="header-ds">
                        <h3 className="text-header" style={{marginLeft: "20px"}}><i className="fa-solid fa-list-ul"></i> Danh sách mỹ phẩm</h3>
                    </div>
                    <div className="searchs">
                        <input type="text" placeholder="Nhập mã, tên mỹ phẩm mà bạn muốn tìm kiếm..." style={{width: "1000px"}}/>
                        <button style={{marginLeft: "20px"}}><i className="fa-solid fa-magnifying-glass"></i>Tìm kiếm</button>
                    </div>

                    <table className="table-ds-sp">
                        <thead>
                            <tr style={{fontWeight: "bold", height: "40px", fontSize: "18px"}}>
                                <th></th>
                                <th>STT</th>
                                <th>Mã mỹ phẩm</th>
                                <th>Tên mỹ phẩm</th>
                                <th>Mã loại mỹ phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Số lượng</th>
                                <th>Mô tả</th>
                                <th>Tác vụ</th>  
                            </tr>
                        </thead>
                        <tbody id="tbody_mypham">
                            <tr style={{height: "40px", fontSize: "16px"}}>
                                <td className="check-sp">
                                    <input type="checkbox" name="check" id="chk-loai-sp"/>
                                </td>
                                <td style={{paddingTop: "10px"}}>1</td>
                                <td style={{paddingTop: "10px"}}>MP01</td>
                                <td>Kem chống nắng Skin</td>
                                <td>L10</td>
                                <td></td>
                                <td>28</td>
                                <td>Dịu nhẹ</td>
                                <td><i className="fa-solid fa-trash-can"></i></td>
                            </tr>                      
                        </tbody>
                    </table>
                    <div className="soluong">
                        <div className="tong-soluong">
                            <p>Số lượng mỹ phẩm </p>
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