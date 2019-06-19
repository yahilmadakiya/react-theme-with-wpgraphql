import React from "react";

// Import Components
import Header from "./Header/Header";
import Posts from "./Posts/Posts";

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<Posts />
		</React.Fragment>
	);
};

export default Home;
