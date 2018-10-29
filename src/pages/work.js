import React from "react"
import { graphql } from "gatsby"
import Link from 'gatsby-link'
import Layout from "../components/layout"

const BlogPost = ({node}) => {
  return (
    <div className="item">
      <Link to={node.slug}><img src={node.thumbnail.fluid.src} alt="" /></Link>
      <Link to={node.slug}><h3>{node.title}</h3></Link>
    </div>
  )
}

const WorkPage = ({data}) => (
  <Layout>
    <section className="portfolio">
      {data.allContentfulPortfolio.edges.map((edge) => <BlogPost node={edge.node} />)}
    </section>
  </Layout>
)

export default WorkPage

export const workQuery = graphql`
query workQuery {
    allContentfulPortfolio {
        edges {
          node {
            title
            slug
            thumbnail {
               fluid(maxWidth:1920) {
                 src
               }
            }
         }
       }
    }
  }
`
