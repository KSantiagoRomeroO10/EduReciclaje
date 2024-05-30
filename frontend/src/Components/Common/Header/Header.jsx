import style from './Header.module.css'
import Button from '../Button/ButtonRoute'

const Header = () => {
  return(
    <header className={style.Header}>
      <Button NombreButton={'Formularios'} Route={'/Forms'}></Button>
    </header>
  )
} 

export default Header
