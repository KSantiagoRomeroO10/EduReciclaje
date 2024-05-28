import styles from './Login.module.css'

import Button from '../Button/ButtonRoute'

const Login = () => {

  const HandleSubmit = () => {

  }

  return(
    <form onSubmit={HandleSubmit} className={styles.Form}>
      <h1>Iniciar Sesión</h1>

      <p className={styles.UserContainer}>  
        <input type="text" placeholder='Usuario o correo' className={styles.Usuario} id='Usuario'/>
        <label class="LabelUser" for="Usuario" className={styles.LabelUser}>Usuario</label>
      </p>

      <p className={styles.PassContainer}>  
        <input type="password" placeholder='Contraseña' className={styles.Contraseña} id='Contraseña'/>
        <label class="LabelContraseña" for="Contraseña" className={styles.LabelContraseña}>Contraseña</label>
      </p>

      <Button NombreButton={'Aceptar'} Route={'/Home'}/>

    </form>
  )
}

export default Login
