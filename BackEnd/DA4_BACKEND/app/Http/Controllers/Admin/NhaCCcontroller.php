<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\NhaCC;
use Illuminate\Http\Request;

class NhaCCcontroller extends Controller
{
    public function index()
    {
        $db = NhaCC::all();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị thông tin nhà cung cấp thành công!"
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
            $nhacc = NhaCC::where('MaNCC',$id)->first();
            $message = "Sửa thông tin nhà cung cấp thành công!";
        }else{
            $nhacc = new NhaCC();
            $message = "Thêm thông tin nhà cung cấp thành công!";
        }    
        $nhacc->HoTenNCC = $res->HoTenNCC;
        $nhacc->SDTNCC = $res->SDTNCC;
        $nhacc->DiaChiNCC = $res->DiaChiNCC;
        if($nhacc->save()){
            return response()->json([
                'data'=>$nhacc,
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
        $db = NhaCC::where('MaNCC',$id)->first();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Sửa thông tin nhà cung cấp thành công!"
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
        $db = NhaCC::where('MaNCC',$id)->first()->delete();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Xóa thông tin nhà cung cấp thành công!"
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
