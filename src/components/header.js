import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Img from 'gatsby-image'

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "new-logo-sm.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
  <header>
    <div className="container">
      <div className="logo">
        <Link to="/">
          <Img fluid={data.logoImage.childImageSharp.fluid} alt="test" style={{ maxWidth: 200}} />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>homepage</li>
          <li>articles</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
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
