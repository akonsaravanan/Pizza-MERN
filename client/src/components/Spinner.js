import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import styles from "../styles/Footer.module.css";

const Spinner = () => {
	return (
		<>
			<MDBSpinner
				className={styles.SpinnerComponent}
				style={{ width: "2rem", height: "2rem" }}
				grow
				color="primary"
			>
				<span className="visually-hidden">Loading...</span>
			</MDBSpinner>
		</>
	);
};

export default Spinner;
