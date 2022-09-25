const mongoose = require("mongoose");

const cartInfo = mongoose.Schema({
	userId: { type: String, required: true },
	name: { type: String, required: true },
	image: { type: String, required: true },
	description: { type: String, required: true },
	quantity: { type: Number, required: true },
	Type: { type: String },
	crust: { type: String },
	toppings: { type: Array },
	price: { type: Number },
	total: { type: Number },
	status: { type: String, required: true },
});

const cartmodel = mongoose.model("Carts", cartInfo);
module.exports = cartmodel;
