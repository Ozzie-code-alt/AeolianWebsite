import React from 'react'
import '../styles/MainPage.css'

import MainContent from '../layout/mainPage/mainContent'
import Section2 from '../layout/mainPage/Section2'
import Footer from '../layout/mainPage/Footer'
function MainPage() {
  return (
    <div className="main-page">
    
    <MainContent/>
    <Section2/> 
    {/*add footer */}
    <Footer/>
    </div>
  )
}

export default MainPage