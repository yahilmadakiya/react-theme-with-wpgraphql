import React from 'react';
import { Link } from "@reach/router";

const Card = ( props ) => {

	const { post } = props;

	return(
		<div>
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

			{ post.author && (
				<span className="post-listing-author">
					By: <Link
						to={`/author/${post.author.id}`}>
						{post.author.name}
					</Link>
				</span>
			)}
		</div>
	);
}

export default Card;
