import React from "react";
import { Router } from "@reach/router";

// Import Layouts
import Home from "./layout/Home";
import About from "./layout/About";

function App() {
	return (
		<Router>
			<Home path="/" />
			<About path="/about" />
		</Router>
	);
}

export default App;
