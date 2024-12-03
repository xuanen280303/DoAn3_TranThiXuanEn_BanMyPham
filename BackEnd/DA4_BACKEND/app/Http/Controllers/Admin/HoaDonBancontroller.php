<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\HoaDonBan;
use App\Models\ChiTietHoaDonBan;
use App\Models\KhachHang;
use App\Models\LichSu;
use App\Models\MyPham;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class HoaDonBancontroller extends Controller
{
    public function getHoaDonBan($id)
    {
        $db = HoaDonBan::find($id);
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị hóa đơn bán thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }

    public function getDetailByID($MaHDB)
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

    public function search(Request $request)
    {
        $search = $request->input('search');
        $status = $request->input('status');
        $page = $request->input('page');
        $totalPage = $request->input('pageSize');
        $query = HoaDonBan::query();
        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('MaHDB', 'like', '%' . $search . '%')
                    ->orWhere('MaKH', 'like', '%' . $search . '%');
                    
                });
        }
        if ($status) {
            $query->where('TrangThai', $status);
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

    public function index($total = null)
    {
        $db = HoaDonBan::paginate($total);
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị hóa đơn bán thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }

    public function delete($id)
    {
        // Tìm hóa đơn bán với MaHDB (mã hóa đơn bán)
        $db = HoaDonBan::where('MaHDB', $id)->first();
        
        if ($db) {
            // Tìm các chi tiết hóa đơn bán liên quan
            $cthdb = ChiTietHoaDonBan::where('MaHDB', $id)->get();
            
            // Hoàn trả số lượng mỹ phẩm trước khi hủy hóa đơn
            foreach ($cthdb as $ct) {
                $myPham = MyPham::find($ct->MaMP);
                if ($myPham) {
                    $myPham->SLTon += $ct->SLBan;  // Tăng số lượng mỹ phẩm tồn kho
                    $myPham->save();
                }
            }
    
            // Cập nhật trạng thái của hóa đơn thành "Đã hủy"
            $db->TrangThai = 'Đã hủy';  // Giả sử bạn có cột 'TrangThai' trong bảng hóa đơn bán
            $db->save();
    
            return response()->json([
                'status' => 200,
                'message' => "Hóa đơn bán đã được chuyển sang trạng thái 'Đã hủy'!"
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => "Hóa đơn bán không tồn tại!"
            ]);
        }
    }
    

    public function create(Request $request)
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
            $hdb->MaNV = $request->MaNV;
            $hdb->userId = $request->userId;
            $hdb->TrangThai = "Chờ xác nhận";
            $hdb->TongTien = $request->TongTienHDB;
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
                $cthdb->TongTien = $request->TongTien[$key];
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

    public function updateAll(Request $request, $id)
    {
        DB::beginTransaction();
        try {
            $hdb = HoaDonBan::find($id);
            if (!$hdb) {
                throw new \Exception("Hóa đơn bán không tồn tại.");
            }

            $kh = KhachHang::find($hdb->MaKH);
            $kh->HoTenKH = $request->HoTenKH;
            $kh->SDTKH = $request->SDTKH;
            $kh->DiaChiKH = $request->DiaChiKH;
            $kh->save();    
            
             // Cập nhật hóa đơn bán
            $hdb->TongTien = $request->TongTienHDB;
            $hdb->TrangThai = $request->TrangThai;
            $hdb->save();

            $MaHDB = $hdb->MaHDB;
            
            $ls = new LichSu();
            $ls->MaHDB = $MaHDB;
            $ls->TrangThai = $request->TrangThai;
            $ls->NgayTao = now();
            $ls->save();

            foreach ($request->MaMP as $key => $maMP) {
                $myPham = MyPham::find($maMP);

                if (!$myPham) {
                    throw new \Exception("Mỹ phẩm với mã $maMP không tồn tại.");
                }
    
                // Cập nhật số lượng tồn kho: Trả lại số lượng cũ trước khi cập nhật mới
                $cthdb = ChiTietHoaDonBan::where('MaHDB', $hdb->MaHDB)->where('MaMP', $maMP)->first();
                if ($cthdb) {
                    $myPham->SLTon += $cthdb->SLBan; // Hoàn lại số lượng cũ
                    $myPham->save();
                }
    
                // Cập nhật chi tiết hóa đơn bán mới
                $cthdb = new ChiTietHoaDonBan();
                $cthdb->MaHDB = $hdb->MaHDB;
                $cthdb->MaMP = $maMP;
                $cthdb->TongTien = $request->TongTien[$key];
                $cthdb->SLBan = $request->SLTon[$key];
                $cthdb->save();
    
                // Trừ số lượng mới
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

    public function update(Request $request)
    {
        DB::beginTransaction();
        try {
            $hdb = HoaDonBan::find($request->id);
            if (!$hdb) {
                throw new \Exception("Hóa đơn bán không tồn tại.");
            }
            
            // Cập nhật hóa đơn bán
            $hdb->MaNV = $request->MaNV;
            $hdb->MaKH = $request->MaKH;
            $tt = $hdb->TrangThai;
            $hdb->TrangThai = $request->TrangThai;
            $hdb->TrangThaiThanhToan = $request->TrangThaiThanhToan;
            $hdb->save();
            
            $MaHDB = $hdb->MaHDB;
            if($request->TrangThai != $tt){
                $ls = new LichSu();
                $ls->MaHDB = $MaHDB;
                $ls->TrangThai = $request->TrangThai;
                $ls->NgayTao = now();
                $ls->save();
            }
            DB::commit();

            return response()->json([
                'hoaDonBan' => $hdb,
                'status' => 200,
                'message' => 'Cập nhật hóa đơn bán thành công!'
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Lỗi trong quá trình cập nhật hóa đơn bán: ' . $e->getMessage(),
                'status' => 500
            ]);
        }
    }

    public function updateStatus(Request $request)
    {
        DB::beginTransaction();
        try {
            $hdb = HoaDonBan::find($request->MaHDB);
            if (!$hdb) {
                throw new \Exception("Hóa đơn bán không tồn tại.");
            }
            if($request->TrangThai == $hdb->TrangThai){
                throw new \Exception("Trạng thái hóa đơn bán không thay đổi.");
            }
            $tt = $hdb->TrangThai;
            $hdb->TrangThai = $request->TrangThai;
            $hdb->save();
            $ls = new LichSu();
            $ls->MaHDB = $hdb->MaHDB;
            $ls->TrangThai = $request->TrangThai;
            $ls->NgayTao = now();
            $ls->save();
            
            DB::commit();

            return response()->json([
                'hoaDonBan' => $hdb,
                'status' => 200,
                'message' => 'Cập nhật hóa đơn bán thành công!'
            ]);
        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json([
                'message' => 'Lỗi trong quá trình cập nhật hóa đơn bán: ' . $e->getMessage(),
                'status' => 500
            ]);
        }
    }   
}
