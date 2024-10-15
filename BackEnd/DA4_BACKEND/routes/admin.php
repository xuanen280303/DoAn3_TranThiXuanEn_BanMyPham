<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\TaiKhoanController;
use App\Http\Controllers\Admin\BaiVietController;
use App\Http\Controllers\Admin\LoaiMyPhamController;
use App\Http\Controllers\Admin\MyPhamController;
use App\Http\Controllers\Admin\GiaBanController;
use App\Http\Controllers\Admin\LichSuController;
use App\Http\Controllers\Admin\NhanVienController;
use App\Http\Controllers\Admin\KhachHangController;
use App\Http\Controllers\Admin\NhaCCController;
use App\Http\Controllers\Admin\LoginController;
use App\Http\Controllers\Admin\ChiTietHoaDonNhapController;
use App\Http\Controllers\Admin\HoaDonBanController;
use App\Http\Controllers\Admin\ChiTietHoaDonBanController;
use App\Http\Controllers\Admin\Trangchu_UserController;
use App\Http\Controllers\Admin\CartController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\ThongKeController;
use App\Http\Controllers\Admin\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


// -----------------------ĐĂNG NHẬP------------------------------
Route::group([
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::get('/profile', [AuthController::class, 'profile'])->name('auth.profile');
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->name('auth.refresh');
});
Route::group([
    // 'middleware' => 'auth.jwt',
], function ($router) {
//------------------------------MỸ PHẨM----------------------------------
//-----------------Hiển thị ra 1 mỹ phẩm-------------------------
Route::get('/mypham/get/{id}', [MyPhamController::class, 'getMyPham'])->name('mypham.get');
// Hiển thị và tìm kiếm mỹ phẩm
Route::post('/mypham/search', [MyPhamController::class, 'search'])->name('mypham.search');
//Lưu thông tin mỹ phẩm mới hoặc cập nhật thông tin mỹ phẩm
Route::post('/mypham/save', [MyPhamController::class, 'save'])->name('mypham.save');
//Xóa một mỹ phẩm cụ thể theo id
Route::delete('/mypham/delete/{id}', [MyPhamController::class, 'delete'])->name('mypham.delete');
// Xóa nhiều mỹ phẩm
Route::delete('/mypham/deletes', [MyPhamController::class, 'deletes']);


//-----------------------------LOẠI MỸ PHẨM----------------------------------
//-----------------Hiển thị ra 1 loại mỹ phẩm vào input-------------------------
Route::get('/loaimypham/get/{id}', [LoaiMyPhamController::class, 'getLoaiMyPham'])->name('loaimypham.get');
// Tìm kiếm loại mỹ phẩm
Route::post('/loaimypham/search', [LoaiMyPhamController::class, 'search'])->name('mypham.search');
//Lưu thông tin loại mỹ phẩm mới hoặc cập nhật thông tin loại mỹ phẩm
Route::post('/loaimypham/save', [LoaiMyPhamController::class, 'save'])->name('loaimypham.save');
//Xóa một loại mỹ phẩm cụ thể theo id
Route::delete('/loaimypham/delete/{id}', [LoaiMyPhamController::class, 'delete'])->name('loaimypham.delete');
// Xóa nhiều loại mỹ phẩm
Route::delete('/loaimypham/deletes', [LoaiMyPhamController::class, 'deletes']);


//------------------------------HÓA ĐƠN BÁN----------------------------------------
Route::get('/hoadonban/get/{id}', [HoaDonBanController::class, 'getHoaDonBan'])->name('hoadonban.get');
Route::get('/hoadonban/getDetail/{id}', [HoaDonBanController::class, 'getDetailByID'])->name('hoadonban.getDetail');
// Hiển thị danh sách loại mỹ phẩm với phân trang
Route::get('/hoadonban/index/{total?}', [HoaDonBanController::class, 'index'])->name('hoadonban.index');
// Tìm kiếm loại mỹ phẩm
Route::post('/hoadonban/search', [HoaDonBanController::class, 'search'])->name('hoadonban.search');
//Xóa một loại mỹ phẩm cụ thể theo id
Route::delete('/hoadonban/delete/{id}', [HoaDonBanController::class, 'delete'])->name('hoadonban.delete');
//Lưu thông tin hoá đơn bán
Route::post('/hoadonban/create', [HoaDonBanController::class, 'create'])->name('hoadonban.create');
//Sửa thông tin hoá đơn bán
Route::post('/hoadonban/update', [HoaDonBanController::class, 'update'])->name('hoadonban.update');
//Sửa thông tin hoá đơn bán
Route::post('/hoadonban/updateAll', [HoaDonBanController::class, 'updateAll'])->name('hoadonban.updateAll');
 

//------------------------------KHÁCH HÀNG----------------------------------
//-----------------Hiển thị ra 1 khách hàng-------------------------
Route::get('/khachhang/get/{id}', [KhachHangController::class, 'getKhachHang'])->name('khachhang.get');
// Hiển thị và tìm kiếm khách hàng
Route::post('/khachhang/search', [KhachHangController::class, 'search'])->name('khachhang.search');
//Xóa một khách hàng cụ thể theo id
Route::delete('/khachhang/delete/{id}', [KhachHangController::class, 'delete'])->name('khachhang.delete');
//Lưu thông tin khách hàng mới hoặc cập nhật thông tin khách hàng
Route::post('/khachhang/save', [KhachHangController::class, 'save'])->name('khachhang.save');
// Xóa nhiều khách hàng
Route::delete('/khachhang/deletes', [KhachHangController::class, 'deletes']);

// Hiển thị và tìm kiếm tài khoản------------------
Route::post('/taikhoan/search', [TaiKhoanController::class, 'search'])->name('taikhoan.search');

//---------------- Thống kê top 5 mỹ phẩm bán chạy-------------------------
Route::get('/thongketop5', [ThongKeController::class, 'MyPhamBanChay']);


    Route::group([
        'prefix' => 'lichsu'
    ], function ($router) {
        Route::get('get/{id}', [LichSuController::class, 'getLichSu']);
        Route::get('search', [LichSuController::class, 'search']);
        Route::delete('delete/{id}', [LichSuController::class, 'delete']);
    });
});





