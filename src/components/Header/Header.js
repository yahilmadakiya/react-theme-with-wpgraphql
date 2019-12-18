import React from "react";
import { Link } from "@reach/router";

const Header = () => {
	return (
		<header className="site-header-wrapper">
			<div className="site-header container">
				<h1>
					<a className="unstyle-link" href="/">Y`ahil</a>
				</h1>
				<nav>
					<Link className="unstyle-link" to="/">Home</Link>
					<Link className="unstyle-link" to="/about/">About</Link>
					<Link className="unstyle-link" to="/articles/">Articles</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
