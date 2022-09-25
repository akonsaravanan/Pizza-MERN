import React, { useEffect, useState } from "react";
import styles from "../styles/PizzaList.module.css";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TbPizzaOff, TbPizza } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useSelector, useDispatch } from "react-redux";
import { MDBBtn } from "mdb-react-ui-kit";
import { addProductToCart } from "../redux/cartSlice";
import { toast } from "react-toastify";

export const PizzaCard = ({ pizza }) => {
	// console.log(pizza);
	const dispatch = useDispatch();
	const crustData = [
		// {
		// 	name: "Fresh Pan",
		// 	Price: 50,
		// },
		// {
		// 	name: "Cheese Burst",
		// 	Price: 100,
		// },
		// {
		// 	name: "Thin Crust",
		// 	Price: 100,
		// },
		// {
		// 	name: "New Hand Tossed",
		// 	Price: 120,
		// },
		// {
		// 	name: "Classic Hand Tossed",
		// 	Price: 100,
		// },
	];
	const toppingsData = [
		// {
		// 	name: "Normal",
		// 	Price: 10,
		// },
		// {
		// 	name: "Grilled Mushrooms",
		// 	Price: 50,
		// },
		// {
		// 	name: "Onion",
		// 	Price: 100,
		// },
		// {
		// 	name: "Crisp Capsicum",
		// 	Price: 100,
		// },
		// {
		// 	name: "Fresh Tomato",
		// 	Price: 120,
		// },
		// {
		// 	name: "Panner",
		// 	Price: 100,
		// },
		// {
		// 	name: "Red Pepper",
		// 	Price: 100,
		// },
		// {
		// 	name: "Jalapeno",
		// 	Price: 100,
		// },
		// {
		// 	name: "Black Olive",
		// 	Price: 100,
		// },
	];
	const [Type, setType] = useState("Regular");
	const [amount, setAmount] = useState(0);
	const [qty, setQty] = useState(1);
	const [crust, setCrust] = useState({
		name: "Normal",
		price: 10,
	});
	const [toppingsAmount, setToppingsAmount] = useState(10);
	const [toppingOption, setToppingOption] = useState({
		Normal: true,
	});
	const postProduct = {
		name: pizza.name,
		image: pizza.image,
		description: pizza.description,
		quantity: pizza.qty,
		Type: Type,
		crust: crust,
		toppings: toppingOption,
		price: pizza.price,
		total: amount,
		status: "inprogress",
	};
	const handleAddToCart = (cart) => {
		dispatch(addProductToCart(postProduct));
		toast.info("Product added successfully");
	};

	const handleChange = (event) => {
		setType("");
		setType(event.target.value);
	};
	const handleChangeCrust = (event) => {
		setCrust("");
		setCrust(event.target.value);
	};
	const handleChangeToppings = (event, toppigPrice) => {
		setToppingOption({
			...toppingOption,
			[event.target.name]: event.target.checked,
		});
		if (event.target.checked) {
			setToppingsAmount(toppingsAmount + toppigPrice);
		}
		if (!event.target.checked) {
			setToppingsAmount(toppingsAmount - toppigPrice);
		}

		console.log(toppingsAmount);
	};
	const priceCalculation = (prices, CurrentType) => {
		const Amount = prices
			.filter((priceCal) => priceCal.variant === CurrentType)
			.map((data) => data.price * qty);
		// .join();
		return Amount;
	};
	const crustCalculation = (crustData, currentCrust) => {
		const Amount = crustData
			.filter((crustItem) => crustItem.name === currentCrust)
			.map((data) => data.price * qty)
			.join();
		// console.log(Amount);
		return Amount;
	};

	useEffect(() => {
		const temp =
			Number(priceCalculation(pizza.prices, Type)) +
			Number(crustCalculation(pizza.crust, crust)) +
			toppingsAmount * qty;
		// console.log(temp);
		setAmount(temp);
	}, [qty, Type, amount, crust, toppingsAmount]);

	return (
		<div
			class="cols card col-sm-2 col-md-4 pizzaComp mx-auto"
			style={{
				width: "350px",
				maxHeight: "450px",
				marginBottom: "40px",
				objectFit: "cover",
			}}
		>
			<div className={styles.pizzaImageContainer}>
				<img src={pizza.image} class="card-img-top" width="100%" height="100%" />
			</div>
			<span className={styles.VorNV}>
				{pizza.category === "veg" ? (
					<i class="bx bx-food-tag" style={{ color: "#0ac01c" }}></i>
				) : (
					<i class="bx bx-food-tag" style={{ color: "#f02206" }}></i>
				)}
			</span>
			<div class="card-body">
				<h5 class="card-title" style={{ color: "#000" }}>
					{pizza.name}
				</h5>
				<p class="card-text text-muted" style={{ fontSize: "13px" }}>
					{pizza.description}
				</p>
				<div className={styles.detailedSpecs}>
					<div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
						<span>
							<FormControl sx={{ width: 100 }} size="small">
								<InputLabel id="demo-select-small">Size</InputLabel>
								<Select
									labelId="demo-select-small"
									id="demo-select-small"
									value={Type}
									label="Variant"
									onChange={(e) => handleChange(e)}
									required
									MenuProps={{
										disableScrollLock: true,
									}}
								>
									{pizza.prices &&
										pizza.prices.map((data) => (
											<MenuItem value={data.variant}>{data.variant}</MenuItem>
										))}
									{/* {console.log(Type)} */}
								</Select>
							</FormControl>
						</span>
						<span>
							<FormControl sx={{ width: 170 }} size="small">
								<InputLabel id="demo-select-small2">Crust</InputLabel>
								<Select
									labelId="demo-select-small2"
									id="demo-select-small2"
									//value={crust}
									label="Variant"
									onChange={(e) => handleChangeCrust(e)}
									required
									MenuProps={{
										disableScrollLock: true,
									}}
								>
									{pizza.crust &&
										pizza.crust.map((crustType) => (
											<MenuItem value={crustType.name} disableScrollLock={true}>
												{crustType.name} &nbsp; ₹{crustType.price}
											</MenuItem>
										))}
								</Select>
							</FormControl>
						</span>
					</div>
					<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
						<span>
							<FormControl sx={{ width: 170 }} size="small">
								<InputLabel id="demo-select-small3">Toppings</InputLabel>
								<Select
									labelId="demo-select-small3"
									id="demo-select-small3"
									label="Variant"
									// required="true"
									value={""}
									onChange={(e) => e}
									MenuProps={{
										disableScrollLock: true,
									}}
								>
									Select Topping
									{pizza.toppings &&
										pizza.toppings.map((toppingType) => (
											<FormControlLabel
												className="mx-2"
												style={{
													display: "flex",
													alignItems: "center",
												}}
												label={
													<>
														{toppingType.name} &nbsp; ₹{toppingType.price}
													</>
												}
												control={
													<Checkbox
														checked={toppingOption[toppingType.name]}
														onChange={(event) => handleChangeToppings(event, toppingType.price)}
														name={toppingType.name}
													/>
												}
											/>
										))}
								</Select>
							</FormControl>
						</span>

						<span className={styles.Qtycontainer}>
							<Tooltip title="Add" placement="top">
								<IconButton>
									<TbPizza
										size={25}
										style={{ cursor: "pointer" }}
										color="blue"
										onClick={() => setQty((prev) => prev + 1)}
									/>
								</IconButton>
							</Tooltip>

							<TextField
								id="outlined-basic"
								variant="outlined"
								size="small"
								style={{ width: "45px" }}
								label="Qty"
								value={qty}
								onChange={(e) => setQty(e.target.value)}
								type="text"
							/>
							<Tooltip title="Remove" placement="top">
								<IconButton>
									<TbPizzaOff
										size={25}
										style={{ cursor: "pointer" }}
										color="black"
										onClick={() => (qty > 1 ? setQty((prev) => prev - 1) : null)}
									/>
								</IconButton>
							</Tooltip>
						</span>
					</div>
				</div>
				<div className={styles.priceContainer}>
					<span style={{ fontSize: "2rem" }}>
						<FaRupeeSign />
						{amount}
						{/* {priceCalculation(pizza.prices)} */}
					</span>
				</div>

				<div className="mt-3 d-flex justify-content-end">
					<MDBBtn
						variant="contained"
						size="sm"
						style={{ fontWeight: "500" }}
						onClick={handleAddToCart}
					>
						Add To Cart
					</MDBBtn>
				</div>
			</div>
		</div>
	);
};