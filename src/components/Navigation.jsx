import React from "react";
import "../style/css/navigation.css";

const Navigation = () => {
	return (
		<nav className="nav-bar">
			<a href="https://www.instagram.com/polscyfanatycy_/">
				<i className="fa-brands fa-instagram"></i>
			</a>
			<a href="https://www.facebook.com/PFpolscyfanatycy">
				<i class="fa-brands fa-square-facebook"></i>
			</a>
			<a href="https://www.youtube.com/channel/UCXBEVpYn4wxI3kMbGq3KPtg">
				<i class="fa-brands fa-youtube"></i>
			</a>
			<a href="https://www.google.com">
				<i class="fa-brands fa-tiktok"></i>
			</a>
		</nav>
	);
};

export default Navigation;
