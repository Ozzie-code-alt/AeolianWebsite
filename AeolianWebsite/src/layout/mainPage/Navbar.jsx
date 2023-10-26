import React from 'react'
import '../../layout/layout-styles/navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <div className="nav-main-container">
<nav>
  <div className="aeolian-container">
  <Link to={'/'}><img src="src/assets/Aeolian Name White.png" alt="" srcset="" width={100} />  </Link> 
   <Link to={'/'}><img src="src/assets/A Logo.png" alt="" srcset=""  width={100}  className='navLogo'/>  </Link> 
  </div>
  <ul>
    <li> <Link to={'/getAeolian'} className='getAeolian'>Get Aeolian </Link></li>
    <li>  <Link to ={"https://github.com/Ozzie-code-alt/Aeolian"} className='sourceCode'>Source Code</Link></li>
    <li>  <Link to={"/LearnMore"} className='sourceCode'>Learn More </Link></li>
    <li> <Link to={"/Aboutme"} className='sourceCode' >About Me</Link></li>
  </ul>
</nav>

      </div>

    </div>
  )
}

export default Navbar