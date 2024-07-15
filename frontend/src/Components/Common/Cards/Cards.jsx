import Styles from './Cards.module.css'
import Card from './Card/Card'

import { NavLink } from 'react-router-dom'

const Cards = ({PropCards}) => {
  
  return(
    <div className={Styles.Cards}>
      {PropCards.map((prop, key) => {
        return (
          <NavLink to={prop.route} className={Styles.NavLink} key={key}>
            <Card title={prop.title} description={prop.description}/>
          </NavLink>
        )
      })}
    </div>
  )
}

export default Cards