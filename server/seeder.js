const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const datas = require("./pizza-data - Copy");
const ProductModel = require("./models/Product");
const app = express();

dotenv.config();
app.listen(process.env.PORT || 5000, () => {
	console.log(`Listening to EXPRESS on ${process.env.PORT || 5000}`);
	mongoose
		.connect(process.env.MONGODB_URI, {
			useNewURLParser: true,
		})
		.then(() => {
			console.log("MONGO-DB Connection Successfull");
			if (process.argv[2] === "-d") {
				dataDestroy();
			} else {
				importData();
			}
		})
		.catch((err) => {
			console.log(err.message + "server not able to connect");
		});
});

const importData = async () => {
	try {
		await ProductModel.deleteMany();
		const temp = datas.map((data) => {
			return { ...data };
		});

		await ProductModel.insertMany(temp);
		console.log("Data Imported");
		process.exit(0);
	} catch (error) {
		process.exit(1);
	}
};
const dataDestroy = () => {};
