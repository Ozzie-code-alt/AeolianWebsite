import React from 'react'
import '../../layout/layout-styles/upperContainer.css'
function UpperContainer() {
  return (
    <div className="upper-container">
    <div className="title-container">
    <p>Get Aeolian</p>
    </div>
    <div className="btn-container">
      <button>Download</button>
    </div>
    <div className="subtext-container">
      <p>Alternatively click <a href="#">here</a>, for github source file</p>
    </div>
  </div>
  )
}

export default UpperContainer