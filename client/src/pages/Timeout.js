import React from "react";
import styles from "../styles/Navbar.module.css";

const Timeout = () => {
	return (
		<div className={styles.TimeoutContainer}>
			<div className={styles.TimeoutCard}>
				<h1 className={styles.TimeoutHeader}>Your Session Expired!</h1>
				<span className={styles.TimeoutText}>
                    Please <a className={ styles.TimeoutTextLink} href="/signupin">Access</a> here
				</span>
			</div>
		</div>
	);
};

export default Timeout;
