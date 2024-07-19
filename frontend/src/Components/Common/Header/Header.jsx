import Style from './Header.module.css'

import ButtonRoute from '../SubComponets/ButtonRoute/ButtonRoute'
import Search from './Search/Search'

import LoggedInUser from '../../GlobalsValidations/LoggedInUser/LoggedInUser'
import UseUserStore from '../../../Stores/UseUserStore'

import Menu from './Menu/Menu'

import { NavLink } from 'react-router-dom'

const Header = () => {  
  
  const user = UseUserStore((state) => state.user)
  const IsUserValid = LoggedInUser()

  return(
    <header className={Style.Header}>

      <div className={Style.Left}>
        <Menu/>
      </div>

      <div className={Style.Centre}>
        <Search/>
      </div>    
      
      <div className={Style.Right}>
      {
        IsUserValid ? (
          <NavLink to='/Home' className={Style.Welcome}>¡Bienvenido {user.user}!</NavLink>
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
