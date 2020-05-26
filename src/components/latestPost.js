import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

const LatestPost = () => {
    const data = useStaticQuery(graphql`
    query {
        wordpressPost {
          title
          path
        }
      }
    `)

  return (
    <div className="latest-post mb-3">
        <div className="container latest-post--wrapper">
            <div className="row">
                <div className="col-12">
                    Najnowsze: <Link to={data.wordpressPost.path}>{data.wordpressPost.title}</Link>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default LatestPost
