import styles from './Button.module.css'

import { NavLink } from 'react-router-dom'

const ButtonRoute = ({ NombreButton, Route }) => {
  return (
    <NavLink to={Route}>
      <button className={styles.button}>{NombreButton}</button>
    </NavLink>
  )
}

export default ButtonRoute
