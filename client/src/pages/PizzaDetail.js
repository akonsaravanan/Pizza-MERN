import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/PizzaDetail.module.css";
import {
	MDBCard,
	MDBCardTitle,
	MDBCardText,
	MDBCardBody,
	MDBCardImage,
	MDBRow,
	MDBCol,
} from "mdb-react-ui-kit";

const pizzas = {
	name: "Margherita",
	varients: ["Small", "Medium", "Large"],
	prices: [
		{ variant: "Small", price: 99 },
		{ variant: "Medium", price: 199 },
		{ variant: "Large", price: 399 },
	],

	category: "veg",
	pdpImage:
		"https://res.cloudinary.com/sara93/image/upload/v1661593050/pizza%20mern/Margherita_veg_cbi0lk.png",
	image:
		"https://res.cloudinary.com/sara93/image/upload/v1660899148/pizza%20mern/farmhouse_sphpul.jpg",
	description:
		"Classic delight with 100% real mozzarella cheese Classic delight with 100% real mozzarella cheese Classic delight with 100% real mozzarella cheese",
};
const PizzaDetail = () => {
	return (
		<div>
			<Navbar />
			<h3> PizzaDetail</h3>
			<div className={styles.PDPcontainer}>
				<MDBCard style={{ maxWidth: "100%", margin: "auto" }} className="p-5">
					<MDBRow className="g-0 ">
						<MDBCol md="5">
							<MDBCardImage src={pizzas.pdpImage} alt="..." className={styles.PDPImage} />
						</MDBCol>
						<MDBCol md="7">
							<MDBCardBody>
								<MDBCardTitle className="fs-1">{pizzas.name}</MDBCardTitle>
								<MDBCardText>{pizzas.description}</MDBCardText>
							</MDBCardBody>
						</MDBCol>
					</MDBRow>
				</MDBCard>
			</div>
			<Footer />
		</div>
	);
};

export default PizzaDetail;
