import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PortfolioIndex from '../components/portfolioIndex'

const IndexPage = ({ data }) => (
  <Layout>
    <section className="hero">
      <h1>I Design, Develop & Support web apps</h1>
      <p>Usually I design and develop world-class digital products, tools and experiences for happy customers. <a href="mailto:hello@peko.lt">Are you one of them?</a></p>  
    </section>
    <section className="portfolio">
      {data.allContentfulPortfolio.edges.map((edge, id) => (
      <PortfolioIndex key={id} node={edge.node} />
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
            fluid(maxWidth:1920) {
              src
            }
          }
        }
      }
    }
  }
`