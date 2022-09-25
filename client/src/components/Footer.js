import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<div className={styles.footerContainer}>
			<div class="row g-0 mx-auto">
				<div
					class="cols col-md-3"
					style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
				>
					<span className={styles.footerImgSection}>
						<img
							className={styles.footerImageLogo}
							src="https://res.cloudinary.com/sara93/image/upload/v1661150998/pizza%20mern/4_yupeze.png"
							// width="150px"
							// height="150px"
						/>
					</span>
				</div>
				<div class="cols col-md-3 p-3">
					<p className={styles.footerMoto}>
						oh yes, we did. the pizza well baked and delicious one with rich nutritional content and
						texture as well <br />
						<span>P-I-ZZA</span>
						<br />
						<span>OFF-ERS</span>
						<br />
						<span>P-EACE</span>
					</p>
				</div>
				<div class="cols col-md-3 p-3">
					<h5 style={{ textTransform: "uppercase", color: "yellow" }}>Find our restaurants</h5>
					<div className={styles.footerAddressCards}>
						<span>New York, NY 10012, US</span>
						<span>info@example.com</span>
						<span class="mb-3">+ 01 234 567 88</span>
					</div>
					<div className={styles.footerAddressCards}>
						<span>New Jersey, NY 10012, US</span>
						<span>info@example.com</span>
						<span class="mb-3">+ 01 334 567 88</span>
					</div>
					<div className={styles.footerAddressCards}>
						<span>San Francisco, NY 10013, US</span>
						<span>info@example.com</span>
						<span class="mb-3">+ 01 234 567 88</span>
					</div>
				</div>
				<div class="cols col-md-3 p-3">
					<h4 style={{ textTransform: "uppercase", color: "yellow" }}>working hours</h4>
					<div className={styles.footerAddressCards}>
						<span>Monday - Friday</span>
						<span class="mb-3">09.00 - 22.00</span>
					</div>
					<div className={styles.footerAddressCards}>
						<span>Saturday - Sunday</span>
						<span class="mb-3">12.00 - 24.00</span>
					</div>
					<div className={styles.socialContainer}>
						<span class={styles.socialIcon} style={{ backgroundColor: "blue", color: "white" }}>
							<FaFacebookF />
						</span>
						<span class={styles.socialIcon} style={{ backgroundColor: "#C13584", color: "white" }}>
							<FaInstagram />
						</span>
						<span class={styles.socialIcon} style={{ backgroundColor: "#0072b1", color: "white" }}>
							<FaLinkedin />
						</span>
						<span class={styles.socialIcon} style={{ backgroundColor: "#00acee", color: "white" }}>
							<FaTwitter />
						</span>
					</div>
					<div style={{ width: "100px", height: "100px" }}>
						<img
							src="https://res.cloudinary.com/sara93/image/upload/v1661151001/pizza%20mern/20_xnpum0.png"
							// src="https://res.cloudinary.com/sara93/image/upload/v1661150999/pizza%20mern/36_vu3a6z.png"
							alt=""
							width="100%"
							height="100%"
							class="img-responsive"
						/>
					</div>
				</div>
			</div>
			<p className={styles.footerCopy}>
				Created and Marketed by P-I-ZZA <span>&copy;{date}</span>
			</p>
		</div>
	);
};
