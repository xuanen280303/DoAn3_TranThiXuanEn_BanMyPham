<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\NhanVien;
use Illuminate\Http\Request;

class NhanViencontroller extends Controller
{
    public function index()
    {
        $db = NhanVien::all();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị thông tin nhân viên thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }

    public function save(Request $res, $id=null)
    {
        if($id){
            $nv = NhanVien::where('MaNV',$id)->first();
            $message = "Sửa thông tin nhân viên thành công!";
        }else{
            $nv = new NhanVien();
            $message = "Thêm thông tin nhân viên thành công!";
        }    
        $nv->HoTenNV = $res->HoTenNV;
        $nv->ChucVu = $res->ChucVu;
        $nv->Luong = $res->Luong;
        $nv->CaLam = $res->CaLam;
        $nv->SDTNV = $res->SDTNV;
        $nv->DiaChiNV = $res->DiaChiNV;
        if($nv->save()){
            return response()->json([
                'data'=>$nv,
                'status'=> 200,
                'message'=>$message
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }

    public function edit($id)
    {
        $db = NhanVien::where('MaNV',$id)->first();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Sửa thông tin nhân viên thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }  
    }

    public function destroy($id)
    {
        $db = NhanVien::where('MaNV',$id)->first()->delete();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Xóa thông tin nhân viên thành công!"
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
