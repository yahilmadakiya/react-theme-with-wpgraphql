import React, { Component} from 'react';
import Header from '../components/Header/Header';
import SinglePost from '../components/Posts/single-post'

const Blog = ( props ) => {

	return (
		<React.Fragment>
			<Header />
			<SinglePost slug={props.slug}/>
		</React.Fragment>
	);
}

export default Blog;
