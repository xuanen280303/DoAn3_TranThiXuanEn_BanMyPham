cartbuttons=document.getElementsByClassName("nut2")[0]
imgs=document.querySelector(".hinhanh>img")
dess=document.querySelector(".tittle1>p")
newprice=document.querySelector(".gia1>p")
oldprice=document.querySelector(".giathitruong>p")
console.log(cartbuttons)
console.log(imgs)
console.log(dess)
console.log(newprice)
console.log(oldprice)

let da = localStorage.getItem("mylist");
const mylist = da ? JSON.parse(da) : [];
var tam;

cartbuttons.addEventListener("click",()=>{

    alert("Đã thêm thành công mỹ phẩm vào giỏ hàng!")
    tam = {img:imgs.src,na:"innisfree",des:dess.innerHTML,newpr:newprice.innerHTML,oldpri:oldprice.innerHTML}
    mylist.push(tam)
    // Lưu mảng 'mylist' vào localStorage
    localStorage.setItem("mylist",JSON.stringify(mylist))
})



    