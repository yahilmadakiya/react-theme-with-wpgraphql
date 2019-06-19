import React from "react";
import { Router } from "@reach/router";

// Import Layouts
import Home from "./components/Home";
import About from "./components/About";
import Articles from "./components/Articles";
import Article from "./components/Article";
import NotFound from "./components/NotFound";

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
