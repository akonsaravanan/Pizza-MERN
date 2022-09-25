import { createSlice, createAsyncThunk, combineReducers } from "@reduxjs/toolkit";
import { createCart, getInCartItems } from "./api";

export const addCart = createAsyncThunk(
	"carts/create",
	async ({ postProduct, toast }, { rejectWithValue }) => {
		try {
			console.log(postProduct);
			const response = await createCart(postProduct);
			toast.success("Added to Cart Successfully");
			return response.data;
		} catch (error) {
			console.log(error);
			toast.error("Cart addition Failed");
			return rejectWithValue(error.response.data);
		}
	}
);

export const inCart = createAsyncThunk("carts/incart", async (toast, { rejectWithValue }) => {
	try {
		const response = await getInCartItems();
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.log(error);
		toast.error("Cart Fetching Failed");
		return rejectWithValue(error.response.message);
	}
});

const cartInitialState = {
	products: [],
	total: 0,
	quantity: 0,
	error: "",
	loading: false,
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
	extraReducers: {
		[addCart.pending]: (state, action) => {
			state.loading = true;
		},
		[addCart.fulfilled]: (state, action) => {
			state.loading = false;
		},
		[addCart.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
		[inCart.pending]: (state, action) => {
			state.loading = false;
		},
		[inCart.fulfilled]: (state, action) => {
			state.loading = false;
			state.quantity = state.products.length;
			state.products = action.payload;
			// state.total += action.payload.total;
		},
		[inCart.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { addProductToCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
