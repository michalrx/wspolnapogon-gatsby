import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Siema to jest test!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/pilka-nozna/tabela/">Tabela - Pogoń (przykładowa strona)</Link>
    <br />
    <Link to="/2018/10/king-przegral-w-warszawie-legia-obronila-swoj-parkiet/">King Szczecin - przykładowy artykuł</Link>
    <br />
    <Link to="/posts/">Wszystkie artykuly</Link>
  </Layout>
)

export default IndexPage
