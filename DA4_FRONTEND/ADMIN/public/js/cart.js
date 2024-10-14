// function updateTotal() {
//     var quantity = parseInt(document.getElementById('quantity').value);
//     var unitPrice = parseInt(document.getElementById('unitPrice').textContent);
//     var totalPrice = quantity * unitPrice;
//     document.getElementById('totalPrice').textContent = total.toLocaleString() + ' đ';
// }

// var da = localStorage.getItem("mylist")
// if (da) {
//     mylist = JSON.parse(da)
// } else {
//     mylist = []
// }
// reload()

// function reload() {
    
//     $('.listsp').empty()
//     var htmll = mylist.map((sp, index) => `
//         <div class="sanpham1">
//             <div class="sp1">
//                 <div class="hinhanhsp">
//                     <img src="${sp.img}" alt="">
//                 </div>
//                 <div class="tieude">
//                     <span>${sp.na}</span><br>
//                     <div class="mota">
//                         <span>${sp.des}</span>
//                     </div>
//                     <div class="traitim">
//                         <i class="fa-regular fa-heart"></i>
//                         Yêu thích
//                         <i class="fa-solid fa-x" style="padding-left: 20px;"></i> 
//                         <button style="background-color: #F27280; border: none; height: 25px; width: 38px; border-radius: 10px; font-size: 15px;" 
//                         onclick="del(${index})">Xoá</button>
//                     </div>
//                 </div>
//             </div>
//             <div class="giatien1">
//                 <div class="giamoi">
//                     <p>${sp.newpr}</p>
//                 </div>
//                 <div class="giagoc">
//                     <p>${sp.oldpri}</p>
//                 </div>
//             </div>
//             <div class="sluong">
//                 <input id="sl" type="number" style="width: 40px; height: 28px; background-color:#F3F3F3; padding-left: 5px; font-size: 16px;" value="${sp.quantity}" oninput="soluonghople(this)">
//             </div>
//             <div class="thanhtien1" id="thanhtien">
//                 <p>${sp.newpr}</p>
//             </div>
//         </div>`);

// //Hiển thị danh sách ra giao diện
// $('.listsp').html(htmll.join(''));
// }

// function del(i) {
//     var xoa = confirm("Bạn có chắc muốn xoá mỹ phẩm này không?");
//     if (xoa) {
//         // Xoá sản phẩm khỏi mảng theo vị trí
//         mylist.splice(i, 1);
//         reload();  
//         // Lưu mảng mới vào localStorage
//         localStorage.setItem("mylist", JSON.stringify(mylist));
//     }
// }

// function soluonghople(input) {
//     var quantity = parseInt(input.value);
//     if (isNaN(quantity) || quantity < 1) {
//         input.value = 1;
//     }
// }

// ////Tăng số lượng tăng tiền
// var x=document.querySelectorAll("#sl")// Danh sách tất cả các số lượng tương ứng
// var y=document.querySelectorAll("#thanhtien")// Danh sách tất cả các thành tiền tương ứng
//         for(let i=0;i<x.length;i++)
//         {
//             x[i].addEventListener("input", function () {
//                 // Khi slg thay đổi, lấy slg nhân với giá tiền
//                 z = x[i].value * mylist[i].newpr.replace(" <span class=\"dong\">đ</span>", "") * 1000;
//                 // Cập nhật lại "thanhtien" tương ứng với giá trị mới tính toán với định dạng chuỗi
//                 y[i].innerHTML = z.toLocaleString() + "<span class=\"dong\">đ</span>";
//                 // Gọi hàm sumsum() để cập nhật tổng tiền
//                 sumsum();
//         });
//     }
//     z=0;


// function sumsum() {
//     tongtien = 0;
//     for (let i = 0; i < x.length; i++) {
//         tongtien = tongtien + x[i].value * mylist[i].newpr.replace(" <span class=\"dong\">đ</span>", "") * 1000;
//     }
//     // Hiển thị tổng tiền cho các thẻ HTML với định dạng chuỗi
//     document.getElementById("giatien2x").innerHTML = tongtien.toLocaleString() + " <span class=\"dong\">đ</span>";
//     document.getElementById("giatien2xx").innerHTML = tongtien.toLocaleString() + " <span class=\"dong\">đ</span>";
//     document.getElementById("giatien1").innerHTML = tongtien.toLocaleString() + " <span class=\"dong\">đ</span>";
// }
// sumsum()



