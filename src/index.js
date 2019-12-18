import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import config from './client-config';

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

// apollo client setup
const client = new ApolloClient({
	uri: config.graphqlUrl
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
