import React from "react";
import Link from "gatsby-link";
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url}>{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

const PostsPage = ({ data, pageContext }) => {
    const { group, index, first, last, pageCount } = pageContext;
    const previousUrl = index - 1 === 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();

    return (
        <Layout>
            <SEO title="All articles" />
            <h4>{pageCount} Pages</h4>

            <div className="all-posts row">
                {group.map(({ node }) => (
                    <div key={node.path} className={"col-md-4"} style={{ marginBottom: 50 }}>

                        {node.featured_media && node.featured_media.localFile &&
                            <Link to={node.path}>
                                <Img fluid={node.featured_media.localFile.childImageSharp.fluid} />
                            </Link>
                        }


                        <Link to={node.path}>
                            <h3>{node.title}</h3>
                        </Link>

                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                        {node.date}
                    </div>
                ))}
            </div>
            <div className="previousLink">
                <NavLink test={first} url={"/posts/" + previousUrl} text="Go to Previous Page" />
            </div>
            <div className="nextLink">
                <NavLink test={last} url={"/posts/" + nextUrl} text="Go to Next Page" />
            </div>
        </Layout>
    );
};
export default PostsPage;