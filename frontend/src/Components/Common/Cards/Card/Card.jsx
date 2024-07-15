import Styles from './Card.module.css'
import ImageDefault from '../../../../Assets/Img/DefaultCardImage.png'

const Card = ({title, description, multimedia = null}) => {

  if(!multimedia) multimedia = ImageDefault

  return (
    <div className={Styles.Card}>
      <h1 className={Styles.Title}>{ title }</h1>
      <br />
      <p className={Styles.User}>{ description }</p>
      <br />
      <img src={multimedia} alt="Edureciclaje" className={Styles.Img}/>
    </div>
  )

}

export default Card