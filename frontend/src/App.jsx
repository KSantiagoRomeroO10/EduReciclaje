import { Routes, Route, useLocation } from 'react-router-dom'

import Landing from './Components/Common/Landing/Landing'

import './App.css'
import './General.css'

function App() {

  const location = useLocation()

  return (
    <>
      {/* {
        location.pathname !== '/' && <NavBar/>
      } */}
      <Routes>
        <Route path='/' element={ <Landing/> }/>
      </Routes>
    </>
  )
}

export default App
