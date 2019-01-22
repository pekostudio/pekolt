import React from 'react'
import Link from 'gatsby-link'

const PortfolioIndex = ({ node }) => {   
    return (
        <div className="item">
            <Link to={node.slug}>
              <img src={node.thumbnail.fluid.src} alt="" />
            </Link>
            <Link to={node.slug}>
              <h3>{node.title}</h3>
            </Link>
        </div>
    )  
}

export default PortfolioIndex

