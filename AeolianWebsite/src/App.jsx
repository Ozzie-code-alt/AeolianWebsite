import MainPage from "./pages/MainPage"
import { Route, Routes} from 'react-router-dom'
import GetAeolian from "./pages/getAeolian"
import Navbar from "./layout/mainPage/Navbar"
import Background from "./pages/Background"

function App() {



  return (
    <>
  <Navbar/>
  <Background/>
 <Routes>
  <Route path='/' element ={<MainPage/>}/>
  <Route path="/getAeolian" element={<GetAeolian/>}/>
 </Routes>

    {/* <MainPage/> */}

    </>
  )
}

export default App
