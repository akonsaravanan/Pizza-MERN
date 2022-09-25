import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPizzas } from "./api";

export const getAllPizzas = createAsyncThunk("/products", async (_, { rejectWithValue }) => {
	try {
		const response = await getPizzas();
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});
const overAllProductsInitialState = {};

const productSlice = createSlice({
	name: "AllProducts",
	initialState: {
		error: "",
		loading: false,
		allProducts: [],
	},
	reducers: {},
	extraReducers: {
		[getAllPizzas.pending]: (state) => {
			state.loading = true;
		},
		[getAllPizzas.fulfilled]: (state, action) => {
			return {
				...state,
				loading: false,
				allProducts: [...action.payload],
			};
		},

		[getAllPizzas.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload;
			console.log(state.error);
		},
	},
});

export default productSlice.reducer;
