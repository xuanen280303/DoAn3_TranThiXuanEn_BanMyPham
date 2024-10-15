<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\LoaiMyPham;
use App\Models\MyPham;
use Illuminate\Http\Request;

class LoaiMyPhamcontroller extends Controller
{
    public function getLoaiMyPham($id)
    {
        $db = LoaiMyPham::find($id);
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị loại mỹ phẩm thành công!"
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
        $db = LoaiMyPham::paginate($total);
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị loại mỹ phẩm thành công!"
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
        $query = LoaiMyPham::query();
        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('MaLoaiMP', 'like', '%' . $search . '%')
                    ->orWhere('TenLoaiMP', 'like', '%' . $search . '%');
            });
        }
        $db = $query->paginate($totalPage ?? ($page ?? 1));
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị danh sách loại mỹ phẩm thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }

    public function uploadFile($request, $fieldName, $path = null)
    {
        if ($request->hasFile($fieldName)) {
            $file = $request->file($fieldName);
            $file_name = $file->getClientOriginalName();
            $destinationPath = 'D:\Đồ án 3\uploads' . DIRECTORY_SEPARATOR . $path;
            if (!file_exists($destinationPath)) {
                mkdir($destinationPath, 0755, true);
            }
            $file->move($destinationPath, $file_name);
            return $file_name;
        }
        return null;
    }

    public function save(Request $res)
    {
        $file_name = null;
        $id = $res->id ? $res->id : null;
        $file_name = $this->uploadFile($res, 'AnhDaiDien');
        $lmp = $id ? LoaiMyPham::find($id) : new LoaiMyPham();
        $lmp->TenLoaiMP = $res->TenLoaiMP;
        $lmp->AnhDaiDien = $res->AnhDaiDien;
        $lmp->MoTa = $res->MoTa;
        if ($file_name !== null) {
            $lmp->AnhDaiDien = $file_name;
        }
        if ($lmp->save()) {
            return response()->json([
                'data'=>$lmp,
                'status'=> 200,
                'message'=>"Cập nhật thông tin loại mỹ phẩm thành công!"
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
        $db = LoaiMyPham::where('MaLoaiMP',$id)->first()->delete();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Xóa thông tin loại mỹ phẩm thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }

    public function deletes(Request $request)
    {
        $ids = $request->input('ids');
        $db = LoaiMyPham::whereIn('MaLoaiMP', $ids)->delete();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Xóa thông tin các loại mỹ phẩm thành công!"
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
