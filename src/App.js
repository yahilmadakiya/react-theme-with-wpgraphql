import React from "react";
import { Router } from "@reach/router";

// Import Layouts
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Authors from "./pages/Authors";

const App = () => {
	return (
		<Router>
			<Home path="/" />
			<About path="/about" />
			<Blogs path="/blog/" />
			<Blog path="/blog/:slug" />
			<Authors path="/authors/" />
			<NotFound default />
		</Router>
	);
}

export default App;
