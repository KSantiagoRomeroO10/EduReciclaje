import Styles from '../Styles/InputsForms.module.css'
import Styles1 from './SignUp.module.css'

import ButtonRoute from '../SubComponets/ButtonRoute/ButtonRoute'

import { NavLink } from 'react-router-dom'

const SignUp = () => {

  const HandleSubmit = () => {

  }

  return (
    <form onSubmit={HandleSubmit} className={`${Styles.Form} ${Styles1.Form}`}>
      <h1>Registrarse</h1>
      <div className={Styles1.Container}>
        <div className={Styles1.Left}>

          <div className={Styles.InputContainer}>  
            <input type="text" placeholder='Usuario' className={Styles.Input} id='Usuario'/>
            <label htmlFor="Usuario" className={Styles.LabelInput}>Usuario</label>
          </div>

          <div className={Styles.InputContainer}>  
            <input type="text" placeholder='Nombres' className={Styles.Input} id='Nombres'/>
            <label htmlFor="Nombres" className={Styles.LabelInput}>Nombres</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input type="text" placeholder='Apellidos' className={Styles.Input} id='Apellidos'/>
            <label htmlFor="Apellidos" className={Styles.LabelInput}>Apellidos</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input type="text" placeholder='Correo' className={Styles.Input} id='Correo'/>
            <label htmlFor="Correo" className={Styles.LabelInput}>Correo</label>
          </div>

        </div>

        <div className={Styles1.Right}>

          <div className={Styles.InputContainer}> 
            <input type="number" placeholder='Teléfono' className={Styles.Input} id='Teléfono'/>
            <label htmlFor="Teléfono" className={Styles.LabelInput}>Teléfono</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input type="text" placeholder='Contraseña' className={Styles.Input} id='Contraseña'/>
            <label htmlFor="Contraseña" className={Styles.LabelInput}>Contraseña</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input type="text" placeholder='Confirmar Contraseña' className={Styles.Input} id='ConfirmarContraseña'/>
            <label htmlFor="ConfirmarContraseña" className={Styles.LabelInput}>Confirmar Contraseña</label>
          </div>

          <div className={Styles.InputContainer}> 
            <input type="date" placeholder='Fecha de Nacimiento' className={Styles.Input} id='FechaNacimiento'/>
            <label htmlFor="FechaNacimiento" className={`${Styles.LabelInput} ${Styles1.LabelInput}`}>Fecha de Nacimiento</label>
          </div>

        </div>
        
      </div>      

      <ButtonRoute NombreButton={'Aceptar'} Route={'/Login'}/>
      <NavLink to={'/SingUp'}>
        <p>Login</p>
      </NavLink>

    </form>
  )
}

export default SignUp
