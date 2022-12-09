import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";
import { uiSlice } from "./ui-slice";
import { productsSlice } from "./products-slice";



const store = configureStore({
    reducer: { cart: cartSlice.reducer, ui: uiSlice.reducer, products: productsSlice.reducer },
  });
  

export default store;
