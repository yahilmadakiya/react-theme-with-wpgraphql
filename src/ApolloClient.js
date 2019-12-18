import ApolloClient from "apollo-boost";
import config from './client-config';

// apollo client setup
const client = new ApolloClient({
    uri: config.graphqlUrl
});

export default client;
