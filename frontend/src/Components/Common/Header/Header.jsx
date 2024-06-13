import Style from './Header.module.css'

import ButtonRoute from '../SubComponets/ButtonRoute/ButtonRoute'
import ButtonMenu from '../SubComponets/ButtonMenu/ButtonMenu'
import Search from './Search/Search'

import LoggedInUser from '../../Validations/LoggedInUser/LoggedInUser'
import UseUserStore from '../../../Stores/UseUserStore'

import { NavLink } from 'react-router-dom'

const Header = () => {  
  
  const user = UseUserStore((state) => state.user)
  const IsUserValid = LoggedInUser()

  return(
    <header className={Style.Header}>

      <div className={Style.ContainerMenu}>
        <p className={Style.Trigger}>Explorar</p>
        <ul className={Style.Menu}>
          <p className={Style.Trigger}>Explorar</p>
          <div className={Style.Border}>
            <li> <ButtonMenu NombreButton={'Foros'} Route={'/Forums'}/> </li>
            <li> <ButtonMenu NombreButton={'Quizzes'} Route={'/Quizzes'}/> </li>
            <li> <ButtonMenu NombreButton={'Evaluaciones'} Route={'/Evaluations'}/> </li>
            <li> <ButtonMenu NombreButton={'Publicaciones'} Route={'/Publications'}/> </li>
            <li> <ButtonMenu NombreButton={'Comentarios y opiniones'} Route={'/Coments&Opinions'}/> </li>
          </div>
        </ul>
      </div>

      <div className={Style.Centre}>
        <Search/>
      </div>    
      
      <div className={Style.Right}>
      {
        IsUserValid ? (
          <NavLink to='Settings' className={Style.Welcome}>¡Bienvenido {user.user}!</NavLink>
        ) : (
          <>
            <ButtonRoute NombreButton={'Iniciar Sesión'} Route={'/Login'} Right={true} />
            <ButtonRoute NombreButton={'Registrarse'} Route={'/SignUp'} Right={true} />
          </>
        )
      }
    </div>

    </header>
  )
} 

export default Header
