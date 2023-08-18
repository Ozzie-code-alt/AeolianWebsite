import React from 'react'
import Navbar from '../layout/mainPage/Navbar'
import '../styles/MainPage.css'
import Background from './Background'
import MainContent from '../layout/mainPage/mainContent'
import Section2 from '../layout/mainPage/Section2'
function MainPage() {
  return (
    <div className="main-page">
    <Navbar/>
    <Background/>
    <MainContent/>
    <Section2/> 
    {/*add footer */}
    </div>
  )
}

export default MainPage