import React from "react";
import { Router } from "@reach/router";

// Import Layouts
import Home from "./layout/Home";
import About from "./layout/About";
import Articles from "./layout/Articles";
import Article from "./layout/Article";
import NotFound from "./layout/NotFound";

function App() {
	return (
		<Router>
			<Home path="/" />
			<About path="/about" />
			<Articles path="/articles/" />
			<Article path="/article/:id" />
			<NotFound default />
		</Router>
	);
}

export default App;
