import './App.css'
import './General.css'

import Landing from './Components/Common/Landing/Landing'

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
      </Routes>
    </>
  )
}

export default App
