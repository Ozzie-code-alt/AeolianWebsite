import MainPage from "./pages/MainPage"
import { Route, Routes} from 'react-router-dom'
import GetAeolian from "./pages/getAeolian"
import Navbar from "./layout/mainPage/Navbar"
import Background from "./pages/Background"
import AboutMe from "./pages/Aboutme"
import LearnMore from "./pages/LearnMore"
import'bootstrap/dist/css/bootstrap.min.css'
function App() {



  return (
    <>
  <Navbar/>
  <Background/> 
 <Routes>
  <Route path='/' element ={<MainPage/>}/>
  <Route path="/getAeolian" element={<GetAeolian/>}/>
  <Route path='/Aboutme' element={<AboutMe/>} />
  <Route path="/LearnMore" element={<LearnMore/>}/>
 </Routes>

    {/* <MainPage/> */}

    </>
  )
}

export default App
