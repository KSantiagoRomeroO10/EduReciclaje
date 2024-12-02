import Styles from './Menu.module.css'
import IconBars from '../../../../Assets/Icons/IconBars'

import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import UseUserStore from '../../../../Stores/UseUserStore'

const Menu = () => {
  const [Deployment, SetDeployment] = useState(false)
  const updateUser = UseUserStore((state) => state.resetUser)
  
  const navigate = useNavigate() // Hook para redirigir

  const handleClick = () => {
    SetDeployment(!Deployment)
  }

  const handleLogout = () => {
    updateUser()
    navigate('/Login')
  }

  return (
    <>
      <div className={Styles.IconBars} onClick={() => handleClick()}>
        <IconBars />
      </div>
      <div className={`${Deployment ? Styles.DeploymentOn : Styles.DeploymentOff}`}>
        <ul className={Styles.List}>
          <div className={`${Styles.IconBars} ${Styles.IconBarsOn}`} onClick={() => handleClick()}>
            <IconBars />
          </div>
          <li className='DropDetails'>
            <details className={Styles.Drop}>
              <summary>Configuración</summary>

              <NavLink to='/CrudForumsIndividuals' className={Styles.NavLink}>
                <li>Crud de foros personal</li>
              </NavLink>

              <NavLink to='/CrudPublicationsIndividuals' className={Styles.NavLink}>
                <li>Crud de publicaciones personal</li>
              </NavLink>

              <NavLink to='/CrudUsers' className={Styles.NavLink}>
                <li>Crud de usuarios</li>
              </NavLink>

              <NavLink to='/CrudForums' className={Styles.NavLink}>
                <li>Crud de foros general</li>
              </NavLink>

              <NavLink to='/CrudPublications' className={Styles.NavLink}>
                <li>Crud de publicaciones general</li>
              </NavLink>
            </details>
          </li>

          <NavLink to='/PrivateMessages' className={Styles.NavLink}>
            <li>Mensajes Privados</li>
          </NavLink>

          <NavLink to='/Reports' className={Styles.NavLink}>
            <li>Reportes</li>
          </NavLink>

          {/* Aquí agregas la opción para cerrar sesión */}
          <li onClick={handleLogout} className={Styles.NavLink}>
            Cerrar Sesión
          </li>

        </ul>
      </div>
    </>
  )
}

export default Menu
