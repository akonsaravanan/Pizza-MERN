import React from "react";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/TrackOrder.module.css";
import { TiArrowBack } from "react-icons/ti";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

const TrackOrder = () => {
	const status = 0;
	const trackingStatus = (index) => {
		if (index - status < 1) return styles.done;
		if (index - status === 1) return styles.inProgress;
		if (index - status > 1) return styles.unDone;
	};
	return (
		<>
			<Navbar />
			<div className={styles.TrackMyOrderContainer}>
				<h1 className="mt-3 text-center">Track My Order</h1>
				<div className={styles.orderTracking}>
					<div className={styles.orderTrackingCard}>
						<div className={trackingStatus(0)}>
							<img
								src="https://res.cloudinary.com/sara93/image/upload/v1660899149/pizza%20mern/paid_a9ehsh.png"
								alt=""
								class="img-responsive"
								width="80px"
								height="80px"
							/>
							<span>Payment</span>
							<div className={styles.trackingStatusChecked}>
								<img
									src="https://res.cloudinary.com/sara93/image/upload/v1660899148/pizza%20mern/checked_wti96g.png"
									alt=""
									class="img-responsive"
									width="30px"
									height="30px"
								/>
							</div>
						</div>
						<div className={trackingStatus(1)}>
							<img
								src="https://res.cloudinary.com/sara93/image/upload/v1660899147/pizza%20mern/bake_frvlwl.png"
								alt=""
								class="img-responsive"
								width="80px"
								height="80px"
							/>
							<span>Preparing</span>
							<div className={styles.trackingStatusChecked}>
								<img
									src="https://res.cloudinary.com/sara93/image/upload/v1660899148/pizza%20mern/checked_wti96g.png"
									alt=""
									class="img-responsive"
									width="30px"
									height="30px"
								/>
							</div>
						</div>
						<div className={trackingStatus(2)}>
							<img
								src="https://res.cloudinary.com/sara93/image/upload/v1660899147/pizza%20mern/bike_fgdtum.png"
								alt=""
								class="img-responsive"
								width="80px"
								height="80px"
							/>
							<span>On the way</span>
							<div className={styles.trackingStatusChecked}>
								<img
									src="https://res.cloudinary.com/sara93/image/upload/v1660899148/pizza%20mern/checked_wti96g.png"
									alt=""
									class="img-responsive"
									width="30px"
									height="30px"
								/>
							</div>
						</div>
						<div className={trackingStatus(3)}>
							<img
								src="https://res.cloudinary.com/sara93/image/upload/v1660899148/pizza%20mern/delivered_qnk6th.png"
								alt=""
								class="img-responsive"
								width="80px"
								height="80px"
							/>
							<span>Delivered</span>

							<div className={styles.trackingStatusChecked}>
								<img
									src="https://res.cloudinary.com/sara93/image/upload/v1660899148/pizza%20mern/checked_wti96g.png"
									alt=""
									class="img-responsive"
									width="30px"
									height="30px"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.orderDetailContainer}>
					<div className={styles.orderSummary}>
						<div className={styles.CartPageOrderSummaryContainer}>
							<h3 class="text-center">Order Summary</h3>
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
						</div>
					</div>
					<div className={styles.orderDeliveryAddress}>
						<div className={styles.CartPageOrderSummaryContainer}>
							<h3 class="text-center">Delivery Address</h3>
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
						</div>
					</div>
				</div>
				<Link to={"/myorder"}>
					<TiArrowBack
						class="text-muted"
						data-bs-toggle="tooltip"
						data-bs-placement="top"
						title="Back to Order"
						style={{
							cursor: "pointer",
							fontSize: "3rem",
							position: "absolute",
							right: 10,
							top: -5,
							color: "black",
						}}
					/>
				</Link>
			</div>

			<Footer />
		</>
	);
};

export default TrackOrder;
