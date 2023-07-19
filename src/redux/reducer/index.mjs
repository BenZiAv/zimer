import { combineReducers } from "redux";
import userDataSlice from "./userData.mjs";
import CartSlice from "./userCart.mjs";
import ProductSlice from "./product.mjs";

const AllReducers = combineReducers({
  userdata: userDataSlice,
  usercart: CartSlice,
  productinfo: ProductSlice,
});

export default AllReducers;