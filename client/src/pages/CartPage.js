import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/CartPage.module.css";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

const CartPage = () => {
	const { products } = useSelector((state) => ({ ...state.cart }));
	const toppings = products && products.map((product) => product.toppings);
	console.log(toppings);

	return (
		<>
			<Navbar />
			<div className={styles.CartPageWrapper}>
				<MDBTable align="middle" responsive>
					<MDBTableHead>
						<tr>
							<th scope="col">Product</th>
							<th scope="col">Title</th>
							<th scope="col">Addons</th>
							<th scope="col">Price</th>
							<th scope="col">Quantity</th>
							<th scope="col">Total</th>
						</tr>
					</MDBTableHead>
					<MDBTableBody>
						{products.map((pizza) => (
							<tr>
								<td>
									<div className="d-flex align-items-center">
										<img
											src={pizza.image}
											alt=""
											style={{ width: "45px", height: "45px" }}
											className="rounded-circle"
										/>
									</div>
								</td>
								<td>{pizza.name}</td>
								
								<td>
									<span>{`${pizza.Type}, ${pizza.crust}, `}</span>
									&nbsp;
									<span>{pizza.toppings.map((topping) => `${topping}, `)}</span> &nbsp;
								</td>
								<td>{pizza.price}</td>
								<td>{pizza.quantity}</td>
								<td>{pizza.total}</td>
							</tr>
						))}
					</MDBTableBody>
				</MDBTable>
				<div className={styles.columnRight}>
					<div className={styles.CartPageOrderSummaryContainer}>
						<h3 class="text-center">Bucket Value</h3>
						<div className={styles.CartPageOrderSummary}>
							<span className={styles.OrderLabel}>Sub Total</span>
							<span className={styles.OrderValue}> $200</span>
						</div>
						<div className={styles.CartPageOrderSummary}>
							<span className={styles.OrderLabel}>Delivery</span>
							<span className={styles.OrderValue}> $200</span>
						</div>
						<div className={styles.CartPageOrderSummary}>
							<span className={styles.OrderLabel}>Tax</span>
							<span className={styles.OrderValue}> $200</span>
						</div>
						<div className={styles.CartPageOrderSummary}>
							<span className={styles.OrderLabel}>Total</span>
							<span className={styles.OrderValue}>$200</span>
						</div>
						<MDBBtn size="sm" className="my-3">
							Place Order
						</MDBBtn>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CartPage;
