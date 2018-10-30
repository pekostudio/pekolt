import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Layout from '../components/layout'

const BlogPost = ({ node }) => {
  return (
    <div className="item">
      <Link to={node.slug}>
        <img src={node.thumbnail.fluid.src} alt="" />
      </Link>
      <Link to={node.slug}>
        <h3>{node.title}</h3>
      </Link>
    </div>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <section className="hero">
      <h1>I design, build and support websites for – YOU</h1>
      <p>
        Custom solutions, WordPress, JAMstack sites, Headless CMS, Shopify, Wix websites, iOS & Android mobile
        applications
      </p>
    </section>
    <section className="portfolio">
      {data.allContentfulPortfolio.edges.map(edge => (
        <BlogPost node={edge.node} />
      ))}
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulPortfolio {
      edges {
        node {
          title
          slug
          thumbnail {
            fluid(maxWidth: 1920) {
              src
            }
          }
        }
      }
    }
  }
`
