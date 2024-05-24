import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import auhtreducers from "./AuthSlice";

export const Store = configureStore({
  reducer: {
    cart: cartSlice,
    authUser: auhtreducers,
  },
  devTools: true,
});
