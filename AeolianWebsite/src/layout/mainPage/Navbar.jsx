import React from 'react'
import '../../layout/layout-styles/navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <div className="nav-main-container">
<nav>
  <div className="aeolian-container">
    <p>Aeolian Logo Here</p>
  </div>
  <ul>
    <li> <Link to={'/getAeolian'} className='getAeolian'>Get Aeolian </Link></li>
    <li>  <Link to ={"https://github.com/Ozzie-code-alt/Aeolian"} className='sourceCode'>Source Code</Link></li>
    <li> Learn More</li>
    <li> About Me</li>
  </ul>
</nav>

      </div>

    </div>
  )
}

export default Navbar