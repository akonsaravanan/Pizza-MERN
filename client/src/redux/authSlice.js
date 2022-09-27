import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createAccount, loginAccount } from "./api";

export const login = createAsyncThunk(
	"auth/signin",
	async ({ loginDatas, toast, navigate }, { rejectWithValue }) => {
		try {
			console.log(loginDatas);
			const response = await loginAccount(loginDatas);
			toast.success("Logged in Successfully");
			navigate("/");
			console.log(response.data);
			return response.data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error.response.data);
		}
	}
);
export const register = createAsyncThunk(
	"auth/signup",
	async ({ registerDatas, toast, navigate }, { rejectWithValue }) => {
		try {
			const response = await createAccount(registerDatas);
			toast.success("Registered Successfully");
			navigate("/");
			return response.data;
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
		error: "",
		loading: false,
	},
	reducers: {
		setUserLogin: (state, action) => {
			state.user = action.payload;
		},
		setUserLogout: (state) => {
			state.user = null;
			localStorage.removeItem("userPizza-profile");
			window.location.reload();
		},
	},
	extraReducers: {
		[login.pending]: (state, action) => {
			state.loading = true;
		},
		[login.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			localStorage.setItem("userPizza-profile", JSON.stringify({ ...action.payload }));
		},
		[login.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
		[register.pending]: (state, action) => {
			state.loading = true;
		},
		[register.fulfilled]: (state, action) => {
			state.loading = false;
			state.user = action.payload;
			localStorage.setItem("userPizza-profile", JSON.stringify({ ...action.payload }));
		},
		[register.rejected]: (state, action) => {
			state.loading = false;
			state.error = action.payload.message;
		},
	},
});
export const { setUserLogin, setUserLogout } = authSlice.actions;
export default authSlice.reducer;
