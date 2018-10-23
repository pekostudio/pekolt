import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Layout from "../components/layout"

class BlogPost extends Component {
  render() {
    const {
      title,
      descriptionBigText,
      descriptionSmallText,
      thumbnail,
      heroTop
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
query blogPostQuery($slug: String!)
{
  contentfulPortfolio(slug: {eq: $slug}) {
   slug
   title
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
 }
}
`
