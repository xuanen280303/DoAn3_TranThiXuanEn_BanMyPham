<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;


use Illuminate\Http\Request;
use App\Helper\Cart;
use App\Models\MyPham;

class CartController extends Controller
{

    public function getCart($id)
    {
        $products = MyPham::where('cart_id', $id)->select(
            'MaMP',
            'TenMP',
            'SLTon as quantity',
            'AnhDaiDien'
        )->get();

        if($products){
            return response()->json([
                'data'=>$products,
                'status'=> 200,
                'message'=>"Thêm mỹ phẩm vào giỏ hàng thành công!"
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
