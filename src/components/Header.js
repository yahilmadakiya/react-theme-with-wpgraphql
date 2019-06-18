import React from "react";
import { Link } from "@reach/router";

const Header = () => {
	return (
		<header className="site-header-wrapper">
			<div className="site-header container">
				<h1>
					<a href="/">Y`ahil</a>
				</h1>
				<nav>
					<Link to="/">01 Home</Link>
					<Link to="/about/">02 About</Link>
					<Link to="/articles/">03 Articles</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
