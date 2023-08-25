import React from 'react'
import '../../layout/layout-styles/midContainer.css'

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
      <div className="Software-container">

        <p>Software</p>
        <p> <a href="#"> Python</a></p>
      </div>


      <div className="packages-container">

        <div className="Open-cv-container">  {/*Change and try to put all of this on a json file then map */}
          <p>OpenCV</p>
          <div className="Pack-btn-container">
            <button>pip install opencv-python</button>
          </div>
        </div>

     <div className="Pillow-container">
          <p>Pillow</p>
          <div className="Pack-btn-container">
            <button>pip install Pillow</button>
          </div>
        </div>

        <div className="Pystray-container">
          <p>pystray</p>
          <div className="Pack-btn-container">
            <button>pip install pystray</button>
          </div>
        </div>

        <div className="Mouse-container">
          <p>Mouse</p>
          <div className="Pack-btn-container">
            <button>pip install mouse</button>
          </div>
        </div>

        <div className="PlaySound-container">
          <p>PlaySound</p>
          <div className="Pack-btn-container">
            <button>pip install Playsound</button>
          </div>
        </div>

        <div className="Pyglet-container">
          <p>pyglet</p>
          <div className="Pack-btn-container">
            <button>pip install pyglet</button>
          </div>
        </div>




      </div>
      </div>

      
    </div>
  )
}

export default MidContainer