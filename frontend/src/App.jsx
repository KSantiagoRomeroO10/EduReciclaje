import './App.css'
import './General.css'

import Landing from './Components/Common/Landing/Landing'
import Login from './Components/Common/Login/Login'

import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()

  return (
    <>
      {/* {
        location.pathname !== '/' && <NavBar/>
      } */}
      <Routes>
        <Route path='/' element={ <Landing/> }/>
        <Route path='/Login' element={ <Login/> }/>
      </Routes>
    </>
  )
}

export default App
