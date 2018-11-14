import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Skills from "../components/skills"

const About = ({ data }) => (
  <Layout>
    <section className="hero">
      <h1>Welcome to “One Man Show”</h1>
      <p>I love working with entrepreneurs and being part of the exciting journey of growing a business. It’s fun, but it can also be tough.</p>
    </section>
    {data.allContentfulSkills.edges.map((edge, i) => (
    <Skills key={i} node={edge.node} />
    ))}
  </Layout>
)

export default About

export const aboutQuery = graphql`
  query aboutQuery {
    allContentfulSkills {
      edges {
        node {
          skillsText {
            childMarkdownRemark {
              html
            }
          }
          image1 {
            resize(width:150 height:150) {
              src
            }
          }
          skillTextMiddle {
            childMarkdownRemark {
              html
            }
          }
          image2 {
            resize(width:150 height:150) {
              src
            }
          }
          skillTextLast {
            childMarkdownRemark {
              html
            }
          }
          image3 {
            resize(width:150 height:150) {
              src
            }
          }
        }
      }
    }
  }
`