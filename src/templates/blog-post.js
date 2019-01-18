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
        {post.heroTop && <img src={post.heroTop.fluid.src} alt="" />}

        {post.descriptionBigText &&
          <div className="portfolioTextBlock"
            dangerouslySetInnerHTML={{
              __html: post.descriptionBigText.childMarkdownRemark.html,
            }}
          />
        }

        {post.heroSecond && <img src={post.heroSecond.fluid.src} alt="" />}

        {post.descriptionSmallText &&
          <div className="portfolioTextBlock"
            dangerouslySetInnerHTML={{
              __html: post.descriptionSmallText.childMarkdownRemark.html,
            }}
          />
        }

        {post.heroThird && <img src={post.heroThird.fluid.src} alt="" />}
        {post.heroFour && <img src={post.heroFour.fluid.src} alt="" />}
        {post.heroFive && <img src={post.heroFive.fluid.src} alt="" />}
        {post.heroSix && <img src={post.heroSix.fluid.src} alt="" />}
        {post.heroSeven && <img src={post.heroSeven.fluid.src} alt="" />}
        {post.heroEight && <img src={post.heroEight.fluid.src} alt="" />}
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
    heroSecond {
       fluid(maxWidth:1920) {
        src
      }
    }
    heroThird {
       fluid(maxWidth:1920) {
        src
      }
    }
    heroFour {
       fluid(maxWidth:1920) {
        src
      }
    }
    heroFive {
       fluid(maxWidth:1920) {
        src
      }
    }
    heroSix {
      fluid(maxWidth:1920) {
       src
      }
    }
    heroSeven {
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
