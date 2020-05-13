import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      backgroundHeader: file(relativePath: { eq: "head-bg-FHD.jpg" }) {
        childImageSharp {
          fixed(quality: 100, width: 1920, height: 214) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      logoImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 442, maxHeight: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
  <header>
    <BackgroundImage fixed={data.backgroundHeader.childImageSharp.fixed}>
      <div className="container logo">
        <Link to="/" style={{ width: '100%' }}>
          <Img fluid={data.logoImage.childImageSharp.fluid} alt="test" style={{ maxWidth: 442, maxHeight: 200, marginLeft: 'auto', marginRight: 'auto' }} />
        </Link>
      </div>
    </BackgroundImage>
  </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
