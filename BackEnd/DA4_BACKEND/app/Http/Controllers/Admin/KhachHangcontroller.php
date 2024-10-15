<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\KhachHang;
use Illuminate\Http\Request;

class KhachHangcontroller extends Controller
{
    public function getKhachHang($id)
    {
        $db = KhachHang::find($id);
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị khách hàng thành công!"
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
        $db = KhachHang::paginate($total);
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị khách hàng thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }

    public function search(Request $request)
    {
        $search = $request->input('search');
        $page = $request->input('page');
        $totalPage = $request->input('pageSize');
        $query = KhachHang::query();
        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('MaKH', 'like', '%' . $search . '%')
                    ->orWhere('TenKH', 'like', '%' . $search . '%');
            });
        }
        $db = $query->paginate($totalPage ?? ($page ?? 1));
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị danh sách khách hàng thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }
   
    public function save(Request $res)
    {
       
        $id = $res->id ? $res->id : null;
        $kh = $id ? KhachHang::find($id) : new KhachHang();
        $kh->HoTenKH = $res->HoTenKH;
        $kh->SDTKH = $res->SDTKH;
        $kh->DiaChiKH = $res->DiaChiKH;
        if ($kh->save()) {
            return response()->json([
                'data'=>$kh,
                'status'=> 200,
                'message'=>"Cập nhật thông tin khách hàng thành công!"
            ]);
        }
        return response()->json([
            'data'=>null,
            'status'=> 404,
            'message'=>"Lỗi!"
        ]);
    }

    public function delete($id)
    {
        $db = HoaDonBan::where('MaHDB', $id)->first();
        if ($db) {
            $cthdb = ChiTietHoaDonBan::where('MaHDB', $id)->get();
            
            // Hoàn trả số lượng mỹ phẩm trước khi xóa
            foreach ($cthdb as $ct) {
                $myPham = MyPham::find($ct->MaMP);
                if ($myPham) {
                    $myPham->SLTon += $ct->SLBan;
                    $myPham->save();
                }
            }
            
            // Xóa chi tiết hóa đơn bán
            ChiTietHoaDonBan::where('MaHDB', $id)->delete();
            
            // Xóa hóa đơn bán
            $db->delete();
            
            return response()->json([
                'status' => 200,
                'message' => "Xóa hóa đơn bán thành công!"
            ]);
        } else {
            return response()->json([
                'status' => 404,
                'message' => "Hóa đơn bán không tồn tại!"
            ]);
        }
    }
    

    public function deletes(Request $request)
    {
        $ids = $request->input('ids');
        $db = KhachHang::whereIn('MaKH', $ids)->delete();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Xóa thông tin các khách hàng thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }
}
