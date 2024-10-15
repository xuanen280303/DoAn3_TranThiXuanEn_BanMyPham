<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LoaiMyPham extends Model
{
    use HasFactory;
    protected $table = 'loaimypham';
    public $timestamps = false;
    protected $primaryKey = 'MaLoaiMP';
}
