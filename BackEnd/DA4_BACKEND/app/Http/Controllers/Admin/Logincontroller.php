<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Login;
use Illuminate\Http\Request;

class Logincontroller extends Controller
{
    public function login()
    {
        $credentials = request(['name', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Đăng nhập không thành công'], 401);
        }
        return $this->respondWithToken($token);
    }   
}
