cartbuttons = document.querySelectorAll(".xephang-number");
imgs = document.querySelectorAll(".product-sanpham>img");
dess = document.querySelectorAll(".sanpham-content p");
newprice = document.querySelectorAll(".sanpham-giagoc p");
oldprice = document.querySelectorAll(".sanpham-price-old p");

// Tạo mảng mylist chứa các thông tin của mỹ phẩm
let da = localStorage.getItem("mylist");
let mylist = da ? JSON.parse(da) : [];
let tam;

for (let i = 0; i < cartbuttons.length; i++) {
    cartbuttons[i].addEventListener("click", () => {
        alert("Đã thêm thành công mỹ phẩm vào giỏ hàng!");
        // Kiểm tra xem sản phẩm đã tồn tại trong mylist hay không dựa trên trường "des"
        const productName = dess[i].innerHTML;
        const existingProductIndex = mylist.findIndex(product => product.des === productName);
        if (existingProductIndex !== -1) {
            // Nếu sản phẩm đã tồn tại, cộng thêm số lượng
            mylist[existingProductIndex].quantity = (mylist[existingProductIndex].quantity || 1) + 1;
        } else {
            // Nếu sản phẩm chưa tồn tại, thêm mới vào mylist
            tam = {
                img: imgs[i].src,
                des: productName,
                newpr: newprice[i].innerHTML,
                oldpri: oldprice[i].innerHTML,
                quantity: 1
            };
            tam.na = "innisfree";
            mylist.push(tam);
        }
        // Lưu mảng 'mylist' vào localStorage
        localStorage.setItem("mylist", JSON.stringify(mylist));
    });
}
