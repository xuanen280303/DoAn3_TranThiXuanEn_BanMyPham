<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

    class TaiKhoan extends Model
    {
        use HasFactory;
        protected $table = 'taikhoan';
        public $timestamps = false;
        protected $primaryKey = 'MaTaiKhoan';
    }
