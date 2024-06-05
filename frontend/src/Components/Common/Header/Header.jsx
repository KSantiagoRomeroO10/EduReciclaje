import style from './Header.module.css'

import ButtonRoute from '../SubComponets/ButtonRoute/ButtonRoute'
import ButtonMenu from '../SubComponets/ButtonMenu/ButtonMenu'
import Search from './Search/Search'

const Header = () => {
  return(
    <header className={style.Header}>

      <div className={style.ContainerMenu}>
        <p className={style.Trigger}>Explorar</p>
        <ul className={style.Menu}>
          <p className={style.Trigger}>Explorar</p>
          <div className={style.Border}>
            <li> <ButtonMenu NombreButton={'Foros'} Route={'/Forums'}/> </li>
            <li> <ButtonMenu NombreButton={'Quizzes'} Route={'/Quizzes'}/> </li>
            <li> <ButtonMenu NombreButton={'Evaluaciones'} Route={'/Evaluations'}/> </li>
            <li> <ButtonMenu NombreButton={'Publicaciones'} Route={'/Publications'}/> </li>
            <li> <ButtonMenu NombreButton={'Comentarios y opiniones'} Route={'/Coments&Opinions'}/> </li>
          </div>
        </ul>      
      </div>

      <div className={style.Centre}>
        <Search/>
      </div>    
      
      <div className={style.Right}>
        <ButtonRoute NombreButton={'Iniciar Sesión'} Route={'/Login'} Right={true}/>
        <ButtonRoute NombreButton={'Registrarse'} Route={'/SingUp'} Right={true}/>  
      </div>

    </header>
  )
} 

export default Header
