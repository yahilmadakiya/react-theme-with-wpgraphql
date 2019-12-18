import React from "react";

// Import Components
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<Posts />
		</React.Fragment>
	);
};

export default Home;
