import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

const SinglePost = ( props ) => {

	const loading = props.data.loading;
	const post = props.data.postBy;

	if (loading) {
		return (<p>Loading...</p>);
	}

	return (
		<article className="article">
			<div className="container">
				<h1 className="article-title">{post.title}</h1>
			</div>
			<img
				className="article-image"
				alt={post.featuredImage.title}
				src={post.featuredImage.sourceUrl}
				srcSet={post.featuredImage.srcSet}
			/>
			<div className="container">
				<div dangerouslySetInnerHTML={{ __html: post.content}}></div>
			</div>
		</article>
	);
}


const getPostBySlug = gql`
	query MyQuery( $slug: String ) {
		postBy(uri: $slug) {
			id
			title
			featuredImage {
				srcSet
				mediaItemUrl
				altText
			}
			content
		}
	}
`;

export default graphql(getPostBySlug, {
	options: (props) => {
		const slug = props.slug;

		return {
			variables: {
				slug
			}
		}
	}
})(SinglePost);
