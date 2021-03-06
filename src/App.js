import React from "react";
import { Router } from "@reach/router";

// Import Layouts
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Authors from "./pages/Authors";
import Author from './pages/Author'

// TODO: We can have author slug in url once userby slug available in wp-graphql.
// Ref: https://github.com/wp-graphql/wp-graphql/issues/263

const App = () => {
	return (
		<Router>
			<Home path="/" />
			<About path="/about" />
			<Blogs path="/blog/" />
			<Blog path="/blog/:slug" />
			<Authors path="/author/" />
			<Author path="/author/:id" />
			<NotFound default />
		</Router>
	);
}

export default App;
