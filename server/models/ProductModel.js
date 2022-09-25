const mongoose = require("mongoose");

const ProductInfo = mongoose.Schema(
	{
		name: { type: String, required: true, maxLength: 70 },
		description: { type: String, required: true, maxLength: 150 },
		image: { type: String, required: true },
		prices: { type: [{ variant: { type: String }, price: { type: Number } }], required: true },
		category: { type: String },
		crust: { type: [{ name: { type: String }, price: { type: Number } }], required: true },
		toppings: { type: [{ name: { type: String }, price: { type: Number } }], required: true },
	},
	{ timestamps: true }
);
const productmodel = mongoose.model("Products", ProductInfo);
module.exports = productmodel;
