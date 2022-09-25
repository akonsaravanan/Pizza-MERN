const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userModel = require("../models/UserModel");

const signup = async (req, res) => {
	try {
		console.log("INSIDE Controller");
		const hashPassword = await bcrypt.hash(req.body.Password, 12);
		const newUser = await userModel.create({
			name: `${req.body.FirstName}  ${req.body.LastName}`,
			email: req.body.Email,
			password: hashPassword,
		});
		const token = jwt.sign({ id: newUser._id }, process.env.secretKey, {
			expiresIn: "2hr",
		});
		console.log(token, newUser);
		const { password, ...account } = newUser._doc; //separating password from response

		return res.status(201).json({
			message: "Account created successfully",
			data: {
				account,
				token,
			},
		});
	} catch (error) {
		return res.status(500).json({
			message: "Account created failed",
			Error: error.message,
		});
	}
};

const signin = async (req, res) => {
	console.log("INSIDE Controller");

	const { Email, Password } = req.body;
	console.log(Email, Password);
	try {
		const existingUser = await userModel.findOne({ email: Email });
		console.log(existingUser);
		// console.log( existingUser );

		if (existingUser) {
			const existingUserPassword = await bcrypt.compare(Password, existingUser.password);
			if (!existingUserPassword) {
				console.log("Password mismatch");
				return res.status(400).json({
					message: "user not found",
				});
			}
		} else {
			return res.status(400).json({
				message: "user not found",
			});
		}
		const token = jwt.sign(
			{ email: existingUser.email, id: existingUser._id },
			process.env.secretKey,
			{
				expiresIn: "1hr",
			}
		);
		res.status(201).json({
			message: "User logged in successfully",
			data: {
				existingUser,
				token,
			},
		});
	} catch (error) {
		res.status(500).json({
			message: "Invalid credentials",
		});
	}
};

module.exports = {
	signup,
	signin,
};
