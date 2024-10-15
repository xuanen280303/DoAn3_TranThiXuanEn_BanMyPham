<?php
namespace App\Helper;
class Cart
{
    private $items = [];
    private $total_quantity = 0;
    private $total_price = 0;

    public function __construct()
    {
        $this->items = session('cart') ? session('cart') : [];
    }

    //Hiển thị list mỹ phẩm trong cart
    public function list(){
        return $this->items;
    }

    //Thêm mới sản phẩm vào giỏ hàng
    public function add($mp, $quantity = 1){
        $item = [
            'MaMP'=> $mp->MaMP,
            'TenMP'=> $mp->TenMP,
            'GiaBan'=>$mp->GiaBan,
            'AnhDaiDien'=>$mp->AnhDaiDien,
            'SLTon'=>$quantity
        ];
        if (array_key_exists($mp->MaMP, $this->items)) {
            $this->items[$mp->MaMP]['SLTon'] += $quantity;
        } else {
            $this->items[$mp->MaMP] = $item;
        }

        session(['cart' => $this->items]);
    }

    public function delete($MaMP){
        if (array_key_exists($MaMP, $this->items)){
            unset($this->items[$MaMP]);
            session(['cart' => $this->items]);
        }
    }

    public function deleteAll(){
        $this->items = [];
        session(['cart' => []]);
    }

    public function TinhTongTien(){
        $totalPrice = 0;
        foreach($this->items as $item){
            $totalPrice += $item['GiaBan'] * $item['SLTon'];
        }
        return $totalPrice;
    }
    public function TinhTongTien1(){
        $totalPrice = 0;
        foreach($this->items as $item){
            $totalPrice += $item['GiaBan'] * $item['SLTon'];
        }
        return $totalPrice;
    }

    public function SLGioHang(){
        $total = 0;
        foreach($this->items as $item){
            $total += $item['SLTon'];
        }
        return $total;
    }
}
?>