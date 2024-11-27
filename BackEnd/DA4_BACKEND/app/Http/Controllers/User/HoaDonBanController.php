<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Helper\Cart;
use App\Models\MyPham;
use App\Models\KhachHang;
use App\Models\LichSu;
use App\Models\HoaDonBan;
use App\Models\ChiTietHoaDonBan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class HoaDonBanController extends Controller
{ 
    public function xuathdb(Request $request)
    {
            DB::beginTransaction();
            try {
                $kh = new KhachHang();
                $kh->HoTenKH = $request->HoTenKH;
                $kh->SDTKH = $request->SDTKH;
                $kh->DiaChiKH = $request->DiaChiKH;
                $kh->save();
    
                $hdb = new HoaDonBan();
                $hdb->MaKH = $kh->MaKH;
                $hdb->TrangThai = "Chờ xác nhận";
                $hdb->TongTien = $request->TongTien;
                $hdb->TrangThaiThanhToan = $request->TrangThaiThanhToan;
                $hdb->NgayTao = now();
                $hdb->save();
    
                $MaHDB = $hdb->MaHDB;
                
                $ls = new LichSu();
                $ls->MaHDB = $MaHDB;
                $ls->TrangThai = "Chờ xác nhận";
                $ls->NgayTao = now();
                $ls->save();
                
                foreach ($request->MaMP as $key => $maMP) {
                    $myPham = MyPham::find($maMP);
                    if (!$myPham) {
                        throw new \Exception("Mỹ phẩm với mã $maMP không tồn tại.");
                    }
                    // Kiểm tra số lượng tồn kho
                    if ($myPham->SLTon < $request->SLTon[$key]) {
                        throw new \Exception("Số lượng tồn kho không đủ cho sản phẩm $maMP.");
                    }
    
                    $cthdb = new ChiTietHoaDonBan();
                    $cthdb->MaHDB = $MaHDB;
                    $cthdb->MaMP = $maMP;
                    $cthdb->GiaTien = $myPham->GiaBan;
                    $cthdb->TongTien = $myPham->GiaBan * $request->SLTon[$key];
                    $cthdb->SLBan = $request->SLTon[$key];
                    $cthdb->save();
    
                    $myPham->SLTon -= $request->SLTon[$key];
                    $myPham->save();
                }
                DB::commit();
    
                return response()->json([
                    'hoaDonBan' => $hdb,
                    'status' => 200,
                    'message' => 'Tạo hóa đơn bán thành công!'
                ]);
            } catch (\Exception $e) {
                DB::rollBack();
                return response()->json([
                    'message' => 'Lỗi trong quá trình tạo hóa đơn bán: ' . $e->getMessage(),
                    'status' => 500
                ]);
            }
    
    }
    public function search(Request $request)
    {
        $search = $request->input('search');
        $userId = $request->input('userId');
        $status = $request->input('status');
        $page = $request->input('page');
        $totalPage = $request->input('pageSize');
        $query = HoaDonBan::query();
        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('MaHDB', 'like', '%' . $search . '%');                    
                });
        }
        if ($status) {
            $query->where('TrangThai', $status);
        }
        if ($userId) {
            $query->where('userId', $userId);
        }
        $db = $query->paginate($totalPage ?? ($page ?? 1));
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị danh sách hóa đơn bán thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }
    public function getThongTinHoaDon($MaHDB)
    {
        try {
            $hdb = HoaDonBan::where('MaHDB', $MaHDB)->first();
            if (!$hdb) {
                return response()->json([
                    'message' => 'Hóa đơn bán không tồn tại',
                    'status' => 404
                ]);
            }
            $kh = KhachHang::find($hdb->MaKH);
            if (!$kh) {
                return response()->json([
                    'message' => 'Khách hàng không tồn tại',
                    'status' => 404
                ]);
            }

            $cthdb = ChiTietHoaDonBan::join('MyPham', 'MyPham.MaMP', '=', 'ChiTietHoaDonBan.MaMP')
                ->select('ChiTietHoaDonBan.*', 'MyPham.TenMP', 'MyPham.GiaBan', 'MyPham.SLTon')
                ->where('ChiTietHoaDonBan.MaHDB', $MaHDB)
                ->get();

            return response()->json([
                'hoaDonBan' => $hdb,
                'khachhang' => $kh,
                'chitiethdb' => $cthdb,
                'status' => 200,
                'message' => 'Thông tin hoá đơn'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Lỗi trong quá trình lấy thông tin hóa đơn: ' . $e->getMessage(),
                'status' => 500
            ]);
        }
    }
}
