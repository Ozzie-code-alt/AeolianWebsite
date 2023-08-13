import React from 'react'
import Navbar from '../layout/mainPage/Navbar'
import '../styles/MainPage.css'
import Background from './Background'
import MainContent from '../layout/mainPage/mainContent'
function MainPage() {
  return (
    <div className="main-page">
    <Navbar/>
    <Background/>
    <MainContent/>
    </div>
  )
}

export default MainPage