import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInUp from "./pages/SignInUp";
import TryDelicious from "./pages/TryDelicious";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import TrackOrder from "./pages/TrackOrder";
import Services from "./pages/Services";
import CartPage from "./pages/CartPage";
import PizzaDetail from "./pages/PizzaDetail";
import { MyOrder } from "./pages/MyOrder";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { setUserLogin } from "./redux/authSlice";

import "react-toastify/dist/ReactToastify.css";

function App() {
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("userPizza-profile"));

	useEffect(() => {
		dispatch(setUserLogin(user));
	}, []);
	return (
		<BrowserRouter>
			<div className="App">
				<ToastContainer
					position="top-center"
					autoClose={2000}
					hideProgressBar
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover={false}
					theme="dark"
				/>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Home />} />
					<Route path="/signupin" element={<SignInUp />} />
					<Route path="/products" element={<TryDelicious />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/track" element={<TrackOrder />} />
					<Route path="/services" element={<Services />} />
					<Route path="/cartpage" element={<CartPage />} />
					<Route path="/product" element={<PizzaDetail />} />
					<Route path="/myorder" element={<MyOrder />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
