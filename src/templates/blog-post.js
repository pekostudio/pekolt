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

        {post.heroThird && <img src={post.heroThird.fluid.srcWebp} alt="" />}
        {post.heroFour && <img src={post.heroFour.fluid.srcWebp} alt="" />}
        {post.heroFive && <img src={post.heroFive.fluid.srcWebp} alt="" />}
        {post.heroSix && <img src={post.heroSix.fluid.srcWebp} alt="" />}
        {post.heroSeven && <img src={post.heroSeven.fluid.srcWebp} alt="" />}
        {post.heroEight && <img src={post.heroEight.fluid.srcWebp} alt="" />}
        {post.heroNine && <img src={post.heroNine.fluid.srcWebp} alt="" />}
        {post.heroTen && <img src={post.heroTen.fluid.srcWebp} alt="" />}
        {post.heroEleven && <img src={post.heroEleven.fluid.srcWebp} alt="" />}
        {post.heroTwelve && <img src={post.heroTwelve.fluid.srcWebp} alt="" />}
        {post.hero13 && <img src={post.hero13.fluid.srcWebp} alt="" />}
        {post.hero14 && <img src={post.hero14.fluid.srcWebp} alt="" />}
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
        srcWebp
      }
    }
    heroFour {
       fluid(maxWidth:1920) {
        srcWebp
      }
    }
    heroFive {
       fluid(maxWidth:1920) {
        srcWebp
      }
    }
    heroSix {
      fluid(maxWidth:1920) {
        srcWebp
      }
    }
    heroSeven {
      fluid(maxWidth:1920) {
        srcWebp
      }
    }
    heroEight {
      fluid(maxWidth:1920) {
        srcWebp
      }
    }  
    heroNine {
      fluid(maxWidth:1920) {
        srcWebp
      }
    }
    heroTen {
      fluid(maxWidth:1920) {
        srcWebp
      }
    }
    heroEleven {
      fluid(maxWidth:1920) {
        srcWebp
      }
    }
    heroTwelve {
      fluid(maxWidth:1920) {
        srcWebp
      }
    }
    hero13 {
      fluid(maxWidth:1920) {
        srcWebp
      }
    }
    hero14 {
      fluid(maxWidth:1920) {
        srcWebp
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
