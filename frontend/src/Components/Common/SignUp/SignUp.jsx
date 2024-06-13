import styles from '../Styles/InputsForms.module.css'
import styles1 from './SignUp.module.css'

import ButtonRoute from '../SubComponets/ButtonRoute/ButtonRoute'

const SignUp = () => {

  const HandleSubmit = () => {

  }

  return (
    <form onSubmit={HandleSubmit} className={`${styles.Form} ${styles1.Form}`}>
      <h1>Registrarse</h1>
      <div className={styles1.Container}>
        <div className={styles1.Left}>

          <div className={styles.InputContainer}>  
            <input type="text" placeholder='Usuario' className={styles.Input} id='Usuario'/>
            <label htmlFor="Usuario" className={styles.LabelInput}>Usuario</label>
          </div>

          <div className={styles.InputContainer}>  
            <input type="text" placeholder='Nombres' className={styles.Input} id='Nombres'/>
            <label htmlFor="Nombres" className={styles.LabelInput}>Nombres</label>
          </div>

          <div className={styles.InputContainer}> 
            <input type="text" placeholder='Apellidos' className={styles.Input} id='Apellidos'/>
            <label htmlFor="Apellidos" className={styles.LabelInput}>Apellidos</label>
          </div>

          <div className={styles.InputContainer}> 
            <input type="text" placeholder='Correo' className={styles.Input} id='Correo'/>
            <label htmlFor="Correo" className={styles.LabelInput}>Correo</label>
          </div>

        </div>

        <div className={styles1.Right}>

          <div className={styles.InputContainer}> 
            <input type="number" placeholder='Teléfono' className={styles.Input} id='Teléfono'/>
            <label htmlFor="Teléfono" className={styles.LabelInput}>Teléfono</label>
          </div>

          <div className={styles.InputContainer}> 
            <input type="text" placeholder='Contraseña' className={styles.Input} id='Contraseña'/>
            <label htmlFor="Contraseña" className={styles.LabelInput}>Contraseña</label>
          </div>

          <div className={styles.InputContainer}> 
            <input type="text" placeholder='Confirmar Contraseña' className={styles.Input} id='ConfirmarContraseña'/>
            <label htmlFor="ConfirmarContraseña" className={styles.LabelInput}>Confirmar Contraseña</label>
          </div>

          <div className={styles.InputContainer}> 
            <input type="date" placeholder='Fecha de Nacimiento' className={styles.Input} id='FechaNacimiento'/>
            <label htmlFor="FechaNacimiento" className={styles.LabelInput}>Fecha de Nacimiento</label>
          </div>

        </div>
      </div>      

      <ButtonRoute NombreButton={'Aceptar'} Route={'/Login'}/>

    </form>
  )
}

export default SignUp
