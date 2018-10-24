import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Layout from "../components/layout"
import { graphql } from 'gatsby'

class BlogPost extends Component {
  render() {
    const {
      title,
      thumbnail,
      heroTop,
      heroSecond,
      heroThird,
      heroFour,
      heroFive,
      descriptionBigText,
      descriptionSmallText
    } = this.props.data.contentfulPortfolio
    return (
      <Layout>
      <section className="hero">
        <h1>{title}</h1>
      </section>
      <section className="portfolioPage">
        <img src={thumbnail.resize.src} alt="" />
        <div className="largeblock" dangerouslySetInnerHTML={{__html: descriptionBigText.childMarkdownRemark.html}} />
        <img src={heroTop.resize.src} alt="" />
        <div className="largeblock" dangerouslySetInnerHTML={{__html: descriptionSmallText.childMarkdownRemark.html}} />
        <img src={heroSecond.resize.src} alt="" />
        <img src={heroThird.resize.src} alt="" />
        <img src={heroFour.resize.src} alt="" />
        <img src={heroFive.resize.src} alt="" />
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
query blogPostQuery
{
  contentfulPortfolio {
   slug
   title
   thumbnail {
      resize(width:1920 height:1200) {
        src
      }
   }
   heroTop {
     resize(width:1920 height:900) {
       src
     }
   }
   heroSecond {
     resize(width:1920 height:900) {
       src
     }
   }
   heroThird {
     resize(width:1920 height:900) {
       src
     }
   }
   heroFour {
     resize(width:1920 height:900) {
       src
     }
   }
   heroFive {
     resize(width:1920 height:900) {
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
