<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::group([
    'prefix' => 'user'
], function () {
    require base_path('routes/user.php'); 
});

// Định nghĩa route với tiền tố /admin cho các route trong admin.php
Route::group([
    'prefix' => 'admin'
], function () {
    require base_path('routes/admin.php'); 
});