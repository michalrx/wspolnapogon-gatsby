import React from "react"
import { Link, useStaticQuery, graphql  } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      wordpressPost(categories: {elemMatch: {name: {eq: "Aktualności"}}}) {
        title
        path
        id
        date
        categories {
          name
        }
        featured_media {
          localFile {
            childImageSharp{
                fluid(maxWidth: 800, maxHeight: 500){
                    ...GatsbyImageSharpFluid
                }
            }
          }
        }
      }
      allWordpressPost(limit: 4, skip: 1, filter: {categories: {elemMatch: {name: {eq: "Aktualności"}}}}) {
        edges {
          node {
            date
            id
            title
            path
            categories {
              name
            }
            featured_media {
              localFile {
                childImageSharp{
                    fluid(maxWidth: 400, maxHeight: 250){
                        ...GatsbyImageSharpFluid
                    }
                }
              }
            }
          }
        }
      }
    }
  `)
  //console.log(data.allWordpressPost.edges);
  return (
  <Layout>
    <SEO title="Home" />
    <div className="container homepage">
      <div className="row">
        <div className="col-md-8 p-0 homepage--post-large">
          <div style={{height: '100%', width: '100%'}}>
            <Link to={data.wordpressPost.path}>
              <Img fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid} style={{height: '100%', width: '100%'}} />
              <div className="title">
                {
                  data.wordpressPost.categories.map(el => {
                    if(el.name === 'Aktualności') {
                      return null;
                    } else {
                      return (
                        <span key={el.name} className="category">{el.name}</span>
                      )
                    }
                  })
                }
                <h1>{data.wordpressPost.title}</h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-md-4" style={{background: '#f7f7f7'}}>
          <div className="row">
            <div className="col-md-12 px-3 pt-3 pb-0">
              <h3>Aktualności</h3>
            </div>
            {data.allWordpressPost.edges.map((el) => {
              return (
                <div key={el.node.id} className="col-md-12 px-3 py-2 homepage--post-small">
                  <div className="post">
                  <Link to={el.node.path}><Img fluid={el.node.featured_media.localFile.childImageSharp.fluid} /></Link>
                    <div className="content pl-2">
                      {
                        el.node.categories.map(el => {
                          if(el.name === 'Aktualności') {
                            return null;
                          } else {
                            return (
                              <span key={el.name} className="category">{el.name}</span>
                            )
                          }
                        })
                      }
                      <div className="title">
                        <Link to={el.node.path}><h4>{el.node.title}</h4></Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-3 p-5" style={{background: '#333'}}>
      test
    </div>
    <h1>Siema to jest test!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/pilka-nozna/tabela/">Tabela - Pogoń (przykładowa strona)</Link>
    <br />
    <Link to="/2018/10/king-przegral-w-warszawie-legia-obronila-swoj-parkiet/">King Szczecin - przykładowy artykuł</Link>
    <br />
    <Link to="/aktualnosci/">Wszystkie artykuly</Link>
  </Layout>
)}

export default IndexPage
