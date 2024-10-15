<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\MyPham;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MyPhamcontroller extends Controller
{
    public function getMyPham($id)
    {
        $db = MyPham::find($id);
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị mỹ phẩm thành công!"
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
        $db = MyPham::paginate($total);
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Hiển thị mỹ phẩm thành công!"
            ]);
        }else{
            return response()->json([
                'data'=>null,
                'status'=> 404,
                'message'=>"Lỗi!"
            ]);
        }
    }
    // asc desc
    public function search(Request $request)
    {
        $search = $request->input('search');
        $page = $request->input('page');
        $totalPage = $request->input('pageSize');
        $query = MyPham::query();
        if ($search) {
            $query->where(function ($query) use ($search) {
                $query->where('MaMP', 'like', '%' . $search . '%')
                    ->orwhere('SLTon', 'like', '%' . $search . '%')
                    ->orWhere('TenMP', 'like', '%' . $search . '%');
            });
        }
        $query->groupBy('MaMP')
                ->orderBy('MaMP', 'asc');
        $db = $query->paginate($totalPage ?? ($page ?? 1));
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

    public function save(Request $request)
    {
        $file_name = null;
        $id = $request->id ? $request->id : null;
        $file_name = $this->uploadFile($request, 'AnhDaiDien');
        $myPham = $id ? MyPham::find($id) : new MyPham();
        $myPham->TenMP = $request->TenMP;
        $myPham->MaLoaiMP = $request->MaLoaiMP;
        $myPham->GiaBan = $request->GiaBan;
        $myPham->GiaGoc = $request->GiaGoc;
        $myPham->XuatXu = $request->XuatXu;
        $myPham->KhoiLuong = $request->KhoiLuong;
        $myPham->NgaySX = $request->NgaySX;
        $myPham->HSD = $request->HSD;
        $myPham->SLTon = $request->SLTon;
        $myPham->MoTa = $request->MoTa;
        $myPham->GhiChu = $request->GhiChu;     
        if ($file_name !== null) {
            $myPham->AnhDaiDien = $file_name;
        }
        if ($myPham->save()) {
            return response()->json([
                'data'=>$myPham,
                'status'=> 200,
                'message'=>"Cập nhật thông tin mỹ phẩm thành công!"
            ]);
        }
        return response()->json([
            'data'=>null,
            'status'=> 404,
            'message'=>"Lỗi!"
        ]);
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

    public function delete($id)
    {
        $db = MyPham::where('MaMP',$id)->first()->delete();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Xóa thông tin mỹ phẩm thành công!"
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
        $db = MyPham::whereIn('MaMP', $ids)->delete();
        if($db){
            return response()->json([
                'data'=>$db,
                'status'=> 200,
                'message'=>"Xóa thông tin các mỹ phẩm thành công!"
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
