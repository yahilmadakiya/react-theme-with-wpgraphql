import React from "react";
import { graphql } from "react-apollo";
import { gql } from "apollo-boost";

const Posts = props => {
	const { loading, posts } = props.data;

	if (loading) {
		return <p className="container">Loading Data...</p>;
	}

	if (posts.items) {
		return (
			<div className="container post-listing post-listing-first-large">
				{posts.items.map(item => {
					const { post } = item;

					return (
						<div key={post.id}>
							<img src={post.featuredImage.sourceUrl} />

							{post.categories.nodes && (
								<div className="post-category">
									{post.categories.nodes.map(category => {
										return (
											<a
												href="#"
												key={category.categoryId}
											>
												{category.name}
											</a>
										);
									})}
								</div>
							)}

							<h2>{post.title}</h2>
							<span>{post.author.name}</span>
						</div>
					);
				})}
			</div>
		);
	}

	return <div>No Posts</div>;
};

export default graphql(gql`
	{
		posts(first: 10) {
			pageInfo {
				hasNextPage
				endCursor
			}
			items: edges {
				cursor
				post: node {
					id
					title
					date
					featuredImage {
						sourceUrl
					}
					categories {
						nodes {
							categoryId
							name
						}
					}
					author {
						name
					}
				}
			}
		}
	}
`)(Posts);
