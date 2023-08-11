import React from 'react'
import Navbar from '../layout/Navbar'
import '../styles/MainPage.css'
import Background from './Background'

function MainPage() {
  return (
    <div className="main-page">
    <Navbar/>
    <Background/>
    </div>
  )
}

export default MainPage