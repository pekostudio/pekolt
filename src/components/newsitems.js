import React from 'react'
import Link from 'gatsby-link'

const Newsitem = ({ node }) => {   
    return (
        <div className="item" >
            <Link to={node.slug}>
              <img src={node.thumbnail.fluid.src} alt="" />
            </Link>
            <Link to={node.slug}>
              <h5>{node.title}</h5>
            </Link>            
        </div>
    )  
}

export default Newsitem