import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import styles from "../styles/Footer.module.css";

const Spinner = () => {
	return (
		<>
			<MDBSpinner
				className={styles.SpinnerComponent}
				style={{ width: "5rem", height: "5rem" }}
				grow
				color="primary"
			>
				<span className="visually-hidden">Loading...</span>
			</MDBSpinner>
		</>
	);
};

export default Spinner;
