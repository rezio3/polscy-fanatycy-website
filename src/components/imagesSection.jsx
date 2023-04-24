import React from "react";
import "../style/css/imagesSection.css";
import soccerImg1 from "../img/soccer-img1.jpg";
import soccerImg2 from "../img/soccer-img2.jpg";

const ImagesSection = () => {
	return (
		<div className="images-section-container">
			<div className="img-container">
				<img src={soccerImg1} alt="soccer img 1" className="image" />
				<div className="shadow"></div>
				<div className="text-container">
					<span className="upper-span">Kiedy mecz</span>
					<h2>Odpalaj mecz 30 maja!</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
						inventore repudiandae odio quod nesciunt cum voluptates. Eveniet,
						aliquam.
					</p>
					<a href="https://www.google.pl">
						Read more <span class="material-symbols-outlined arrow">east</span>
					</a>
				</div>
			</div>
			<div className="img-container">
				<img src={soccerImg2} alt="soccer img 1" className="image" />
				<div className="shadow"></div>

				<div className="text-container">
					<span className="upper-span">Kup se piłkę</span>
					<h2>Piłka z podpisem Adama Małysza i Makłowicza!</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
						inventore repudiandae odio quod nesciunt cum voluptates. Eveniet,
						aliquam.
					</p>
					<a href="https://www.google.pl">
						Read more <span class="material-symbols-outlined arrow">east</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ImagesSection;

{
	/* <div className="soccer-img-1">
				<div className="shadow"></div>
			</div>
			

			<div className="soccer-img-2">
				<div className="shadow"></div>
			</div> */
}
