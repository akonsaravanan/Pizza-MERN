import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { PizzaList } from "../components/PizzaList";

const TryDelicious = () => {
	return (
		<div>
			<Navbar />
			<h3>TryDelicious</h3>
			<PizzaList />
			<Footer />
		</div>
	);
};

export default TryDelicious;
