<?php

namespace App\Http\Controllers\User;
use App\Http\Controllers\Controller;

use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    public function signup(Request $res)
    {
        if (Users::where('name', $res->name)->exists()) {
            return $this->errors('Tên tài khoản đã tồn tại!');
        }
        if (Users::where('email', $res->email)->exists()) {
            return $this->errors('Email đã tồn tại!');
        }
        $tk = new Users();
        $tk->name = $res->name;
        $tk->email = $res->email;
        $tk->role = 1;
        $tk->password = Hash::make($res->password);
        $db = $tk->save();
        return response()->json([
            'data' => $db,
            'status_code' => 200,
            'message' => 'Đăng ký tài khoản thành công!'
        ]);
    }
}
