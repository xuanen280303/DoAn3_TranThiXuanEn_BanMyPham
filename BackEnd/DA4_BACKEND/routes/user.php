<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\IndexController;
use App\Http\Controllers\User\CategoryController;
use App\Http\Controllers\User\DetailController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\UsersController;
use App\Http\Controllers\User\HoaDonBanController;


Route::group([
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', [AuthController::class, 'login']);
    Route::get('/profile', [AuthController::class, 'profile'])->name('auth.profile');
    Route::post('/logout', [AuthController::class, 'logout'])->name('auth.logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->name('auth.refresh');

});

Route::group([

    'middleware' => 'auth.jwt',

], function ($router) {
    // Route::get('/index/mypham', [IndexController::class, 'MyPhamindex'])->name('mypham.index');
});

// -----------------------------Đăng ký tài khoản User------------------------------
Route::post('/signup/user', [UsersController::class, 'signup'])->name('user/signup');

//------------------------------- Hiển thị danh mục--------------------------
Route::get('/index/loaimypham', [IndexController::class, 'LoaiMyPhamindex'])->name('loaimypham.index');

Route::post('/signup', [UsersController::class, 'signup']);

// -------------Hiển thị danh sách 70 mỹ phẩm---------------------------------------------
Route::get('/index/mypham', [IndexController::class, 'MyPhamindex'])->name('mypham.index');

//---------- Hiển thị mỹ phẩm theo danh mục và tích hợp tìm kiếm và lọc giá---------------------
Route::post('/category/locgia/{id}', [CategoryController::class, 'locgia'])->name('locgia.category');

// -----------------------------------Hiển thị ra chi tiết mỹ phẩm--------------------
Route::post('/detail/{id}', [Detailcontroller::class, 'hienthichitiet'])->name('hienthichitiet.detail');

//--------------------------Hiển thị mỹ phẩm trong giỏ hàng---------------------------------
Route::post('/cart/{id}', [Cartcontroller::class, 'getCart'])->name('getcart.cart');

//-----------------------------------In hóa đơn bán------------------------------------------
Route::post('/xuathdb', [HoaDonBancontroller::class, 'xuathdb'])->name('xuathdb');
Route::get('/getthongtinhoadon/{id?}', [HoaDonBancontroller::class, 'getThongTinHoaDon'])->name('getThongTinHoaDon');


