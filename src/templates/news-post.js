import React from 'react'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import get from 'lodash/get'

class NewsPost extends React.Component {
  render() {
    const newsPost = get(this.props, 'data.contentfulBlog')
    const newsTitle = get(this.props, 'data.contentfulBlog.title')
    
    return (
      <Layout>
        <section className="hero">
          <h1>{newsTitle}</h1>
        </section>
        <section className="portfolioPage">
          {newsPost.thumbnail && <img src={newsPost.thumbnail.fluid.src} alt="" />}

          {newsPost.descriptionPost &&
          <div className="portfolioTextBlock"
            dangerouslySetInnerHTML={{
              __html: newsPost.descriptionPost.childMarkdownRemark.html,
            }}
          />
          }
        </section>
      </Layout>
    )
  }
}

NewsPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default NewsPost

export const pageQuery = graphql`
query newsPostQuery($slug: String!) {
  contentfulBlog(slug: { eq: $slug }) {
    title
    slug
    thumbnail {
        fluid(maxWidth:1920) {
          src
        }
      }
    descriptionPost {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`