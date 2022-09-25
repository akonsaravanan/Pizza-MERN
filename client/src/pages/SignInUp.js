import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/SignInUp.module.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FaRegIdBadge } from "react-icons/fa";
import { MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { login, register } from "../redux/authSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const SignInUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { error, loading } = useSelector((state) => ({ ...state.auth }));
	console.log(error, loading);
	const [basicActive, setBasicActive] = useState("tab1");
	const handleBasicClick = (value) => {
		if (value === basicActive) {
			return;
		}
		setBasicActive(value);
	};

	const [loginDatas, setLoginDatas] = useState({
		Email: "",
		Password: "",
	});
	const [registerDatas, setRegisterDatas] = useState({
		FirstName: "",
		LastName: "",
		Email: "",
		Password: "",
	});

	const [emailErrorText, setemailErrorText] = useState("");
	const [pwdErrorText, setpwdErrorText] = useState("");
	const [fnameErrorText, setFnameErrorText] = useState("");
	const [lnameErrorText, setLnameErrorText] = useState("");

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		console.log(loginDatas);
		if (!loginDatas.Email) {
			setemailErrorText("Please enter email");
		}
		if (!loginDatas.Password) {
			setpwdErrorText("Please enter Password");
		}
		if (loginDatas.Email && loginDatas.Password) {
		}

		if (loginDatas.Email && loginDatas.Password) {
			console.log(loginDatas);
			dispatch(login({ loginDatas, toast, navigate }));
		}
	};
	const handleRegisterSubmit = (e) => {
		e.preventDefault();
		if (!registerDatas.Email) {
			setemailErrorText("Please enter email");
		}
		if (!registerDatas.Password) {
			setpwdErrorText("Please enter Password");
		}
		if (!registerDatas.FirstName) {
			setFnameErrorText("Please enter FirstName");
		}
		if (!registerDatas.LastName) {
			setLnameErrorText("Please enter LastName");
		}

		if (
			registerDatas.Email &&
			registerDatas.Password &&
			registerDatas.FirstName &&
			registerDatas.LastName
		) {
			console.log(registerDatas);
			dispatch(register({ registerDatas, toast, navigate }));
		}
	};
	useEffect(() => {
		error && toast.error(error);
	}, [error]);
	return (
		<div className={styles.container}>
			<Navbar />
			<div className={styles.SignInUpWrapper}>
				<div className={styles.tabContainer}>
					<MDBTabs className="mb-3 mt-5">
						<MDBTabsItem>
							<MDBTabsLink onClick={() => handleBasicClick("tab1")} active={basicActive === "tab1"}>
								login
							</MDBTabsLink>
						</MDBTabsItem>
						<MDBTabsItem>
							<MDBTabsLink onClick={() => handleBasicClick("tab2")} active={basicActive === "tab2"}>
								Register
							</MDBTabsLink>
						</MDBTabsItem>
					</MDBTabs>
				</div>
				<div className={styles.logoIcon}>
					<FaRegIdBadge />
				</div>
				{loading && loading ? (
					<Spinner />
				) : (
					<MDBTabsContent className={styles.tabsContent}>
						<MDBTabsPane show={basicActive === "tab1"}>
							<h2 className="mt-3 mb-3">Access your account</h2>
							<form
								className={styles.loginCard}
								onSubmit={handleLoginSubmit}
								style={{ width: "20rem", margin: "auto" }}
								noValidate
							>
								<TextField
									style={{ width: "100%" }}
									id="standard-basic"
									label="Email"
									variant="standard"
									type="email"
									required
									value={loginDatas.Email}
									onChange={(e) => {
										setLoginDatas({ ...loginDatas, Email: e.target.value });
									}}
									error={!!emailErrorText}
									helperText={emailErrorText}
								/>

								<TextField
									id="standard-basic"
									label="Password"
									variant="standard"
									type="password"
									required
									style={{ width: "100%" }}
									value={loginDatas.Password}
									onChange={(e) => {
										setLoginDatas({ ...loginDatas, Password: e.target.value });
									}}
									error={!!pwdErrorText}
									helperText={pwdErrorText}
								/>

								<Button
									size="secondary"
									type="submit"
									variant="contained"
									style={{ width: "100%", marginTop: "25px", marginBottom: "15px" }}
								>
									sign in
								</Button>
							</form>
						</MDBTabsPane>
						<MDBTabsPane show={basicActive === "tab2"}>
							<h2 className="mt-3 mb-3">Create your account</h2>
							<form
								className={styles.loginCard}
								onSubmit={handleRegisterSubmit}
								style={{ width: "20rem", margin: "auto" }}
								noValidate
							>
								<TextField
									id="standard-basic"
									label="First Name"
									variant="standard"
									type="text"
									style={{ width: "100%" }}
									value={registerDatas.FirstName}
									onChange={(e) => {
										setRegisterDatas({ ...registerDatas, FirstName: e.target.value });
									}}
									error={!!fnameErrorText}
									helperText={fnameErrorText}
								/>
								<TextField
									id="standard-basic"
									label="Last Name"
									variant="standard"
									type="text"
									style={{ width: "100%" }}
									value={registerDatas.LastName}
									onChange={(e) => {
										setRegisterDatas({ ...registerDatas, LastName: e.target.value });
									}}
									error={!!lnameErrorText}
									helperText={lnameErrorText}
								/>
								<TextField
									style={{ width: "100%" }}
									id="standard-basic"
									label="Email"
									variant="standard"
									type="email"
									required
									value={registerDatas.Email}
									onChange={(e) => {
										setRegisterDatas({ ...registerDatas, Email: e.target.value });
									}}
									error={!!emailErrorText}
									helperText={emailErrorText}
								/>
								<TextField
									id="standard-basic"
									label="Password"
									variant="standard"
									type="password"
									required
									style={{ width: "100%" }}
									value={registerDatas.Password}
									onChange={(e) => {
										setRegisterDatas({ ...registerDatas, Password: e.target.value });
									}}
									error={!!pwdErrorText}
									helperText={pwdErrorText}
								/>
								<Button
									type="submit"
									size="secondary"
									variant="contained"
									style={{ width: "100%", marginTop: "25px", marginBottom: "15px" }}
								>
									sign up
								</Button>
							</form>
						</MDBTabsPane>
					</MDBTabsContent>
				)}

				<div className={styles.backgroundImage}>
					<img class="img-responsive" width="100%" height="100%" />
				</div>
			</div>
		</div>
	);
};

export default SignInUp;
