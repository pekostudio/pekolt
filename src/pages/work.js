import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Portfolio from '../components/portfolio';

const WorkPage = ({ data }) => {
  return (
    <Layout>
      <section className="portfolio3">
        {data.allContentfulPortfolio.edges.map((edge, id) => (
          <Portfolio key={id} node={edge.node} />
        ))}
      </section>
    </Layout>
  )
}

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
