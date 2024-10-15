<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyPham extends Model
{
    use HasFactory;
    protected $table = 'mypham';
    public $timestamps = false;
    protected $primaryKey = 'MaMP';
}
