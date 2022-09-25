import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Aboutus.module.css";

const Menu = () => {
	return (
		<>
			<Navbar />
			<div class="">
				<h3 class=" text-center ">Menu</h3>
				<div className={styles.menuImageContainer}>
					<img
						// src="https://res.cloudinary.com/sara93/image/upload/v1661270668/pizza%20mern/pngwing.com_2_xrpkx7.png"
						src="https://res.cloudinary.com/sara93/image/upload/v1661150999/pizza%20mern/33_yjs9oi.png"
						width="70%"
						height="70%"
						alt=""
						class="img-responsive"
					/>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Menu;
