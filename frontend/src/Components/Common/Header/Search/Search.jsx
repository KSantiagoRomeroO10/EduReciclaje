import Styles from './Search.module.css'
import Styles1 from '../../Styles/InputsForms.module.css'

import SearchIcon from '../../../../Assets/Icons/IconsComponents/SearchIcon'

const Search = () => {
  
  return(
    <div className={Styles.Container}>
      <input type="text" placeholder='Buscar' className={`${Styles1.Input} ${Styles.Input}`} id='Contraseña'/>
      <button className={Styles.SearchButton}> <SearchIcon Color={'white'}/> </button>
    </div>
  )
}

export default Search
