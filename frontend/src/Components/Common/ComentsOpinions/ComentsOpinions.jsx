import Styles from './ComentsOpinions.module.css'

import ButtonRoute from '../SubComponets/ButtonRoute/ButtonRoute'

const ComentsOpinions = () => {
  return(
    <>
      <form>
        <h1 className={Styles.Title}>Comentarios y opiniones sobre EduReciclaje</h1>
        <label for="CO">
          <p  className={Styles.Texto}>
            En esta sección de la plataforma de EduReciclaje tiene como fin dar la oportunidad a los usuarios de dar a
            conocer su opinión con respecto a su experiencia obtenida.
          </p>
        </label>
        <br />
        <textarea id="CO" name="CO" className={Styles.TextTarea}></textarea>
        <br />
        <ButtonRoute  NombreButton={'Aceptar'} Route={'/Home'} />
      </form>
    </>
  )
}

export default ComentsOpinions
