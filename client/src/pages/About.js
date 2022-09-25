import React from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import styles from "../styles/Aboutus.module.css";

const About = () => (
	<div>
		<Navbar />
		<div className="my-5 mt-5 mx-auto aboutContainer container">
			<h2 className="text-muted text-center pt-5">About Us</h2>
			<div className="row">
				<h3>Who We are</h3>
				<div
					className="col"
					style={{
						lineHeight: "1.8rem",
					}}
				>
					<p>
						USPizza is all about quality you can trust. As one of the original founding Pizza brands
						and the 3rd largest Pizza chain in India, our sole mission is making the freshest,
						tastiest and funnest Pizza around. Our classic pan pizza will always be a fan favourite,
						with a soft and chewy crust perfectly balancing out the healthy tomato pure and
						mozzarella - cheddar blended cheese. Our authentic Italian crust for those who would
						prefer a light and airy crust to more fully enjoy the toppings. Thin, light and
						delicious. Our newest addition of Puree sauces will blow your mind. Chose between a
						spicy buffalo, sweet bbq, tangy chipotle can creamy makhni to perfectly compliment your
						toppings and crust. Our suggestions of combinations might be helpful but ultimately the
						power lies with you. Contrary to industry standard strategy, USPizza, since 1996, has
						been committed to growing our brand slowly and steadily. Every outlet is carefully
						selected on strict criteria. To be a USPizza franchisee is a privilege unto itself. The
						same commitment to product and service perfection we practice is expected from our
						partners. Our outlets designed by leading architects to reflect our philosophy of being
						open and inviting, while putting our customer comfort on priority. Everywhere we go, we
						hear ‘Your pizza is the tastiest pizza around, why aren’t you open in my location’. The
						answer is simple, every outlet opened is a promise to our customer, and not one we take
						lightly.
					</p>
				</div>
			</div>
			<div className="row  my-3">
				<h3 class="text-center mb-5">Our Chefs</h3>
				<div className="cols d-flex align-items-center col-md-3">
					<img
						src="https://res.cloudinary.com/sara93/image/upload/v1661191087/pizza%20mern/37_uh0y4j.png"
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
				<div
					className="text-center cols col-md-6 px-5"
					style={{
						lineHeight: "1.8rem",
					}}
				>
					USPizza is all about quality you can trust. As one of the original founding Pizza brands
					and the 3rd largest Pizza chain in India, our sole mission is making the freshest,
					tastiest and funnest Pizza around. Our classic pan pizza will always be a fan favourite,
					with a soft and chewy crust perfectly balancing out the healthy tomato pure and mozzarella
					- cheddar blended cheese. Our authentic Italian crust for those who would prefer a light
					and airy crust to more fully enjoy the toppings. Thin, light and delicious. Our newest
					addition of Puree sauces will blow your mind. Chose between a spicy buffalo, sweet bbq,
					tangy chipotle can creamy makhni to perfectly compliment your toppings and crust. Our
					suggestions of combinations might be helpful but ultimately the power lies with you.
					Contrary to industry standard strategy, USPizza, since 1996, has been committed to growing
					our brand slowly and steadily. Every outlet is carefully selected on strict criteria. To
					be a USPizza franchisee is a privilege unto itself. The same commitment to product and
					service perfection we practice is expected from our partners. Our outlets designed by
					leading architects to reflect our philosophy of being open and inviting, while putting our
					customer comfort on priority. Everywhere we go, we hear ‘Your pizza is the tastiest pizza
					around, why aren’t you open in my location’. The answer is simple, every outlet opened is
					a promise to our customer, and not one we take lightly.
				</div>
				<div className="cols d-flex align-items-center col-md-3">
					<img
						src="https://res.cloudinary.com/sara93/image/upload/v1661191088/pizza%20mern/39_ggq5xf.png"
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
			</div>
			<div
				className="row my-3"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<h3 class="text-center mt-5 ">What We Offer !!!""</h3>
				<div className="cols col-md-4">
					{/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae cum cupiditate sint
					quam quia? Alias, illo aliquam ipsam, quis vero */}
					<img
						// src="https://res.cloudinary.com/sara93/image/upload/v1661151001/pizza%20mern/20_xnpum0.png"
						src="https://res.cloudinary.com/sara93/image/upload/v1661151002/pizza%20mern/21_cc5xte.png"
						alt=""
						width="100%"
						height="100%"
					/>
				</div>
				<div
					className="cols col-md-8"
					style={{
						lineHeight: "1.8rem",
					}}
				>
					USPizza, since 1996, has been committed to growing our brand slowly and steadily. Every
					outlet is carefully selected on strict criteria. To be a USPizza franchisee is a privilege
					unto itself. The same commitment to product and service perfection we practice is expected
					from our partners. Our outlets designed by leading architects to reflect our philosophy of
					being open and inviting, while putting our customer comfort on priority. Everywhere we go,
					we hear ‘Your pizza is the tastiest pizza around, why aren’t you open in my location’. The
					answer is simple, every outlet opened is a promise to our customer, and not one we take
					lightly.
				</div>
			</div>
			<div className={styles.imageCardContainer}>
				<img src="" />
			</div>
		</div>
		<Footer />
	</div>
);

export default About;
