import React, { useState, useEffect } from "react";
import {
	FaBars,
	FaRegUser,
	FaTimes,
	FaPizzaSlice,
	FaOpencart,
	FaPhoneAlt,
	FaSignOutAlt,
} from "react-icons/fa";
import styles from "../styles/Navbar.module.css";
import { MenuItems } from "./MenuItems";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogout, setUserLogin } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const handleMenu = () => setMenu(!menu);
	const quantityState = useSelector((state) => state.cart.quantity);
	const { user } = useSelector((state) => ({ ...state.auth }));
	const [accessIn, setaccessIn] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	console.log(user);
	useEffect(() => {
		const extUser = localStorage.getItem("userPizza-profile");
		if (extUser) {
			setUserLogin(extUser);
			setaccessIn(extUser);
		}

		console.log(accessIn);
	}, [accessIn]);

	const handleLogout = () => {
		dispatch(setUserLogout());
		toast.success("Logged out successfully");
		navigate("/home");
		setaccessIn(false); // navigate("/home");
	};

	console.log(quantityState);
	return (
		<nav id="navBAR" dark bgColor="primary" className={styles.container}>
			<div className={styles}>
				<h2 className={styles}>
					<a className={styles.logo} href="/">
						<FaPizzaSlice
							className={styles.logo2}
							style={{ display: "inline-block", paddingRight: "5px" }}
						/>
						<span className={styles.logo2}>P</span>
						<span className={styles.logo2}>-</span>
						<span className={styles.logo2} style={{ color: "green" }}>
							I
						</span>
						<span className={styles.logo2}>-</span>
						<span className={styles.logo2} style={{ color: "red" }}>
							Z
						</span>
						<span className={styles.logo2} style={{ color: "red" }}>
							Z
						</span>
						<span className={styles.logo2}>A</span>
						<img
							className={styles.logo2}
							src="https://res.cloudinary.com/sara93/image/upload/v1661150998/pizza%20mern/4_yupeze.png"
							width="40px"
							height="40px"
							style={{ display: "inline-block", paddingLeft: "5px" }}
						/>
					</a>
				</h2>
			</div>
			<div className={styles.menuIcon} onClick={handleMenu}>
				{menu ? <FaTimes /> : <FaBars />}
			</div>
			<div className={styles.navLinkComponents}>
				<ul className={menu ? styles.menuListActive : styles.menuListInActive}>
					{MenuItems.map((menu) => (
						<li>
							<a className={styles.menuLink} href={menu.href}>
								{menu.name}
							</a>
						</li>
					))}
					{
						<>
							{/* <li className={styles.userIcon}>
								<a href="#" className={styles.orderNow}>
									<span>ORDER NOW</span>
									<FaPhoneAlt className={styles.callIcon} />
									<span>9966885501</span>
								</a>
							</li> */}

							{/* <li className={styles.userIcon}>
								{user ? (
									<span style={{ cursor: "pointer", color: "white" }} onClick={handleLogout}>
										<FaRegUser />
									</span>
								) : (
									<a href="/signupin">
										<FaRegUser />
									</a>
								)}
							</li> */}
							{console.log(accessIn)}
							{accessIn && (
								<li className={styles.userIcon}>
									<span style={{ cursor: "pointer", color: "white" }} onClick={handleLogout}>
										<FaSignOutAlt />
									</span>
								</li>
							)}
							{!accessIn && (
								<li className={styles.userIcon}>
									<a href="/signupin">
										<FaRegUser />
									</a>
								</li>
							)}

							<li className={styles.cartIcon} href="#">
								<a href="/cartPage">
									<FaOpencart />
									<span className={styles.cartCounter}>{quantityState && quantityState}</span>
								</a>
							</li>
						</>
					}
				</ul>
			</div>
			{/* <div className={styles.NavOfferImageContainer}>
				<img
					src="https://res.cloudinary.com/sara93/image/upload/v1661150999/pizza%20mern/36_vu3a6z.png"
					width="200px"
					height="200px"
					className={styles.offerImage}
					// style={{ display: "inline-block", paddingLeft: "5px" }}
				/>
			</div> */}
		</nav>
	);
};

export default Navbar;
