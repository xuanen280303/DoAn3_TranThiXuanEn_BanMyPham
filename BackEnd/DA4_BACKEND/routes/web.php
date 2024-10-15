<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaiKhoanController;
use App\Http\Controllers\BaiVietController;
use App\Http\Controllers\LoaiMyPhamController;
use App\Http\Controllers\MyPhamController;
use App\Http\Controllers\GiaBanController;
use App\Http\Controllers\NhanVienController;
use App\Http\Controllers\KhachHangController;
use App\Http\Controllers\NhaCCController;
use App\Http\Controllers\HoaDonNhapController;
use App\Http\Controllers\ChiTietHoaDonNhapController;
use App\Http\Controllers\HoaDonBanController;
use App\Http\Controllers\ChiTietHoaDonBanController;
use App\Http\Controllers\Trangchu_UserController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ThongKeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/test', function () {
    return view('Admin.MyPham.test');
});
Route::resource('/TaiKhoans', TaiKhoanController::class);
Route::resource('/BaiViets', BaiVietController::class);
Route::resource('/LoaiMyPhams', LoaiMyPhamController::class);
Route::resource('/MyPhams', MyPhamController::class);
Route::resource('/GiaBans', GiaBanController::class);
Route::resource('/NhanViens', NhanVienController::class);
Route::resource('/KhachHangs', KhachHangController::class);
Route::resource('/NhaCCs', NhaCCController::class);
Route::resource('/HoaDonNhaps', HoaDonNhapController::class);
Route::resource('/ChiTietHoaDonNhaps', ChiTietHoaDonNhapController::class);
Route::resource('/HoaDonBans', HoaDonBanController::class);
Route::resource('/ChiTietHoaDonBans', ChiTietHoaDonBanController::class);

Route::get('/adminpage', function () {
    return view('Admin/adminpage');
}); 
Route::get('/baiviet', function () {
    return view('Admin/baiviet');
}); 
Route::get('/login', function () {
    return view('Admin/login');
}); 
Route::get('/mypham', function () {
    return view('Admin/mypham');
}); 
Route::get('/nhacungcap', function () {
    return view('Admin/nhacungcap');
}); 
Route::get('/nhanvien', function () {
    return view('Admin/nhanvien');
}); 
Route::get('/signup', function () {
    return view('Admin/signup');
}); 
Route::get('/taikhoan', function () {
    return view('Admin/taikhoan');
});
Route::get('/thongke', function () {
    return view('Admin/thongke');
});
Route::get('/khachhang', function () {
    return view('Admin/khachhang');
});
Route::get('/dondathang', function () {
    return view('Admin/dondathang');
});
Route::get('/hoadonnhap', function () {
    return view('Admin/hoadonnhap');
});
Route::get('/inHDN', function () {
    return view('Admin/inHDN');
});
//---------------------Thêm, sửa, xóa TÀI KHOẢN--------------------
Route::get("taikhoans",[TaiKhoanController::class,'index'])->name('Admin.TaiKhoan.index');
Route::get("taikhoans/{id}/del",[TaiKhoanController::class,'destroy'])->name('Admin.TaiKhoan.del');
Route::get("taikhoans/create",[TaiKhoanController::class,'create']);
Route::get("taikhoans/{id}/edit",[TaiKhoanController::class,'edit'])->name('Admin.TaiKhoan.edit');
Route::post("taikhoans/{id}/save",[TaiKhoanController::class,'save'])->name('Admin.TaiKhoan.save');
Route::get("taikhoans/{id}/show",[TaiKhoanController::class,'show'])->name('Admin.TaiKhoan.show');


//--------------------------- Template người dùng---------------
Route::get("/index",[Trangchu_UserController::class,'index'])->name('index');


Route::get('/misspass', function () {
    return view('User/misspass');
});
Route::get('/category', function () {
    return view('User/category');
});
Route::get('/cart', function () {
    return view('User/cart');
});
Route::get('/logincustomer', function () {
    return view('User/logincustomer');
});

