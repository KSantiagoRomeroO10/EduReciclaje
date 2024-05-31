import styles from './Button.module.css'

import { NavLink } from 'react-router-dom'

const ButtonRoute = ({ NombreButton, Route, Right = null, Left = null }) => {
  return (
    <NavLink to={Route}>
      <button className={`${styles.Button} ${Right ? styles.ButtonRight : Left ? styles.ButtonLeft : ''}`}>{NombreButton}</button>
    </NavLink>
  )
}

export default ButtonRoute
