import styles from '../Styles/InputsForms.module.css'

import Button from '../Button/ButtonRoute'

const Login = () => {

  const HandleSubmit = () => {

  }

  return(
    <form onSubmit={HandleSubmit} className={styles.Form}>
      <h1>Iniciar Sesión</h1>

      <p className={styles.InputContainer}>  
        <input type="text" placeholder='Usuario o correo' className={styles.Input} id='Usuario'/>
        <label for="Usuario" className={styles.LabelInput}>Usuario</label>
      </p>

      <p className={styles.InputContainer}>  
        <input type="password" placeholder='Contraseña' className={styles.Input} id='Contraseña'/>
        <label for="Contraseña" className={styles.LabelInput}>Contraseña</label>
      </p>

      <Button NombreButton={'Aceptar'} Route={'/Home'}/>

    </form>
  )
}

export default Login
