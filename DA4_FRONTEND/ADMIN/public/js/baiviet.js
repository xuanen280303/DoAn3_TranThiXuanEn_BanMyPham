var mabaiviet = document.getElementById('mabv');
var tieude = document.getElementById('tieudebv');
var nguoidang = document.getElementById('nguoidangbv');
var thoigian = document.getElementById('tgiandangbv');
var ngaykt = document.getElementById('ngayktbv');
var noidung = document.getElementById('noidungbv');
var them = document.getElementById('thembv');
var sua = document.getElementById('suabv');
var lammoi = document.getElementById('lammoibv');
var phanthanbv = document.getElementById('tbody_baiviet');

// tieude.addEventListener('input', function () {
//     this.value = this.value.replace(/[^a-zA-Z ]/g, '');
// });



// Gọi hàm hiển thị dữ liệu khi trang được load
document.addEventListener('DOMContentLoaded', function () {
    hienThi();
});

