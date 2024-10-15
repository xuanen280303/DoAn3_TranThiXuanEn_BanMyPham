var mylist = [];

// Hàm load dữ liệu từ localStorage
function loadCartData() {
    // Lấy dữ liệu từ localStorage với key là "mylist"
    var cartData = localStorage.getItem("mylist");
    // Kiểm tra xem có dữ liệu không
    if (cartData) {
        // Nếu có dữ liệu, chuyển đổi chuỗi JSON thành đối tượng JavaScript và gán vào mảng mylist
        mylist = JSON.parse(cartData);
    }
}

// hiển thị thông tin sản phẩm dựa trên dữ liệu có sẵn trong mảng mylist
function getdatabyorder() {
    // Lấy phần tử đầu tiên có class là "sp1"
    var sanphamhienthi = document.querySelector(".sp1");
    // Xóa nội dung bên trong phần tử "sp1" để chuẩn bị cập nhật thông tin mới
    sanphamhienthi.innerHTML = "";

    // Sử dụng forEach để lặp qua từng sản phẩm trong mảng mylist
    mylist.forEach(function (product) {
        // Tạo một phần tử div mới có class "sanpham1" để chứa thông tin của mỗi sản phẩm.
        var sanphams = document.createElement("div");
        sanphams.classList.add("sanpham1");
        // Thiết lập nội dung sản phẩm muốn hiển thị
        sanphams.innerHTML = `
            <div class="sp1">
                <div class="product-details">
                    <div class="hinhanhsp">
                        <img style="width: 70px; height: 60px;" src="${product.img}" alt="">
                    </div>
                    <div class="tieude">
                        <span>${product.na}</span><br>
                        <div class="mota">
                            <span>${product.des}</span>
                        </div>
                    </div>
                </div>
                <div class="giatien1">
                    <div class="giamoi">
                        <p style="color: #FF6600; font-weight: bold;">${product.newpr}</p>
                    </div>
                </div>
            </div>
        `;
        // Thêm phần tử sanphams vào phần tử "sp1"
        sanphamhienthi.appendChild(sanphams);
    });
}



// Hàm cập nhật tổng tiền trên trang đặt hàng
function capnhattongtien() {
    var tongtien = mylist.reduce(function (total, product) {
        return total + parseInt(product.newpr.replace(" <span class=\"dong\">đ</span>", "")) * 1000;
    }, 0);
    // Cập nhật tổng tiền trên trang đặt hàng
    document.querySelector(".tamtinh .giatien p").textContent = tongtien.toLocaleString() + "đ";
    document.querySelector(".thanhtienn .tien p").textContent = tongtien.toLocaleString() + "đ";
}

// Gọi các hàm cần thiết khi trang được tải
document.addEventListener("DOMContentLoaded", function () {
    loadCartData(); // Load dữ liệu từ localStorage
    getdatabyorder(); // Cập nhật sản phẩm trên trang đặt hàng
    capnhattongtien(); // Cập nhật tổng tiền
});

document.getElementById("dathang").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var ten = document.getElementById("nguoinhan").value;
    var tt = document.getElementById("thongtin").value;
    if (email.trim() !== "" && ten.trim() !== "" && tt.trim() !== "") {
        alert("Đặt hàng thành công! Cảm ơn bạn đã trải nghiệm mua sắm cùng Hasaki!");
        //Xoá giỏ hàng sau khi đặt thành công
        localStorage.removeItem("mylist");
        window.location.href = "http://127.0.0.1:5502/index.html";
    } else {
        alert("Vui lòng nhập đầy đủ thông tin để đặt hàng!");
    }
});

    

