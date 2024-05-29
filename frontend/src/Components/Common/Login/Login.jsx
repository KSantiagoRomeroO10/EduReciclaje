import styles from '../Styles/InputsForms.module.css'
import styles1 from './Login.module.css'

import Button from '../Button/ButtonRoute'

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

      <Button NombreButton={'Aceptar'} Route={'/Home'}/>

    </form>
  )
}

export default Login
