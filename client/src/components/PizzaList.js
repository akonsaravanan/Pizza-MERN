import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/PizzaList.module.css";
import { PizzaCard } from "./PizzaCard";
// import Pizzas from "../pizza-data.js";
import { getAllPizzas } from "../redux/productSlice";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

export const PizzaList = () => {
	const allProductsState = useSelector((state) => ({ ...state.allProducts }));
	const { allProducts, loading } = allProductsState;
	const dispatch = useDispatch();
	const [spin, setSpin] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setSpin(false);
		}, 1000);
	}, []);

	useEffect(() => {
		dispatch(getAllPizzas());
	}, []);
	return (
		<>
			<h3 class="text-center my-5">Our Signature Products</h3>
			{spin ? (
				<Spinner />
			) : (
				<div className={styles.pizzaCardWrapper}>
					<div class="row g-0">
						{allProducts &&
							allProducts.map((pizza, i) => <PizzaCard pizza={pizza} key={pizza._id} />)}
					</div>
				</div>
			)}
		</>
	);
};
