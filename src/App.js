import React from "react";
import { Router } from "@reach/router";

// Import Layouts
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import NotFound from "./components/NotFound";

const App = () => {
	return (
		<Router>
			<Home path="/" />
			<About path="/about" />
			<Blogs path="/blog/" />
			<Blog path="/blog/:slug" />
			<NotFound default />
		</Router>
	);
}

export default App;
