<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use App\Models\MyPham;
use Illuminate\Http\Request;

class Detailcontroller extends Controller
{
    public function hienthichitiet($id)
    {
        $mp = MyPham::find($id);
        if($mp){
            return response()->json([
                'data'=>$mp,
                'status'=> 200,
                'message'=>"Hiển thị chi tiết mỹ phẩm thành công!"
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
