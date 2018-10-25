import React from 'react'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import get from 'lodash/get'

class BlogPost extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulPortfolio')
    const siteTitle = get(this.props, 'data.contentfulPortfolio.title')

    return (
      <Layout>
      <section className="hero">
        <h1>{siteTitle}</h1>
      </section>
      <section className="portfolioPage">
        <img src={post.thumbnail.fluid.src} alt="" />
        {post.descriptionBigText &&
          <div className="largeblock"
            dangerouslySetInnerHTML={{
              __html: post.descriptionBigText.childMarkdownRemark.html,
            }}
          />
        }

        {post.heroTop && <img src={post.heroTop.fluid.src} alt="" />}

        {post.descriptionSmallText &&
          <div className="largeblock"
            dangerouslySetInnerHTML={{
              __html: post.descriptionSmallText.childMarkdownRemark.html,
            }}
          />
        }

      </section>
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
query blogPostQuery($slug: String!) {
  contentfulPortfolio(slug: { eq: $slug }) {
   title
   thumbnail {
      fluid(maxWidth:1920) {
        src
      }
   }
   heroTop {
      fluid(maxWidth:1920) {
       src
     }
   }
   descriptionBigText {
     childMarkdownRemark {
       html
     }
   }
   descriptionSmallText {
     childMarkdownRemark {
       html
     }
   }
 }
}
`
