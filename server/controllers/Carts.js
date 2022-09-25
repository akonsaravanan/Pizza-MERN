const mongoose = require("mongoose");
const cartModel = require("../models/CartModel");

const createCart = async (req, res) => {
	try {
		const Cart = await cartModel.create(req.body);
		res.status(200).json({
			message: "Cart  created successfully",
			data: Cart,
		});
	} catch (error) {
		return res.status(404).json({
			status: "Fail",
			message: error.message,
		});
	}
};

const getInCartItems = async (req, res) => {
	try {
		const CartHistory = await cartModel.find({ userId: req.user.id });
		const inCart = CartHistory.filter((item) => item.status === "inprogress");
		console.log(inCart);
		res.status(200).json({
			message: "IN Cart  fetched successfully",
			results: inCart.length,
			data: inCart,
		});
	} catch (error) {
		return res.status(404).json({
			status: "Fail",
			message: error.message,
		});
	}
};

module.exports = {
	createCart,
	getInCartItems,
};
