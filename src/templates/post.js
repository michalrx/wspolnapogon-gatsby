import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Post = ({ data }) => {
    const post = data.wordpressPost;
    const featuredImg = (post.featured_media && post.featured_media.localFile) ? post.featured_media.localFile.childImageSharp.fluid : null

    return (
        <Layout>
            <SEO title={post.title} />
            <h1>{post.title}</h1>
            {featuredImg &&
                <Img fluid={featuredImg} />
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