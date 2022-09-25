const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/UserRoutes");
const cartRoutes = require("./routes/CartRoute");
const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true, parameterLimit: 102400 }));

app.get("/", (req, res) => {
	res.send("Hello Sara Welcome to Pizza Commerce");
});

app.use("/auth", userRoutes);
app.use("/products", productRoutes);
app.use("/carts", cartRoutes);
app.use((req, res, next) => {
	res
		.status(404)
		.json({ status: 404, title: "Invalid Route/End point", msg: "Invalid Route/End point" });
	next();
});

app.listen(process.env.PORT || 5000, () => {
	console.log(`Listening to EXPRESS on ${process.env.PORT || 5000}`);
	mongoose
		.connect(process.env.MONGODB_URI, {
			useNewURLParser: true,
		})
		.then(() => {
			console.log("MONGO-DB Connection Successfull".bgGreen.white);
			// console.log(process.env);
		})
		.catch((err) => {
			console.log(err.message + "server not able to connect");
		});
});
