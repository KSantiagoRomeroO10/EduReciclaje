import './General.css'

import Header from './Components/Common/Header/Header'

import Home from './Components/Common/Home/Home'

import Landing from './Components/Common/Landing/Landing'
import Login from './Components/Common/Login/Login'
import SignUp from './Components/Common/SignUp/SignUp'

import ComentsOpinions from './Components/Common/ComentsOpinions/ComentsOpinions'

import CrudForumsIndividuals from './Components/Common/CrudForumsIndividuals/CrudForumsIndividuals'
import CrudPublicationsIndividuals from './Components/Common/CrudPublicationsIndividuals/CrudPublicationsIndividuals'
import CrudPublications from './Components/Admin/CrudUsers/CrudUsers'

import UseUserStore from './Stores/UseUserStore'
import LoggedInUser from './Components/GlobalsValidations/LoggedInUser/LoggedInUser'

import Chat from './Components/Common/Chat/Chat'

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
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        {/* Rutas Multiples protegidas */}
        {/* Everyone */}
        <Route element={<ProtectedRoute IsAllowed={IsUserValid} />}>
          <Route path='/Forums' />
          <Route path='/Quizzes' />
          <Route path='/Evaluations' />
          <Route path='/Publications' />
          <Route path='/ComentsOpinions' element={<ComentsOpinions />} />
          <Route path='/CrudForumsIndividuals' element={<CrudForumsIndividuals />} />
          <Route path='/CrudPublicationsIndividuals' element={<CrudPublicationsIndividuals />} />
          <Route path='/PrivateMessages' />
          <Route path='/Settings' />
          <Route path='/Chat' element={<Chat />}/>
        </Route>
        {/* Admin */}
        <Route element={<ProtectedRoute IsAllowed={IsUserValid && userLogin.role === 'Admin'} />}>
          <Route path='/CrudUsers' element={<CrudPublications />} />
          <Route path='/CrudForums' element={<CrudPublications />} /> {/* Crear Crud con datos pertinentes */}
          <Route path='/CrudPublications' element={<CrudPublications />} /> {/* Crear Crud con datos pertinentes */}
          <Route path='/Reports' />
        </Route>
        {/* Professor */}
        <Route element={<ProtectedRoute IsAllowed={IsUserValid && userLogin.role === 'Professor'} />}>
          <Route path='/CrudGroupUsers' element={<CrudPublications />} /> {/* Crear Crud con datos pertinentes */}
          <Route path='/CrudQuizzes' element={<CrudPublications />} /> {/* Crear Crud con datos pertinentes */}
          <Route path='/CrudEvaluations' element={<CrudPublications />} /> {/* Crear Crud con datos pertinentes */}
        </Route>
      </Routes>
    </>
  )
}

export default App
