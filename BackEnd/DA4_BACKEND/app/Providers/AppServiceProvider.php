<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Helper\Cart;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Blade;
class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        
    }
    
    public function boot(): void
    {
        view()->composer("*", function ($view) {
            $view->with([
                'cart' => new Cart()
            ]);
        });
    }
}
