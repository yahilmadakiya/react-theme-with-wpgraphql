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
							<a href="#">
								<img
									alt={post.featuredImage.title}
									src={post.featuredImage.sourceUrl}
									srcSet={post.featuredImage.srcSet}
								/>
							</a>

							{post.categories.nodes && (
								<div className="category-listing">
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

							<h2 className="post-title">
								<a href="#">{post.title}</a>
							</h2>
							<span className="post-author">
								By: <a href="#">{post.author.name}</a>
							</span>
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
					link
					date
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
						name
					}
				}
			}
		}
	}
`)(Posts);
