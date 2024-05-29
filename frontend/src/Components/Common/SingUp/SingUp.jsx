import styles from '../Styles/InputsForms.module.css'

import Button from '../Button/ButtonRoute'

const SingUp = () => {

  const HandleSubmit = () => {

  }

  return (
    <form onSubmit={HandleSubmit} className={styles.Form}>
      <h1>Registrase</h1>

      <p className={styles.InputContainer}>  
        <input type="text" placeholder='Usuario' className={styles.Input} id='Usuario'/>
        <label for="Usuario" className={styles.LabelInput}>Usuario</label>
      </p>

      <p className={styles.InputContainer}>  
        <input type="text" placeholder='Nombres' className={styles.Input} id='Nombres'/>
        <label for="Nombres" className={styles.LabelInput}>Nombres</label>
      </p>

      <p className={styles.InputContainer}> 
        <input type="text" placeholder='Apellidos' className={styles.Input} id='Apellidos'/>
        <label for="Apellidos" className={styles.LabelInput}>Apellidos</label>
      </p>

      <Button NombreButton={'Aceptar'} Route={'/Home'}/>

    </form>
  )
}

export default SingUp
