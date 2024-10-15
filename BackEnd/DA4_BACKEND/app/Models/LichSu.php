<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LichSu extends Model
{
    use HasFactory;

    protected $table = 'lichsu';
    public $timestamps = false;
    protected $primaryKey = 'MaLS';
}
