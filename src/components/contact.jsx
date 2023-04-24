import React from "react";
import "../style/css/contact.css";
import ballImg from "../img/contact-ball.jpg";

const Contact = () => {
	return (
		<div className="contact-container">
			<img src={ballImg} width="400px" />
			<div className="contact-text-container">
				<span>Stay informed with us</span>
				<h2>Stay up to date with news from the world of technology</h2>
				<span>Sign up for our Newsletter!</span>
			</div>
		</div>
	);
};

export default Contact;
