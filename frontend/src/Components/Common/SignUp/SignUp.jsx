import { useState } from 'react'

import Styles from '../Styles/InputsForms.module.css'
import Styles1 from './SignUp.module.css'

import axios from 'axios'

import { NavLink, useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState('')
  const [names, setNames] = useState('')
  const [lastNames, setLastNames] = useState('')
  const [email, setEmail] = useState('')
  const [number_phone, setNumber_phone] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [date_birth, setDate_birth] = useState('')
  const [location, setLocation] = useState('')
  const [rol, setRol] = useState('')

  const handleUserChange = (e) => {
    setUser(e.target.value)
  }

  const handleNamesChange = (e) => {
    setNames(e.target.value)
  }

  const handleLastNamesChange = (e) => {
    setLastNames(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value

    const parsedValue = parseInt(value, 10)
    if (!isNaN(parsedValue)) {
      setNumber_phone(parsedValue)
    } else {
      setNumber_phone(null)
    }    
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmChange = (e) => {
    setConfirm(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate_birth(e.target.value)
  }

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  const handleRolChange = (e) => {
    setRol(e.target.value)
  }

  const HandleSubmit = (e) => {
    e.preventDefault() // Previene el comportamiento predeterminado del formulario

    const NewUserObject = {
      user: user,
      names: names,
      lastnames: lastNames,
      email: email,
      number_phone: number_phone,
      password: password,
      date_birth: date_birth,
      location: location,
      rol: rol
    }
    console.log(NewUserObject)
    
    axios
      .post('http://localhost:3001/user/new', NewUserObject)
      .then((response) => {
        console.log(response.data.newUser)        
        navigate('/Login')
      })
      .catch((error) => {
        console.log('Error: ', error.message)
      })          
  }

  return (
    <form onSubmit={HandleSubmit} className={`${Styles.Form} ${Styles1.Form}`}>
      <h1>Registrarse</h1>
      <div className={Styles1.Container}>
        <div className={Styles1.Left}>

          <div className={Styles.InputContainer}>  
            <input 
              type="text" 
              placeholder='Usuario' 
              className={Styles.Input} 
              id='Usuario'
              value={user} 
              onChange={handleUserChange}
            />
            <label htmlFor="Usuario" className={Styles.LabelInput}>Usuario</label>
          </div>

          <div className={Styles.InputContainer}>  
            <input 
              type="text" 
              placeholder='Nombres' 
              className={Styles.Input} 
              id='Nombres'
              value={names} 
              onChange={handleNamesChange}
            />
            <label htmlFor="Nombres" className={Styles.LabelInput}>Nombres</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input 
              type="text" 
              placeholder='Apellidos' 
              className={Styles.Input} 
              id='Apellidos'
              value={lastNames} 
              onChange={handleLastNamesChange}
            />
            <label htmlFor="Apellidos" className={Styles.LabelInput}>Apellidos</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input 
              type="text" 
              placeholder='Correo' 
              className={Styles.Input} 
              id='Correo'
              value={email} 
              onChange={handleEmailChange}
            />
            <label htmlFor="Correo" className={Styles.LabelInput}>Correo</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input 
              type="text" 
              placeholder='Rol' 
              className={Styles.Input} 
              id='Rol'
              value={rol} 
              onChange={handleRolChange}
            />
            <label htmlFor="Rol" className={`${Styles.LabelInput} ${Styles1.LabelInput}`}>Rol</label>
          </div>

        </div>

        <div className={Styles1.Right}>

          <div className={Styles.InputContainer}> 
            <input 
              type="number" 
              placeholder='Teléfono' 
              className={Styles.Input} 
              id='Teléfono'
              value={number_phone} 
              onChange={handlePhoneChange}
            />
            <label htmlFor="Teléfono" className={Styles.LabelInput}>Teléfono</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input 
              type="password" 
              placeholder='Contraseña' 
              className={Styles.Input} 
              id='Contraseña'
              value={password} 
              onChange={handlePasswordChange}
            />
            <label htmlFor="Contraseña" className={Styles.LabelInput}>Contraseña</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input 
              type="password" 
              placeholder='Confirmar' 
              className={Styles.Input} 
              id='Confirmar'
              value={confirm} 
              onChange={handleConfirmChange}
            />
            <label htmlFor="Confirmar" className={Styles.LabelInput}>Confirmar</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input 
              type="date" 
              placeholder='Fecha de Nacimiento' 
              className={Styles.Input} 
              id='FechaNacimiento'
              value={date_birth} 
              onChange={handleDateChange}
            />
            <label htmlFor="FechaNacimiento" className={`${Styles.LabelInput} ${Styles1.LabelInput}`}>Fecha de Nacimiento</label>
          </div>
          
          <div className={Styles.InputContainer}> 
            <input 
              type="text" 
              placeholder='Ubicación' 
              className={Styles.Input} 
              id='Location'
              value={location} 
              onChange={handleLocationChange}
            />
            <label htmlFor="Location" className={`${Styles.LabelInput} ${Styles1.LabelInput}`}>Ubicación</label>
          </div>

        </div>
        
      </div>  

      <button className={`${Styles1.Button}`}>
        Aceptar
      </button>

      <NavLink to={'/SingUp'}>
        <p>Login</p>
      </NavLink>

    </form>
  )
}

export default SignUp
