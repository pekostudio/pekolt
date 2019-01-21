import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Skills from "../components/skills"

const About = ({ data }) => (
  <Layout>
    <section className="hero">
      <h1>Welcome to “One Man Show”</h1>
      <p>I love working with entrepreneurs and being part of the exciting journey of growing a business. <i>Delivering Exceptional Service.</i> Exceptional client service is about going beyond what is realistically expected of you. It is about surprising, and often delighting, customers, turning them into enthusiastic referral sources and lifelong clients who stick with you not only because you do great work at a fair price, but because the value you bring to them goes far beyond just your products.        
      </p>
    </section>
    {data.allContentfulSkills.edges.map((edge, id) => (
    <Skills key={id} node={edge.node} />
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