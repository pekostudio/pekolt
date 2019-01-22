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
        {post.heroTop && <img src={post.heroTop.fluid.srcWebp} alt="" />}

        {post.descriptionBigText &&
          <div className="portfolioTextBlock"
            dangerouslySetInnerHTML={{
              __html: post.descriptionBigText.childMarkdownRemark.html,
            }}
          />
        }

        {post.heroSecond && <img src={post.heroSecond.fluid.srcWebp} alt="" />}

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
        {post.heroNine && <img src={post.heroNine.fluid.src} alt="" />}
        {post.heroTen && <img src={post.heroTen.fluid.src} alt="" />}
        {post.heroEleven && <img src={post.heroEleven.fluid.src} alt="" />}
        {post.heroTwelve && <img src={post.heroTwelve.fluid.src} alt="" />}
        {post.hero13 && <img src={post.hero13.fluid.src} alt="" />}
        {post.hero14 && <img src={post.hero14.fluid.src} alt="" />}
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
    heroTop {
        fluid(maxWidth:1920) {
          srcWebp
      }
    }
    heroSecond {
        fluid(maxWidth:1920) {
          srcWebp
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
    heroEight {
      fluid(maxWidth:1920) {
       src
      }
    }  
    heroNine {
      fluid(maxWidth:1920) {
       src
      }
    }
    heroTen {
      fluid(maxWidth:1920) {
       src
      }
    }
    heroEleven {
      fluid(maxWidth:1920) {
       src
      }
    }
    heroTwelve {
      fluid(maxWidth:1920) {
       src
      }
    }
    hero13 {
      fluid(maxWidth:1920) {
       src
      }
    }
    hero14 {
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
