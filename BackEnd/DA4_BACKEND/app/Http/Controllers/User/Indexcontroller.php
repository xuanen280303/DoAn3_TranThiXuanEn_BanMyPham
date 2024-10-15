<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use App\Models\LoaiMyPham;
use App\Models\MyPham;
use Illuminate\Http\Request;

class Indexcontroller extends Controller
{
    public function LoaiMyPhamindex()
    {
        $db = LoaiMyPham::all();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị danh mục thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }  
    }

    public function MyPhamindex()
    {
        $db = MyPham::paginate(80);
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị danh sách mỹ phẩm thành công!"
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
