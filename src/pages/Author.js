import React from 'react';
import Header from '../components/header/Header';
import SingleAuthor from '../components/authors/SingleAuthor';

const Author = ( props ) => {
	return(
		<React.Fragment>
			<Header />
			<SingleAuthor id={props.id}/>
		</React.Fragment>
	);
}

export default Author;
