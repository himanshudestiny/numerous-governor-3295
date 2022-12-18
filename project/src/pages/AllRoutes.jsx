import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Social from "./Social";
import ProductDetails from "../components/ProductDetails";
import Products from "../components/Products";
import ProductList from "../components/ProductList";
<<<<<<< HEAD
import Payment from "./../components/Payment/Payment";
import Delivery from "./../components/Delivery/Delivery";
import Confirm from "./../components/Confirm/Confirm";
=======
import Payment from './../components/Payment/Payment';
import Delivery from './../components/Delivery/Delivery';
import Confirm from './../components/Confirm/Confirm';
import Wishlist from "../components/Wishlist";
>>>>>>> 7e5bfa1954618c68dc42cbedcb0c7d05116d9960

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Social />} />
        <Route path="/register" element={<Social />} />
<<<<<<< HEAD
        <Route path="/menproduct" element={<Products category="Mens" />} />
        <Route path="/womenproduct" element={<Products category="Womens" />} />
        <Route path="/kidproduct" element={<Products category="Kids" />} />
=======
        <Route path='/menproduct' element={<Products category="Mens" />}/>
        <Route path="/womenproduct" element={<Products category="Womens"/>}/>
        <Route path="/kidproduct" element={<Products category="Kids"/>}/>
        <Route path="/wishlist"  element={<Wishlist/>}/>
>>>>>>> 7e5bfa1954618c68dc42cbedcb0c7d05116d9960
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
