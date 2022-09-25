import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Sliders } from "../components/Sliders";
import styles from "../styles/PizzaList.module.css";
import stylesHome from "../styles/Home.module.css";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Sliders />
			<div className={styles.container}>
				<h1 className="text-center mt-5">The Best Pizza in Town</h1>
				<div className={styles.productsImageWrapper}>
					<div>
						<p class="mx-5" style={{ lineHeight: "2.2rem" }}>
							It also depends on how you define pizza. Some people believe that pizza comes from the
							Greek word pitta, or pita, meaning “pie”. Other people say it comes from the
							Langobardic language, which is an ancient German language from northern Italy. The
							word bizzo in Langobardic means “bite.” If you define pizza as a flat bread baked in
							an oven, then the credit for pizza should go to the Babylonians, Israelites, and
							Egyptians coming from the Middle East because they ate flatbread baked in ovens made
							from mud. Now, if you define pizza as bread with toppings, then the Romans and Greeks
							should be credited with the invention of pizza. The Romans and Greeks ate bread topped
							with olive oil and spices. Today we call this dish Focaccia bread.
						</p>
					</div>
					<img
						src="https://res.cloudinary.com/sara93/image/upload/v1661151002/pizza%20mern/23_ojpjgs.png"
						// src="https://res.cloudinary.com/sara93/image/upload/v1661150999/pizza%20mern/36_vu3a6z.png"
						alt=""
						width="100%"
						height="100%"
						class="img-fluid"
						style={{ width: "500px", height: "500px" }}
					/>
				</div>
				<div className={styles.productsImageWrapper}>
					<img
						style={{ width: "500px", height: "500px" }}
						src="https://res.cloudinary.com/sara93/image/upload/v1661151003/pizza%20mern/15_ppf8ta.png"
						// src="https://res.cloudinary.com/sara93/image/upload/v1661150999/pizza%20mern/36_vu3a6z.png"
						alt=""
						width="100%"
						height="100%"
						class="img-fluid"
					/>
					<div>
						<p class="mx-5" style={{ lineHeight: "2.2rem" }}>
							Pizza is a savory dish of Italian origin consisting of a usually round, flattened base
							of leavened wheat-based dough topped with tomatoes, cheese, and often various other
							ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc The
							first record of the word “pizza” was in a Latin text dated 997 AD where it stated the
							bishop of the Italian town Gaeta, was to receive duodecim pizze or “twelve pizzas” on
							Christmas Day and Easter Sunday. We know that the word pizza comes from Italy, but the
							deeper origins of the word are a bit less clear. Different historians will give
							different answers to where exactly pizza came from.
						</p>
					</div>
				</div>
				<div className={styles.productsImageWrapper}>
					<div>
						<p class="mx-5" style={{ lineHeight: "2.2rem" }}>
							It also depends on how you define pizza. Some people believe that pizza comes from the
							Greek word pitta, or pita, meaning “pie”. Other people say it comes from the
							Langobardic language, which is an ancient German language from northern Italy. The
							word bizzo in Langobardic means “bite.” If you define pizza as a flat bread baked in
							an oven, then the credit for pizza should go to the Babylonians, Israelites, and
							Egyptians coming from the Middle East because they ate flatbread baked in ovens made
							from mud. Now, if you define pizza as bread with toppings, then the Romans and Greeks
							should be credited with the invention of pizza. The Romans and Greeks ate bread topped
							with olive oil and spices. Today we call this dish Focaccia bread.
						</p>
					</div>
					<img
						src="https://res.cloudinary.com/sara93/image/upload/v1660899149/pizza%20mern/pizza_udqky6.png"
						alt=""
						width="100%"
						height="100%"
						class="img-fluid"
						style={{ width: "500px", height: "500px" }}
					/>
				</div>
				<div className={styles.productsImageWrapper}>
					<img
						style={{ width: "500px", height: "500px" }}
						src="https://res.cloudinary.com/sara93/image/upload/v1661151001/pizza%20mern/18_mv339s.png"
						alt=""
						width="100%"
						height="100%"
						class="img-fluid"
					/>
					<div>
						<p class="mx-5" style={{ lineHeight: "2.2rem" }}>
							Pizza is a savory dish of Italian origin consisting of a usually round, flattened base
							of leavened wheat-based dough topped with tomatoes, cheese, and often various other
							ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc The
							first record of the word “pizza” was in a Latin text dated 997 AD where it stated the
							bishop of the Italian town Gaeta, was to receive duodecim pizze or “twelve pizzas” on
							Christmas Day and Easter Sunday. We know that the word pizza comes from Italy, but the
							deeper origins of the word are a bit less clear. Different historians will give
							different answers to where exactly pizza came from.
						</p>
					</div>
				</div>
			</div>
			<div className={stylesHome.ServicesContainer}>
				<h3 class="text-center" style={{ fontSize: "2rem" }}>
					Our Services
				</h3>
				<div class="row g-0">
					<div class="cols col-md-3 mx-0">
						<div className={stylesHome.servicesContent}>
							<img
								src="https://res.cloudinary.com/sara93/image/upload/v1661150997/pizza%20mern/5_cz2nbh.png"
								alt=""
								width="100%"
								height="100%"
								class="img-responsive"
							/>
							<h5 class="text-center text-muted">Good Food</h5>
							<span class="text-center text-muted">
								In Good Taste is proud of the products that carry our name. We are devoted to
								helping you expand your business with consistent top quality products.
							</span>
						</div>
					</div>
					<div class="cols col-md-3 mx-0">
						<div className={stylesHome.servicesContent}>
							<img
								src="https://res.cloudinary.com/sara93/image/upload/v1661151001/pizza%20mern/16_cjk71o.png"
								alt=""
								width="100%"
								height="100%"
								class="img-responsive"
							/>
							<h5 class="text-center text-muted">Best Quality</h5>
							<span class="text-center text-muted">
								In Good Taste is proud of the products that carry our name. We are devoted to
								helping you expand your business with consistent top quality products.
							</span>
						</div>
					</div>
					<div class="cols col-md-3 mx-0">
						<div className={stylesHome.servicesContent}>
							<img
								src="https://res.cloudinary.com/sara93/image/upload/v1661151000/pizza%20mern/13_s5l7g8.png"
								alt=""
								width="100%"
								height="100%"
								class="img-responsive"
							/>
							<h5 class="text-center text-muted">Fast Delivery</h5>
							<span class="text-center text-muted">
								In Good Taste is proud of the products that carry our name. We are devoted to
								helping you expand your business with consistent top quality products.
							</span>
						</div>
					</div>
					<div class="cols col-md-3 mx-0">
						<div className={stylesHome.servicesContent}>
							<img
								src="https://res.cloudinary.com/sara93/image/upload/v1661150999/pizza%20mern/7_kqsezx.png"
								alt=""
								width="100%"
								height="100%"
								class="img-responsive"
							/>
							<h5 class="text-center text-muted">Divine Taste</h5>
							<span class="text-center text-muted">
								In Good Taste is proud of the products that carry our name. We are devoted to
								helping you expand your business with consistent top quality products.
							</span>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
