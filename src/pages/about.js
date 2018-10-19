import React from "react"
import Layout from "../components/layout"

const About = () => (
<Layout>
  <section className="hero">
    <h1>Welcome to “One man Show”</h1>
    <p>I love working with entrepreneurs and being part of the exciting journey of growing a business. <br /> It’s fun, but it can also be tough.</p>
  </section>
  <section className="skills">
    <div className="skillsLeft">
      <img src="http://peko.lt/wp-content/uploads/noun_581614.png" Width="150" Height="150" alt="" />
      <p>Design <br /><br /> UX, User Experience Design, UI, User Interface design, Web application design, Websites, Mobile design, iOS & Android platforms, Unique Design Systems, Graphic design, Creative, Team Lead, Wireframes, Prototypes.</p>
    </div>
    <div className="skillsCenter">
      <img src="http://peko.lt/wp-content/uploads/noun_581614.png" Width="150" Height="150" alt="" />
      <p>Development <br /><br /> Php, HTML5, CSS3, JavaScript, AJAX, XML, jQuery, React, Vue…
Bootstrap, Foundation, Others…
Knowledge ‘fundamentals of server side coding’.</p>
    </div>
    <div className="skillsRight">
      <img src="http://peko.lt/wp-content/uploads/noun_581614.png" Width="150" Height="150" alt="" />
      <p>Support 24/7 <br /><br /> As you grow, i’ll be with you every step of the way, making your life easier, and offering great advice (just when you need it) to help you achieve your dreams.</p>
    </div>
  </section>
</Layout>
)

export default About
