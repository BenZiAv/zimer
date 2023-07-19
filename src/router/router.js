import { Routes, Route } from "react-router-dom";
import MainPage from "../home page/homepage";
import Login from "./../login page/login";
import SignUp from "../singup page/signup";

import CheckOut from "../checkoutcart/checkoutcart";
import EndOrder from "../end order page/orderendpage";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/mainshopping" element={<MainShoppingPage />} />\
        <Route path="/editproduct" element={<EditProduct />} />
        <Route path="/productdisplay" element={<ProductDisplay />} />
        <Route path="/startshopping" element={<StartShopping />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/endorder" element={<EndOrder />} />
      </Routes>
    </div>
  );
}