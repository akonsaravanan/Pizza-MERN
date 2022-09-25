import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "../redux/cartSlice";
import productSliceReducer from "../redux/productSlice";
import authSliceReducer from "../redux/authSlice";

const Store = configureStore({
	reducer: {
		cart: CartSliceReducer,
		allProducts: productSliceReducer,
		auth: authSliceReducer,
	},
});

export default Store;
