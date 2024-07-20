import Styles from './Search.module.css'
import Styles1 from '../../Styles/InputsForms.module.css'

import IconSearch from '../../../../Assets/Icons/IconSearch'

const Search = () => {
  return (
    <div className={Styles.Container}>
      <input type="text" placeholder='Buscar' className={`${Styles1.Input} ${Styles.Input}`} id='SearchInput'/>
      <button className={Styles.SearchButton}>
        <IconSearch/> 
      </button>
    </div>
  )
}

export default Search
