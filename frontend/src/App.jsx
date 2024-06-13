import './General.css'

import Landing from './Components/Common/Landing/Landing'
import Login from './Components/Common/Login/Login'
import SignUp from './Components/Common/SignUp/SignUp'
import Header from './Components/Common/Header/Header'
import Read from './Components/CRUD/Read/Read'

import UseUserStore from './Stores/UseUserStore'
import LoggedInUser from './Components/Validations/LoggedInUser/LoggedInUser'

import { Routes, Route, useLocation } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute'

import { useEffect, useState } from 'react'

function App() {
  const location = useLocation()
  const excludedRoutes = ['/', '/Login', '/SignUp']

  const userLogin = UseUserStore((state) => state.user)
  const updateUser = UseUserStore((state) => state.updateUser)
  const [isLoading, setIsLoading] = useState(true)

  const IsUserValid = LoggedInUser()

  useEffect(() => {
    const user = {
      user: 'Santiago',
      names: 'Kevin Santiago',
      lastNames: 'Romero Osorio',
      email: 'KSantiagoRomeroO10@outlook.com',
      phone: 3053770449,
      password: '654asd87f8',
      birthDate: '10/08/2000',
      location: 'Colombia, Bogotá',
      role: 'Admin'
    }
    updateUser(user)
    setIsLoading(false)
  }, [updateUser])

  if (isLoading) {
    return <div>Cargando Contenido...</div>
  }

  return (
    <>
      {
        !excludedRoutes.includes(location.pathname) && <Header />
      }
      <Routes>
        {/* Rutas publicas */}
        <Route path='/' element={<Landing />} />
        <Route path='/Home' element={<Landing />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        {/* Rutas Multiples protegidas */}
        {/* Everyone */}
        <Route element={<ProtectedRoute IsAllowed={IsUserValid} />}>
          <Route path='/Forums' element={<Read />} />
          <Route path='/Quizzes' element={<Read />} />
          <Route path='/Evaluations' element={<Read />} />
          <Route path='/Publications' element={<Read />} />
          <Route path='/Coments&Opinions' element={<Read />} />
          <Route path='/CrudForumsIndividuals' element={<Read />} />
          <Route path='/CrudPublicationsIndividuals' element={<Read />} />
          <Route path='/PrivateMessages' element={<Read />} />
          <Route path='/Settings' element={<Read />} />
        </Route>
        {/* Admin */}
        <Route element={<ProtectedRoute IsAllowed={IsUserValid && userLogin.role === 'Admin'} />}>
          <Route path='/CrudUsers' element={<Read />} />
          <Route path='/CrudForums' element={<Read />} />
          <Route path='/CrudPublications' element={<Read />} />
          <Route path='/Reports' element={<Read />} />
        </Route>
        {/* Professor */}
        <Route element={<ProtectedRoute IsAllowed={IsUserValid && userLogin.role === 'Professor'} />}>
          <Route path='/CrudGroupUsers' element={<Read />} />
          <Route path='/CrudQuizzes' element={<Read />} />
          <Route path='/CrudEvaluations' element={<Read />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
