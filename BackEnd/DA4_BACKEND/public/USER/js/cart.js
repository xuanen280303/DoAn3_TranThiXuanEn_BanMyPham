function confirmDelete(maMP) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng không?")) {
        window.location.href = "/cart/delete/" + maMP; // Thay đổi URL theo đường dẫn phù hợp của bạn
    }
}



