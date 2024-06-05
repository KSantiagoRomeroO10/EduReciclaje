import styles from './Search.module.css'
import styles1 from '../../Styles/InputsForms.module.css'

import SearchIcon from '../../../../Assets/Icons/IconsComponents/SearchIcon'

const Search = () => {
  
  return(
    <div className={styles.Container}>
      <input type="text" placeholder='Buscar' className={`${styles1.Input} ${styles.Input}`} id='Contraseña'/>
      <button className={styles.SearchButton}> <SearchIcon Color={'white'}/> </button>
    </div>
  )
}

export default Search
