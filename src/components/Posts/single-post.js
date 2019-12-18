import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';

class SinglePost extends Component {

    render() {
        const data = this.props.data;

        if (data.loading) {
            return (<p>Loading...</p>);
        }

        return (
            <article className="container">
                <img src={data.postBy.featuredImage.mediaItemUrl} />
                {data.postBy.title}
            </article>
        );
    }
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
