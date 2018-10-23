import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
    <section className="portfolio">
    {data.allContentfulPortfolio.edges.map(({ node }) => (
      <div className="item">
        <img src={node.thumbnail.resize.src} alt="" />
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
             }
           }
         }
       }
     }
}
`
