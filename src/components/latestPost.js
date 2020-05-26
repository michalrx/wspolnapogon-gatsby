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
    //console.log(data);
  return (
    <div className="mb-3" style={{
        background: '#860d03',
        // background: '#001c34',
        // background: '#262626',
        // marginBottom: '30px',
      }}>
        <div className="container" style={{
            // margin: `0 auto`,
            // maxWidth: 1400,
            // padding: `10px 15px`,
            padding: `10px 0`,
            fontSize: `0.9em`,
            color: `#fff`,
        }}>
            <div className="row">
                <div className="col-12">
                    Najnowsze: <Link to={data.wordpressPost.path} style={{color: '#fff', textDecoration: 'none'}}>{data.wordpressPost.title}</Link>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default LatestPost
