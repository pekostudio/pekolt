import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/peko-logo-header-top.png"

const Header = ({ siteTitle }) => (

<div className="head">
  <div className="brand">
    <Link to="/"><img src={logo} alt="Logo" /> </Link>
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
