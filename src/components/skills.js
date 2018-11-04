import React from 'react'

const Skills = ({ node }) => {
  return (
    <section className="skills">
      <div className="skillsLeft">
        <img src={node.image1.resize.src} alt="" />
        <span 
            dangerouslySetInnerHTML={{
              __html: node.skillsText.childMarkdownRemark.html,
            }}
        />        
      </div>
      <div className="skillsCenter">
        <img src={node.image2.resize.src} alt="" />
        <span 
            dangerouslySetInnerHTML={{
              __html: node.skillTextMiddle.childMarkdownRemark.html,
            }}
        />
      </div>
      <div className="skillsRight">
        <img src={node.image3.resize.src} alt="" />
        <span 
            dangerouslySetInnerHTML={{
              __html: node.skillTextLast.childMarkdownRemark.html,
            }}
        />        
      </div>
    </section>
  )
}

export default Skills