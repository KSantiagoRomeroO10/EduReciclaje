import './General.css'

import Landing from './Components/Common/Landing/Landing'
import Login from './Components/Common/Login/Login'
import SingUp from './Components/Common/SingUp/SingUp'
import Header from './Components/Common/Header/Header'
import Read from './Components/CRUD/Read/Read'

import UseUserStore from './Stores/UseUserStore'

import { Routes, Route, useLocation } from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoutes/ProtectedRoute'

import { useEffect, useState } from 'react'

function App() {
  const location = useLocation()
  const excludedRoutes = ['/', '/Login', '/SingUp']

  const userLogin = UseUserStore((state) => state.user)
  const updateUser = UseUserStore((state) => state.updateUser)
  const [isLoading, setIsLoading] = useState(true)

  const ValidateUser = (user) => {
    const keys = Object.keys(user)
    for (let key of keys) {
      if (!user[key]) {
        return false
      }
    }
    return true
  }

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
        <Route path='/SingUp' element={<SingUp />} />
        {/* Rutas Multiples protegidas */}
        <Route element={<ProtectedRoute IsAllowed={!!ValidateUser(userLogin)} />}>
          <Route path='/Pruebas1' element={<Read />} />
          <Route path='/Pruebas2' element={<Read />} />
        </Route>
        {/* Ruta unica protegida */}
        <Route path='/Pruebas3' element={
          <ProtectedRoute IsAllowed={!!ValidateUser(userLogin)}>
            <Read />
          </ProtectedRoute>
        }/>
      </Routes>
    </>
  )
}

export default App
