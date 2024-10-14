import { message } from "antd";

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = async (mypham, quantity) => {
  try {
    const cart = getCartFromLocalStorage();
    const product = {
      MaMP: mypham.MaMP,
      TenMP: mypham.TenMP,
      AnhDaiDien: mypham.AnhDaiDien,
      SoLuong: quantity,
      GiaMoi: mypham.GiaBan,
      GiaCu: mypham.GiaGoc,
    };
    const existingProduct = cart.findIndex((item) => item.MaMP === mypham.MaMP);

    if (existingProduct !== -1) {
      cart[existingProduct].SoLuong += quantity;
    } else {
      cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    message.success("Mỹ phẩm đã được thêm vào giỏ hàng!");
  } catch (error) {
    message.error("Có lỗi xảy ra khi thêm mỹ phẩm vào giỏ hàng!");
  }
};

export const deleteItem = async (MaMP) => {
  try {
    let cart = getCartFromLocalStorage();
    cart = cart.filter((item) => item.MaMP !== MaMP);
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    message.error("Có lỗi xảy ra khi xóa mỹ phẩm khỏi giỏ hàng!");
  }
};

export const updateCart = async (value, MaMP) => {
  let cart = getCartFromLocalStorage();
  const updatedCart = cart.map((item) => {
    if (item.MaMP === MaMP) {
      return { ...item, SoLuong: value };
    }
    return item;
  });
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

export const deleteAll = async () => {
  try {
    localStorage.setItem("cart", JSON.stringify([]));
  } catch (error) {
    message.error("Có lỗi xảy ra khi xóa hết mỹ phẩm trong giỏ hàng!");
  }
};

export const getTongTien = () => {
  const cart = getCartFromLocalStorage();
  return cart.reduce(
    (total, product) => total + product.SoLuong * product.GiaMoi, 0);
};

export const getTongSoLuong = () => {
  const cart = getCartFromLocalStorage();
  return cart.reduce((total, product) => total + product.SoLuong, 0);
  // return cart.length;
};
