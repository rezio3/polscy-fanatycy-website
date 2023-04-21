import React from "react";
import "../style/css/header.css";

const Header = () => {
	return (
		<div className="header-container">
			<div className="shadow">
				<div className="header-content">
					<h1>Polscy Fanatycy</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
						inventore repudiandae odio quod nesciunt cum voluptates. Eveniet,
						aliquam. Accusantium, accusamus autem omnis numquam iure dolorum
						tempore hic, totam eum quos distinctio mollitia adipisci esse
						perferendis, perspiciatis nobis! Quo quam rem sed eveniet.
						Consequuntur officia error accusantium amet modi cum aliquam?
					</p>
					<a href="https://www.google.pl">
						Read more <span class="material-symbols-outlined arrow">east</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
