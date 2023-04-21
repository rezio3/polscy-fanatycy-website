import React from "react";
import "../style/css/imagesSection.css";

const ImagesSection = () => {
	return (
		<div className="images-section-container">
			<div className="soccer-img-1">
				<div className="shadow">
					<div className="text-container">
						<span className="upper-span">Kiedy mecz</span>
						<h2>Odpalaj mecz 30 maja!</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
							inventore repudiandae odio quod nesciunt cum voluptates. Eveniet,
							aliquam.
						</p>
						<a href="https://www.google.pl">
							Read more{" "}
							<span class="material-symbols-outlined arrow">east</span>
						</a>
					</div>
				</div>
			</div>

			<div className="soccer-img-2">
				<div className="shadow">
					<div className="text-container">
						<span className="upper-span">Kup se piłkę</span>
						<h2>Piłka z podpisem Adama Małysza i Makłowicza!</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
							inventore repudiandae odio quod nesciunt cum voluptates. Eveniet,
							aliquam.
						</p>
						<a href="https://www.google.pl">
							Read more{" "}
							<span class="material-symbols-outlined arrow">east</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImagesSection;
