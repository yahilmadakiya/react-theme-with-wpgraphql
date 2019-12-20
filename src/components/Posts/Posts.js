import React from "react";

import { graphql } from "react-apollo";
import { gql } from "apollo-boost";
import Card from "./Card";
import Loading from './../Loading';

const Posts = props => {
	const { loading, posts } = props.data;

	if (loading) {
		return <Loading />
	}

	if (posts.items) {
		return (
			<div className="container post-listing post-listing-first-large">
				{posts.items.map(item => {
					const { post } = item;

					return <Card key={post.id} post={post} ></Card>
				})}
			</div>
		);
	}

	return <div>No Posts</div>;
};

const getPosts = gql`
	{
		posts(first: 11) {
			pageInfo {
				hasNextPage
				endCursor
			}
			items: edges {
				cursor
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
					author {
						id
						name
						slug
					}
				}
			}
		}
	}
`;

export default graphql(getPosts)(Posts);
