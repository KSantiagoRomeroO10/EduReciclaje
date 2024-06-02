import style from './Search.module.css'
import SearchIcon from '../../../../Assets/Icons/IconsComponents/SearchIcon'

const Search = () => {
  
  return(
    <div className={style.Container}>
      <input type="text" placeholder='Buscar' className={style.SearchInput}/>
      <button className={style.SearchButton}> <SearchIcon Color={'white'}/> </button>
    </div>
  )
}

export default Search
