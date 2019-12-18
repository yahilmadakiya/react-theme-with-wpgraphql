import React from "react";
import { Link } from "@reach/router";
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
						// TODO: Move this to component called c-card
						<div key={post.id}>
							<Link to={`/blog/${post.slug}`}>
								<img
									alt={post.featuredImage.title}
									src={post.featuredImage.sourceUrl}
									srcSet={post.featuredImage.srcSet}
								/>
							</Link>

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

							<h2 className="post-listing-title">
								<Link
									className="unstyle-link"
									to={`/blog/${post.slug}`}>
										{post.title}
								</Link>
							</h2>

							<div className="post-listing-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} />

							<span className="post-listing-author">
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
						name
					}
				}
			}
		}
	}
`;

export default graphql(getPosts)(Posts);
