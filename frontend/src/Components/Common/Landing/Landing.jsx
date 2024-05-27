import styles from './Landing.module.css'

import Button from '../Button/ButtonRoute'

const Landing = () => {

  return(
    <div className={styles.container}>
      <h1>Bienvenidos a EduReciclaje</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus in tempora labore quaerat? Numquam unde, accusamus aperiam consequuntur, libero pariatur enim adipisci quaerat fugit quam exercitationem cum, saepe voluptas.
      </p>
      <Button NombreButton={'Entrar'} Route={'Home'}/>
    </div>
  )
}

export default Landing
