import React from 'react'
import '../../layout/layout-styles/mainContent.css'
function MainContent() {
  return (
    <div>

        <div className="main-content-container">
            <div className="title-container">
            <div className="bold-content">
            <p>A new way to interact</p>
            </div>
            <div className="sub-content">
            <p>Turns any screen into a touchscreen using Computer Vision</p>
            </div>
            </div>
        <div className="btn-container">
            <button>Learn more</button>
        </div>
        </div>  
    </div>
  )
}

export default MainContent