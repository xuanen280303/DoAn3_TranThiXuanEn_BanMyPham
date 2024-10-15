<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\LichSu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LichSuController extends Controller
{
    public function getLichSu($id)
    {
        $db = LichSu::find($id);
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị lịch sử thành công!"
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
        $query = LichSu::query();
        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('MaHDB',  $search );
            });
        }
        $db = $query->paginate($totalPage ?? ($page ?? 1));
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị danh sách lịch sử thành công!"
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
        $db = LichSu::where('MaLS', $id)->first();
        if ($db) {
            
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
    

}
