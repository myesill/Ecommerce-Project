import { configureStore } from "@reduxjs/toolkit";
import CategorySllice from "./CategorySllice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: {
    categories: CategorySllice,
    products: productSlice,
    carts: cartSlice,
  },
});
