import React from 'react'
import Link from 'gatsby-link'

const Portfolio = ({ node }) => {   
    return (
        <div className="item" >
            <Link to={node.slug}>
              <img src={node.thumbnail.fluid.src} alt="" />
            </Link>
            <Link to={node.slug}>
              <h4>{node.title}</h4>
            </Link>            
        </div>
    )  
}

export default Portfolio