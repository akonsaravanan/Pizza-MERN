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

module.exports = {
	createCart,
};
