import styles from './Button.module.css'
import { NavLink } from 'react-router-dom'

const ButtonRoute = ({ NombreButton, Route = null, Right = null, Left = null }) => {
  if (!Route) {    
    return (
      <button disabled className={`${styles.Button} ${styles.Disabled} ${Right ? styles.ButtonRight : Left ? styles.ButtonLeft : ''}`}>
        {NombreButton}
      </button>
    )
  }

  return (
    <NavLink to={Route}>
      <button className={`${styles.Button} ${Right ? styles.ButtonRight : Left ? styles.ButtonLeft : ''}`}>
        {NombreButton}
      </button>
    </NavLink>
  )
}

export default ButtonRoute
