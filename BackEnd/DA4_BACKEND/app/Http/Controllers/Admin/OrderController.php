<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Helper\Cart;
use App\Models\MyPham;
use App\Models\KhachHang;
use App\Models\HoaDonBan;
use App\Models\ChiTietHoaDonBan;
use Illuminate\Support\Facades\Session;
class OrderController extends Controller
{ 
    public function index()
    {
        return view('User.order');      
    }
    public function xuathdb(Request $request)
    {
        $kh = new KhachHang();
        $kh->HoTenKH = $request->HoTenKH;
        $kh->SDTKH = $request->SDTKH;
        $kh->DiaChiKH = $request->DiaChiKH;
        $kh->save();
        $makh = $kh->MaKH;
        $hdb = new HoaDonBan();
        $hdb ->MaKH = $makh;
        $hdb->NgayTao = now();
        $hdb->TongTien = $request->TongTienHDB;
        $hdb->save();


        // Lấy MaHDB sau khi đã lưu vào cơ sở dữ liệu
        $MaHDB = $hdb->MaHDB;

        // Lưu thông tin chi tiết hóa đơn bán (ChiTietHoaDonBan)
        foreach ($request->MaMP as $key => $maMP) {
            $cthdb = new ChiTietHoaDonBan();
            $cthdb->MaHDB =  $MaHDB ;
            $cthdb->MaMP = $request->MaMP[$key];
            $cthdb->TongTien = $request->TongTien[$key];
            $cthdb->SLBan = $request->SLTon[$key];
            $cthdb->save();

            // Cập nhật số lượng tồn của MyPham
            $myPham = MyPham::find($maMP);
            $myPham ->SLTon -= $request->SLTon[$key];
            $myPham ->save();
        }

        Session::forget('cart');

        $kh = KhachHang::find($kh->MaKH);
        $hdb = HoaDonBan::where('MaHDB', $MaHDB)->first();
        $cthdb = ChiTietHoaDonBan::join('MyPham', 'MyPham.MaMP', '=', 'ChiTietHoaDonBan.MaMP')
        ->select('ChiTietHoaDonBan.*', 'MyPham.TenMP', 'MyPham.GiaBan', 'MyPham.SLTon')
        ->where('ChiTietHoaDonBan.MaHDB', $MaHDB)
        ->get();
        return view('User.inHDB', compact('kh', 'cthdb', 'hdb'));
    }
}
