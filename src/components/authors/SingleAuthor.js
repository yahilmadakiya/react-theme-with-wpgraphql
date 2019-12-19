import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

import Loading from './../../components/Loading';
import Card from "./../posts/Card";

const SingleAuthor = (props) => {

	console.log(props);

	if (!props.data ) return false;

	const loading = props.data.loading;
	const user = props.data.user;

	if (loading) {
		return <Loading />;
	}

	return(
		<div className="container">
			<h2>{user.name}</h2>

			<div className="post-listing post-listing-first-large">
				{user.posts.items.map(item => {
					const { post } = item;

					return <Card key={post.id} post={post} ></Card>
				})}
			</div>
		</div>
	);
}

const getAuthor = gql`
	query MyQuery( $id: ID! ) {
		user(id: $id) {
			name
			posts {
				items: edges {
					post: node {
						id
						title
						slug
						link
						date
						excerpt
						featuredImage {
							title
							sourceUrl
							srcSet
						}
						categories {
							nodes {
								categoryId
								name
							}
						}
					}
				}
			}
		}
	}
`;

export default graphql( getAuthor, {
	options: ( props ) => {
		const id = props.id;

		return {
			variables: {
				id
			}
		}
	}
} )( SingleAuthor );
