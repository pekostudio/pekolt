import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Newsitems from '../components/newsitems'

const NewsPage = ({ data }) => {
  return (
    <Layout>
      <section className="newsLayout">
        {data.allContentfulBlog.edges.map((edge, id) => (
          <Newsitems key={id} node={edge.node} />
        ))}
      </section>
    </Layout>
  )
}

export default NewsPage

export const newsQuery = graphql`
  query newsQuery {
    allContentfulBlog {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`
