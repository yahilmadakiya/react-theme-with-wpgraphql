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
            <article className="article">
                <img
                    className="article-image"
                    alt={data.postBy.featuredImage.title}
                    src={data.postBy.featuredImage.sourceUrl}
                    srcSet={data.postBy.featuredImage.srcSet}
                />
                <div className="container">
                    <h1 className="article-title">{data.postBy.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: data.postBy.content}}></div>
                </div>
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
