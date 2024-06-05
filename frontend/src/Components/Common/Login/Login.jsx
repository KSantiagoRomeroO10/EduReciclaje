import styles from '../Styles/InputsForms.module.css'
import styles1 from './Login.module.css'

import ButtonRoute from '../SubComponets/ButtonRoute/ButtonRoute'
import { NavLink } from 'react-router-dom'

const Login = () => {

  const HandleSubmit = () => {

  }

  return(
    <form onSubmit={HandleSubmit} className={`${styles.Form} ${styles1.Form}`}>
      <h1>Iniciar Sesión</h1>

      <div className={styles.InputContainer}>  
        <input type="text" placeholder='Usuario o correo' className={styles.Input} id='Usuario'/>
        <label htmlFor="Usuario" className={styles.LabelInput}>Usuario</label>
      </div>

      <div className={styles.InputContainer}>  
        <input type="password" placeholder='Contraseña' className={styles.Input} id='Contraseña'/>
        <label htmlFor="Contraseña" className={styles.LabelInput}>Contraseña</label>
      </div>

      <ButtonRoute NombreButton={'Aceptar'} Route={'/Home'}/>

      <br />
      
      <NavLink to={'/SingUp'}>
        <p>Registrarse</p>
      </NavLink>

    </form>
  )
}

export default Login
