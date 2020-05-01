import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
    const post = data.wordpressPost;
    const fluid = post.featured_media.localFile.childImageSharp.fluid

    return (
        <Layout>
            <SEO title={post.title} />
            <h1>{post.title}</h1>
            {/* <img src={post.featured_media.localFile.url} alt={post.title} /> */}
            {fluid &&
                // <Img resolutions={resolutions}/>
                <Img fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid} />
            }
            <div dangerouslySetInnerHTML={{__html: post.content}} />
        </Layout>
    )
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
          localFile {
            childImageSharp{
                fluid(maxWidth: 1000){
                    ...GatsbyImageSharpFluid
                }
            }
          }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`