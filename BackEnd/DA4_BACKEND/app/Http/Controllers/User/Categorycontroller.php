<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use App\Models\LoaiMyPham;
use App\Models\MyPham;
use Illuminate\Support\Facades\Session;

class Categorycontroller extends Controller
{
    public function locgia(Request $request, $id)
    {
        $giaTu = $request->input('giatu');
        $giaDen = $request->input('giaden');
        $search = $request->input('timkiem');
        $query = MyPham::where('MaLoaiMP', $id);
        if ($request->filled('timkiem')) {
            $query->where('TenMP', 'like', '%' . $search . '%');
        }
        if ($request->filled('giatu')) {
            $query->where('GiaBan', '>=', $request->input('giatu'));
        }
        if ($request->filled('giaden')) {
            $query->where('GiaBan', '<=', $request->input('giaden'));
        }    

        $ketqua = $query->paginate(12);
        if (!$ketqua->isEmpty()){
            return response()->json([
                'data'=>$ketqua,
                'status'=> 200,
                'message'=>"Tìm kiếm thông tin mỹ phẩm thành công!"
            ]);
        }
        return response()->json([
            'data'=>null,
            'status'=> 404,
            'message'=>"Không tìm kiếm được thông tin mỹ phẩm!"
        ]);
    }
}
