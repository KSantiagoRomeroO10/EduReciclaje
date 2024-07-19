import Styles from './Menu.module.css'

import IconBars from '../../../../Assets/Icons/IconBars'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {

  const [Deployment, SetDeployment] = useState(false)

  const handleClick = () => {
    SetDeployment(!Deployment)
  }

  return(
    <>
      <div className={Styles.IconBars} onClick={() => handleClick()}>
        <IconBars/>
      </div>
      <div className={`${Deployment ? Styles.DeploymentOn : Styles.DeploymentOff}`}>
        <ul className={Styles.List}>
          <div className={`${Styles.IconBars} ${Styles.IconBarsOn}`} onClick={() => handleClick()}>
            <IconBars/>
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

          <li>Cerrar Sesión</li>

        </ul>
      </div>
    </>
  )
}

export default Menu
