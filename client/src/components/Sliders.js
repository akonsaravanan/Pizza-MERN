import React from "react";
import { sliderImages } from "./MenuItems";
import styles from "../styles/Sliders.module.css";
import Leftarrow from "../images/arrowl.png";
import Rightarrow from "../images/arrowr.png";

export const Sliders = () => {
	return (
		<div className={styles.container}>
			<div className={styles.HeroBackground}>
				<img src="" alt="" class="img-fluid" width="100%" height="100%" />
			</div>
			<div className={styles.HeroContentImage}>
				<img
					src="https://res.cloudinary.com/sara93/image/upload/v1661270667/pizza%20mern/pngwing.com_1_yu6pia.png"
					alt=""
					className={styles.HeroContentImagePizza}
					width="100%"
					height="100%"
				/>
				<img
					src="https://res.cloudinary.com/sara93/image/upload/v1661270668/pizza%20mern/pngwing.com_mejwuh.png"
					alt=""
					width="100%"
					height="100%"
					className={styles.HeroContentImageSmoke}
				/>
				<img
					src="https://res.cloudinary.com/sara93/image/upload/v1661151005/pizza%20mern/25_zldgjc.png"
					alt=""
					width="100%"
					height="100%"
					className={styles.HeroContentImageTomato}
				/>
				<img
					src="https://res.cloudinary.com/sara93/image/upload/v1661274716/pizza%20mern/46_mucsue.png"
					alt=""
					width="100%"
					height="100%"
					className={styles.HeroContentImageChilly}
				/>
				<img
					src="https://res.cloudinary.com/sara93/image/upload/v1661535879/pizza%20mern/pngwing.com_dorkgq.png"
					alt=""
					width="100%"
					height="100%"
					className={styles.HeroContentImageOnion}
				/>
			</div>

			{/* <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
				<div class="carousel-inner">
					{sliderImages.map((data, index) => (
						<div
							class={data.active ? "carousel-item active" : "carousel-item"}
							data-bs-interval="4000"
						>
							<img
								src={data.img}
								class="d-block w-100"
								style={{
									height: "100vh",
									overflow: "hidden ! important",
									maxWidth: "100%",
									objectFit: "cover",
								}}
							/>
						</div>
					))}
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleFade"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div> */}
			<div className={styles.NavOfferImageContainer}>
				<img
				// src="https://res.cloudinary.com/sara93/image/upload/v1661150999/pizza%20mern/36_vu3a6z.png"
				// src="https://res.cloudinary.com/sara93/image/upload/v1661150999/pizza%20mern/34_zzezui.png"
				// width="300px"
				// height="300px"
				// className={styles.offerImage}
				// style={{ display: "inline-block", paddingLeft: "5px" }}
				/>
			</div>
		</div>
	);
};
