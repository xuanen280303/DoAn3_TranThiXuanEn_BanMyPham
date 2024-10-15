<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;

use App\Models\MyPham;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ThongKeController extends Controller
{
    public function MyPhamBanChay()
    {
        $topCosmetics = MyPham::select('MyPham.*', DB::raw('SUM(ChiTietHoaDonBan.SLBan) AS SLMyPhamDaBan'))
            ->leftJoin('ChiTietHoaDonBan', 'MyPham.MaMP', '=', 'ChiTietHoaDonBan.MaMP')
            ->groupBy('MyPham.MaMP')
            ->orderBy('SLMyPhamDaBan', 'DESC')
            ->limit(5)
            ->get();

        if($topCosmetics){
            return response()->json([
                'data'=>$topCosmetics,
                'status'=> 200,
                'message'=>"ok!"
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
