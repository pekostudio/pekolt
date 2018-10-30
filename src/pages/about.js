import React from 'react'
import Layout from "../components/layout"

import Skills from "../components/skills"

const About = () => (
  <Layout>
    <section className="hero">
      <h1>Welcome to “One man Show”</h1>
      <p>I love working with entrepreneurs and being part of the exciting journey of growing a business. It’s fun, but it can also be tough.</p>
    </section>
    <Skills />
  </Layout>
)

export default About
