import React from 'react'
import Layout from "../components/layout"
import { graphql } from 'gatsby'

import Skills from "../components/skills"

const About = ({ data }) => (
<Layout>
  <section className="hero">
    <h1>Welcome to “One man Show”</h1>
    <p>I love working with entrepreneurs and being part of the exciting journey of growing a business. It’s fun, but it can also be tough.</p>
  </section>
  <Skills />
</Layout>
)

export default About

export const query = graphql`
query
{
  contentfulSkills {
    image1 {
      fluid(maxWidth:150) {
        src
      }
    }
    skillsText {
      childMarkdownRemark {
        html
      }
    }
   image2 {
      fluid(maxWidth:150) {
        src
      }
    }
    skillTextMiddle {
      childMarkdownRemark {
        html
      }
    }
   image3 {
      fluid(maxWidth:150) {
        src
      }
    }
    skillTextLast {
      childMarkdownRemark {
        html
      }
    }
  }
}
`
