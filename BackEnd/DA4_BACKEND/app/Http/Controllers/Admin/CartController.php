<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Helper\Cart;
use App\Models\MyPham;

class CartController extends Controller
{
    public function index(Cart $cart){
        
        return view("User.cart",['cart'=>$cart]);
    } 

    public function addToCart(Request $request, Cart $cart){
        if(session('tk')){
        //Tìm in4 mỹ phẩm có MaMP đc điền vào input và gắn vào $mp
        $mp = MyPham::find($request->MaMP);
        $quantity = $request->quantity; //gắn sl từ input vào trong biến quantity
        $cart->add($mp,$quantity); //gọi class $cart chọc đến hàm add và truyền $mp và $quantity vào hàm add
        return redirect()->route('cart.index');
        }
        else{
            return back()->withErrors(['cartError' => 'Vui lòng đăng nhập để thêm giỏ hàng']);
        }
    }

    public function deleteItem($MaMP, Cart $cart) {
        $cart->delete($MaMP);
        return redirect()->back();       
    }

    public function deleteAllItem(Cart $cart) {
        $cart->deleteAll();
        return redirect()->back();    
    }
}
