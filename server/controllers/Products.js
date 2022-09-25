const mongoose = require("mongoose");
const ProductModel = require("../models/ProductModel");

const getAllProducts = async (req, res) => {
	try {
		const products = await ProductModel.find();
		if (products.length > 0) {
			return res.status(200).json({
				message: "products fecthed successfully",
				results: products.length,
				data: products,
			});
		}
	} catch (error) {
		res.status(404).json({
			status: "Fail",
			message: "Products Fetch failed",
		});
	}
};

const createProduct = async (req, res) => {
	try {
		const product = await ProductModel.create(req.body);
		res.status(200).json({
			message: "product  created successfully",
			data: product,
		});
	} catch (error) {
		return res.status(404).json({
			status: "Fail",
			message: "Products Creation failed",
		});
	}
};
module.exports = {
	getAllProducts,
	createProduct,
};
