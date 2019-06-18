import React from "react";

// Import Components
import Header from "../components/Header";
import Posts from "../components/Posts";

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<Posts />
		</React.Fragment>
	);
};

export default Home;
