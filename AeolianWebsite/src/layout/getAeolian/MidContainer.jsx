import React from 'react'
import '../../layout/layout-styles/midContainer.css'
import {PACKAGES} from '../../packages'
import Packages from '../../components/Packages'
function MidContainer() {

  return (
    <div className='midContainer-container'>

        <div className="upper-text">

        <div className="main-title-container">
            <p>Requirements for Source Code </p>
        </div>
        <div className="sub-text-container">
            <p>The following is <b>only</b> required if you are downloading the source code</p>
        </div>
        </div>

      <div className="requirements-container">
      <div className="Software-ontainer">

        <p className='software-text'>Software</p>
        <p> <a href="#"> Python</a></p>
      </div>


      <div className="packages-container">
        <div className="packages">
        <p className='packages-text'>Packages</p>
    {PACKAGES.map((value) =>(
      <Packages data={value}/> // were passing data here 
    ))}
     </div>
      </div>
      </div>

      
    </div>
  )
}

export default MidContainer