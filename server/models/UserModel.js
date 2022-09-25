const mongoose = require("mongoose");

const userInfo = mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isAdmin: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

const userModel = mongoose.model("Users", userInfo);
module.exports = userModel;
