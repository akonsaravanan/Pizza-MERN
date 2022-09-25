const mongoose = require("mongoose");

const OrderInfo = mongoose.Schema(
	{
		customer: { type: String, required: true, maxLength: 70 },
		address: { type: String, required: true, maxLength: 150 },
		total: { type: Number },
		status: { type: Number, default: 0 },
		paymethod: { type: Number, default: 0 },
	},
	{ timestamps: true }
);
const ordermodel = mongoose.model("Order", OrderInfo);
module.exports = ordermodel;
