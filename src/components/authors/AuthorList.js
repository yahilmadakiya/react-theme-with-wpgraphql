import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import { Link } from '@reach/router';

import Loading from '../Loading';

const AuthorList = ( props ) => {

	const { loading, users } = props.data;

	if (loading) {
		return <Loading />;
	}

	if (users.items ) {
		return(
			<div className="container">
				{
					users.items.map((item, index) => {
						const { user } = item;

						return(
							<div key={index}>
								<Link to={`/author/${user.id}`}>
									{user.name}
								</Link>
							</div>
						);
					} )
				}
			</div>
		);

	}
}

const getAuthorList = gql`
query MyQuery {
  users {
	items: edges {
	  user: node {
		id
		name
		slug
		description
		avatar {
		  url
		}
	  }
	}
  }
}
`;

export default graphql(getAuthorList)(AuthorList);
