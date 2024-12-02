import { useState } from 'react'

import styles from '../Styles/InputsForms.module.css'
import styles1 from './Login.module.css'

import { NavLink, useNavigate } from 'react-router-dom'

import axios from 'axios'

import UseUserStore from '../../../Stores/UseUserStore'

const Login = () => {

  const updateUser = UseUserStore((state) => state.updateUser)

  // Estados para los inputs
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('') // Estado para mensajes de error

  const navigate = useNavigate() // Hook para redirigir

  // Manejar cambios en los inputs
  const handleUserChange = (e) => {
    setUser(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const HandleSubmit = (e) => {
    e.preventDefault() // Previene el comportamiento predeterminado del formulario

    axios
      .post('http://localhost:3001/user/getOne', {
        user,
        password,
      })
      .then((response) => {       
        const responseUser = response.data.FindUser
        const userGlobal = {
          user: responseUser.user,
          names: responseUser.names,
          lastNames: responseUser.lastnames,
          email: responseUser.email,
          phone: responseUser.number_phone,
          password: responseUser.password,
          birthDate: responseUser.date_birth,
          location: responseUser.location,
          role: responseUser.rol
        }
        updateUser(userGlobal)        
        navigate('/Home')
      })
      .catch((error) => {
        // Manejo de errores
        if (error.response) {
          if (error.response.status === 404) {
            setErrorMessage('Usuario y/o Contraseña incorrectos.')
          } else {
            setErrorMessage('Ocurrió un error. Inténtalo de nuevo.')
          }
        } else {
          // Error de red u otro
          setErrorMessage('Error al conectar con el servidor. Revisa tu conexión.')
        }
        console.error(error.message)
      })
  }

  return (
    <form className={`${styles.Form} ${styles1.Form}`} onSubmit={HandleSubmit}>
      <h1>Iniciar Sesión</h1>

      <div className={styles.InputContainer}>
        <input
          type="text"
          placeholder="Usuario o correo"
          className={styles.Input}
          id="Usuario"
          value={user}
          onChange={handleUserChange}
        />
        <label htmlFor="Usuario" className={styles.LabelInput}>
          Usuario
        </label>
      </div>

      <div className={styles.InputContainer}>
        <input
          type="password"
          placeholder="Contraseña"
          className={styles.Input}
          id="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <label htmlFor="Contraseña" className={styles.LabelInput}>
          Contraseña
        </label>
      </div>

      {/* Mostrar mensaje de error */}
      {errorMessage && <p className={styles1.ErrorMessage}>{errorMessage}</p>}

      <br />
      {/* Botón para ejecutar el login */}
      <button className={`${styles1.Button}`}>
        Aceptar
      </button>

      <br />

      <NavLink to={'/SingUp'}>
        <p>Registrarse</p>
      </NavLink>
    </form>
  )
}

export default Login
