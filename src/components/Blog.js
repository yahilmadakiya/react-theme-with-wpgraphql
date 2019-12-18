import React, { Component} from 'react';
import Header from './Header/Header';
import SinglePost from './Posts/single-post'

const Blog = ( props ) => {

	return (
		<React.Fragment>
			<Header />
			<SinglePost slug={props.slug}/>
		</React.Fragment>
	);
}

export default Blog;
