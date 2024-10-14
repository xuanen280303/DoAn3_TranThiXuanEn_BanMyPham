import { createBrowserRouter } from "react-router-dom";

import Index from "./pages/index";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Category from "./pages/category";
import Productdetail from "./pages/productdetail";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Support from "./pages/support";
import Systemshop from "./pages/systemshop";
import React from "react";
import InHDB from "./pages/inhdb";
import ThanhtoanQR from "./pages/thanhtoanqr";
import AppLayout from "./shared/AppLayout";
import ScrollToTop from "./shared/ScrollToTop";
export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
       <ScrollToTop/>
        <AppLayout />
      </>
    ),
    children: [

      {
        path: "/",
        element: <Index />,
      },
      
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/productdetail/:id",
        element: <Productdetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },   { 
    path: "/inhdb/:id",
    element: <InHDB />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },     {
    path: "/checkout",
    element: <Checkout />,
  },      {
    path: "/thanhtoanqr/:id",
    element: <ThanhtoanQR />,
  }, {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/systemshop",
    element: <Systemshop />,
  },
]);
