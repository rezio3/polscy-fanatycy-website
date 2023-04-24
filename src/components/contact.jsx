import React from "react";
import "../style/css/contact.css";
import ballImg from "../img/contact-ball.jpg";

const Contact = () => {
	return (
		<div className="contact-container">
			<img src={ballImg} width="400px" className="contact-img" />
			<div className="contact-text-container">
				<span>Stay informed with us</span>
				<h2>Stay up to date, collaborate and help us grow!</h2>
				<span>Just send up your will</span>
				<button className="contact-btn">Write us!</button>
			</div>
		</div>
	);
};

export default Contact;
