# Wordpress Bloging App Using React and GraphQL :zap:

## Demo :movie_camera:
![](demo.gif)

## Getting Started :surfer:
These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Installing :wrench:
1. Clone this repo in `git@github.com:yahilmadakiya/react-theme-with-wpgraphql.git`
2. `cd react-theme-with-wpgraphql`
3. `npm install`

## Configure Backend( WordPress site ) :wrench:
### Add GraphQl support on WordPress
Clone and activate the following plugins, in your WordPress plugin directory:

- [wp-graphql](https://github.com/wp-graphql/wp-graphql) Exposes graphql for WordPress
- [wp-graphiql](https://github.com/wp-graphql/wp-graphiql) Provides GraphiQL IDE (playground) to the WP-Admin

## Configure Front end :wrench:
* Rename `client-config-example.js` to `client-config.js` inside `src` directory and update your React Site URL

```JS
const config = {
	siteUrl: 'http://localhost:3000',
	graphqlUrl: 'http://localhost:8080/graphql',
};
```


## Commands :computer:

* `npm run start` Runs the node server in development mode

## License :page_with_curl:

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
