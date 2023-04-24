import React from "react";
import "../style/css/blog.css";

const Blog = () => {
	return (
		<div className="blog-container">
			<h2>
				After reading the article, you will become smart in this area, a real
				expert
			</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
				tenetur ipsam quo ipsa excepturi quod itaque mollitia debitis, omnis
				magni architecto voluptatibus soluta adipisci explicabo similique magnam
				a, dolor sapiente voluptates eligendi, accusantium nisi.
			</p>
			<a href="https://www.google.pl">
				Read more <span class="material-symbols-outlined arrow">east</span>
			</a>
		</div>
	);
};

export default Blog;
