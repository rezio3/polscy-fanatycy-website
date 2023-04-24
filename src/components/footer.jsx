import React from "react";
import "../style/css/footer.css";

const Footer = () => {
	return (
		<footer className="footer-container">
			<span className="copyright">
				Polscy Fanatycy 2023 &copy; All Rights Reserved
			</span>
			<div className="icons-container">
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
			</div>
		</footer>
	);
};

export default Footer;
