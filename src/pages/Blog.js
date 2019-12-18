import React from 'react';
import Header from '../components/header/Header';
import SinglePost from '../components/posts/SinglePost'

const Blog = ( props ) => {

	return (
		<React.Fragment>
			<Header />
			<SinglePost slug={props.slug}/>
		</React.Fragment>
	);
}

export default Blog;
