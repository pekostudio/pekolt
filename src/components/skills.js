import React from 'react'
import { graphql } from 'gatsby'

const Skills = ({data}) => {
  return (
    <section className="skills">
      <div className="skillsLeft">
        <img src={data.contentfulSkills.image1.fluid.src} alt="" />
        <p>Design <br /><br /> UX, User Experience Design, UI, User Interface design, Web application design, Websites, Mobile design, iOS & Android platforms, Unique Design Systems, Graphic design, Creative, Team Lead, Wireframes, Prototypes.</p>
      </div>
      <div className="skillsCenter">
        <img src="https://images.ctfassets.net/58wyapl352h9/7mneM4FRlYeoosW0eiIqE4/3d6e29c64ee64a120d0a3a87da630914/noun_568069-300x300.png" Width="150" Height="150" alt="" />
        <p>Development <br /><br /> Php, Wordpress, HTML5, CSS3, JavaScript, AJAX, XML, jQuery, React, VueJs, Webpack, Gatsby, Jekyll, JAMstack sites, Bootstrap, Foundation, Headless CMS, Strapi, Netlify, Contentful and others. Knowledge ‘fundamentals of server side coding’.</p>
      </div>
      <div className="skillsRight">
        <img src="https://images.ctfassets.net/58wyapl352h9/3cHbhLFUdyu8CS6wm26iSG/50d108e5f1bca775e1b875e6692b5c92/noun_646983-300x300.png" Width="150" Height="150" alt="" />
        <p>Support 24/7 <br /><br /> As you grow, i’ll be with you every step of the way, making your life easier, and offering great advice (just when you need it) to help you achieve your dreams.</p>
      </div>
    </section>
  )
}

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

export default Skills