Route::get('/order', function () {
    return view('User/order');
});
Route::get('/productdetail', function () {
    return view('User/productdetail');
});
Route::get('/signupcustomer', function () {
    return view('User/signupcustomer');
});
Route::get('/support', function () {
    return view('User/support');
});
Route::get('/systemshop', function () {
    return view('User/systemshop');
});
Route::get('/blog', function () {
    return view('User/blog');
});
Route::get('/inHDB', function () {
    return view('User/inHDB');
});

//---------------------Đăng ký User--------------------
Route::post("/signupcustomer/save",[TaiKhoanController::class,'signupcustomer'])->name('User.signupcustomer.save');
//---------------------Đăng nhập User--------------------
Route::post("/logincustomer/in",[TaiKhoanController::class,'login'])->name('User.logincustomer.in');
Route::get("/logoutcustomer",[TaiKhoanController::class,'logout'])->name('User.logoutcustomer');

//---------------------Thêm, sửa, xóa LOẠI MỸ PHẨM--------------------
Route::get("loaimyphams",[LoaiMyPhamController::class,'index'])->name('Admin.LoaiMyPham.index');
Route::get("loaimyphams/{id}/del",[LoaiMyPhamController::class,'destroy'])->name('Admin.LoaiMyPham.del');
Route::get("loaimyphams/create",[LoaiMyPhamController::class,'create']);
// Route::get('loaimyphams/create',[LoaiMyPhamController::class,'create'])->name('loaimyphams.create');
Route::get("loaimyphams/{id}/edit",[LoaiMyPhamController::class,'edit'])->name('Admin.LoaiMyPham.edit');
Route::post("loaimyphams/{id}/save",[LoaiMyPhamController::class,'save'])->name('Admin.LoaiMyPham.save');
//------------------------ Hiển thị mỹ phẩm theo danh mục---------------
Route::get("loaimyphams/{id}/show",[LoaiMyPhamController::class,'show'])->name('Admin.LoaiMyPham.show');

//---------------------Thêm, sửa, xóa, tìm kiếm MỸ PHẨM--------------------
Route::get("myphams",[MyPhamController::class,'index'])->name('Admin.MyPham.index');
Route::get("myphams/{id}/del",[MyPhamController::class,'destroy'])->name('Admin.MyPham.del');
Route::get("myphams/create",[MyPhamController::class,'create']);
Route::get("myphams/{id}/edit",[MyPhamController::class,'edit'])->name('Admin.MyPham.edit');
Route::post("myphams/{id}/save",[MyPhamController::class,'save'])->name('Admin.MyPham.save');
//------------------------ Hiển thị mỹ phẩm theo chi tiết---------------
Route::get("myphams/{id}/show",[MyPhamController::class,'show'])->name('Admin.MyPham.show');

//---------------------Thêm, sửa, xóa KHÁCH HÀNG--------------------
Route::get("khachhangs/{id}/del",[KhachHangController::class,'destroy'])->name('Admin.KhachHang.del');
Route::get("khachhangs",[KhachHangController::class,'index'])->name('Admin.KhachHang.index');

// ------------------------Giỏ hàng----------------------------------------------
Route::post('/add-cart',[CartController::class,'addToCart'])->name('cart.addToCart');
Route::get('/cart',[CartController::class,'index'])->name('cart.index');
Route::get('/delete-cart/{MaMP}', [CartController::class,'deleteItem'])->name('cart.deleteItem');
Route::get('/deleteall-cart', [CartController::class,'deleteAllItem'])->name('cart.deleteAllItem');

// -------------------------Checkout--------------------------------------
Route::get('/order',[OrderController::class,'index'])->name('order');
Route::post('/order/xuathdb',[OrderController::class,'xuathdb'])->name('order.xuathdb');


// ----------------------Thống kê-----------------------------
Route::get('/thongke', [ThongKeController::class, 'thongKeSLTon']);



