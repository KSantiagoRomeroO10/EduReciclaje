import './General.css'

import Landing from './Components/Common/Landing/Landing'
import Login from './Components/Common/Login/Login'
import SingUp from './Components/Common/SingUp/SingUp'
import Header from './Components/Common/Header/Header'

import { Routes, Route, useLocation } from 'react-router-dom'

function App() {

  const location = useLocation()
  const excludedRoutes = ['/', '/Login', '/SingUp']

  return (
    <>
      {
        !excludedRoutes.includes(location.pathname) && <Header/>
      }
      <Routes>
        <Route path='/' element={ <Landing/> }/>
        <Route path='/Login' element={ <Login/> }/>
        <Route path='/SingUp' element={ <SingUp/> }/>
      </Routes>
    </>
  )
}

export default App
