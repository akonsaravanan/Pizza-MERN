import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/TrackOrder.module.css";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const pizzas = [
	{
		id: 1,
		name: "Margherita",
		varient: "Regular",
		price: 199,
		amount: 398,
		category: "veg",
		crust: "Fresh Pan",
		toppings: ["onion", "tomato", "chilly", "red pepper"],
		quantity: 2,
		image:
			"https://res.cloudinary.com/sara93/image/upload/v1660899148/pizza%20mern/farmhouse_sphpul.jpg",
		description: "Classic delight with 100% real mozzarella cheese and traditional flavours",
	},
	{
		id: 2,
		name: "Margherita",
		varient: "Regular",
		price: 199,
		amount: 398,

		category: "veg",
		crust: "Fresh Pan",
		toppings: ["onion", "tomato", "chilly", "red pepper"],
		quantity: 2,
		image:
			"https://res.cloudinary.com/sara93/image/upload/v1660899148/pizza%20mern/farmhouse_sphpul.jpg",
		description: "Classic delight with 100% real mozzarella cheese and traditional flavours",
	},
];

let rows = {};
rows = pizzas.map((pizza) => ({
	...rows,
	ID: pizza.id,
	Product: pizza.image,
	Title: pizza.name,
	addons: `${pizza.crust},${pizza.toppings}`,
	price: pizza.price,
	quantity: pizza.quantity,
	total: pizza.amount,
	"on Date": new Date().toLocaleDateString(),
}));

console.log(rows);
const columns = [
	{ field: "ID", headerName: "ID", width: 100 },
	{
		field: "Product",
		width: 200,
		headerName: "Product",
		renderCell: (params) => (
			<img src={params.row.Product} style={{ objectFit: "fill", width: 100, height: 100 }} />
		),
	},
	{ field: "Title", title: "Title", width: 150 },
	{
		field: "addons",
		headerName: "Addons",
		width: 300,
	},
	{
		field: "price",
		headerName: "Price",
		type: "number",
		width: 80,
	},
	{
		field: "quantity",
		headerName: "Units",
		type: "number",
		width: 80,
	},
	{
		field: "total",
		headerName: "Total",
		type: "number",
		width: 120,
	},
	{
		field: "on Date",
		headerName: "Ordered On",
		type: "number",
		width: 150,
	},
	{
		field: "status",
		headerName: "Status",
		width: 300,
		renderCell: (params) => (
			<Link to={"/track"}>
				<Button size="small" variant="contained" color="primary">
					Track Order
				</Button>
			</Link>
		),
	},
];

export const MyOrder = () => {
	return (
		<>
			<Navbar />
			<div className={styles.myOrderContainer}>
				<h4 class="text-center mt-5 pt-3">My Orders</h4>
				<div className={styles.myOrderCardTable}>
					<DataGrid
						getRowId={(row) => row.ID}
						rows={rows}
						columns={columns}
						pageSize={5}
						rowsPerPageOptions={[5]}
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};
