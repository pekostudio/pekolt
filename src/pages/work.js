import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
    <section className="hero">
      <h1>I design, build and support <br /> websites for – YOU</h1>
      <p>Custom solutions, WordPress, Shopify, Wix websites, iOS & Android mobile applications</p>
    </section>
    <section className="portfolio">
    {data.allContentfulPortfolio.edges.map(({ node }) => (
      <div className="item">
        <img src={node.thumbnail.resize.src} />
        <h3>{node.title}</h3>
      </div>
    ))}
    </section>
    </Layout>
  )
}

export const query = graphql`
query {
    allContentfulPortfolio {
       edges {
         node {
           title,
           thumbnail {
             id,
             resize (width: 1440 height: 1218) {
               src
             },
           }
         }
       }
     }
}
`
