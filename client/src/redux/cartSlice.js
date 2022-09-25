import { createSlice, createAsyncThunk, combineReducers } from "@reduxjs/toolkit";

const cartInitialState = {
	products: [],
	total: 0,
	quantity: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: cartInitialState,
	reducers: {
		addProductToCart: (state, action) => {
			state.quantity += 1;
			state.products.push(action.payload);
			state.total += action.payload.total;
		},
		emptyCart: (state, action) => {
			state = cartInitialState;
		},
	},
	extraReducers: {},
});

export const { addProductToCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
