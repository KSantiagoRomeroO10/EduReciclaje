import style from './Header.module.css'

import ButtonRoute from '../ButtonRoute/ButtonRoute'
import ButtonMenu from '../ButtonMenu/ButtonMenu'

const Header = () => {
  return(
    <header className={style.Header}>

    <ButtonRoute NombreButton={'Iniciar Sesión'} Route={'/Login'} Right={true}/>
    <ButtonRoute NombreButton={'Registrarse'} Route={'/SingUp'} Right={true}/>

      <div className={style.ContainerMenu}>
        <p className={style.Trigger}>Menu</p>
        <ul className={style.Menu}>
          <p className={style.Trigger}>Menu</p>
          <div className={style.Border}>
            <li> <ButtonMenu NombreButton={'Foros'} Route={'/Forums'}/> </li>
            <li> <ButtonMenu NombreButton={'Quizzes'} Route={'/Quizzes'}/> </li>
            <li> <ButtonMenu NombreButton={'Evaluaciones'} Route={'/Evaluations'}/> </li>
            <li> <ButtonMenu NombreButton={'Publicaciones'} Route={'/Publications'}/> </li>
            <li> <ButtonMenu NombreButton={'Comentarios y opiniones'} Route={'/Coments&Opinions'}/> </li>
          </div>
        </ul>      
      </div>

    </header>
  )
} 

export default Header
