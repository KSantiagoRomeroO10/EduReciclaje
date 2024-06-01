import style from 'Search.module.css'

const Search = () => {
  return(
    <>
      <input type="text" placeholder='Buscar' className={style.SearchInput}/>
      <button className={style.SearchButton}>Buscar</button>
    </>
  )
}

export default Search
