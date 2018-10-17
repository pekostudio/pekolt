import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (

<div className="head">
  <div className="brand">
    <img src="http://peko.lt/wp-content/uploads/peko-logo-header-top.png" />
  </div>
  <div className="menu">
    <ul>
      <li><Link to="/work/">Work</Link></li>
      <li><Link to="/about/">About</Link></li>
    </ul>
  </div>
</div>

)

export default Header
