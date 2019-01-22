import React from 'react'
import Link from 'gatsby-link'

const Portfolio = ({ node }) => {   
    return (
        <div className="item">
            <Link to={node.slug}>
              <img src={node.thumbnail.fluid.src} alt="" />
            </Link>
        </div>
    )  
}

export default Portfolio

