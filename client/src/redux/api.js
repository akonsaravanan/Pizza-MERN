import axios from "axios";
const API_baseurl = "http://localhost:5000";
// const devEnvironment = process.env.NODE_ENV;
// const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;
// console.log(process.env.NODE_ENV);
const API = axios.create({ baseURL: API_baseurl });

API.interceptors.request.use((req, res) => {
	if (localStorage.getItem("userPizza-profile")) {
		const token = JSON.parse(localStorage.getItem("userPizza-profile")).token;
		req.headers.Authorization = `Bearer ${token}`;
		console.log(req.headers.Authorization);
		return req;
	} else {
		return req;
	}
});

export const getPizzas = async () => {
	const response = await API.get("/products");
	return response.data;
};
export const createAccount = async (postData) => {
	const response = await API.post("/auth/signup", postData);
	return response.data;
};
export const loginAccount = async (postData) => {
	console.log(postData);
	const response = await API.post("/auth/signin", postData);
	console.log(postData);
	return response.data;
};
export const createCart = async (postData) => {
	console.log(postData);
	const response = await API.post("/carts/create", postData);
	console.log(postData);
	return response.data;
};
export const getInCartItems = async () => {
	const response = await API.get("/carts/incart");
	return response.data;
};
