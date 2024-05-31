import styles from './Landing.module.css'

import ButtonRoute from '../ButtonRoute/ButtonRoute'

const Landing = () => {

  return(
    <div className={styles.container}>
      <h1>Bienvenidos a EduReciclaje</h1>
      <p>
        Edureciclaje es una plataforma dedicada a educar y concienciar sobre la importancia del reciclaje y la gestión adecuada de residuos, con el objetivo de reducir el impacto medioambiental humano. Ofrece diversas funcionalidades, incluyendo foros interactivos y herramientas para que profesores creen quizzes y evaluaciones. Los usuarios pueden registrarse, iniciar sesión, y personalizar su experiencia. Los administradores gestionan usuarios, contenidos y grupos, y pueden generar informes y análisis de datos. La plataforma facilita la participación en la comunidad mediante foros, mensajes privados y herramientas prácticas como localizadores de puntos de reciclaje. Además, proporciona acceso a recursos educativos interactivos y seguimiento del progreso de los usuarios.
      </p>
      <ButtonRoute NombreButton={'Entrar'} Route={'/Home'}/>
    </div>
  )
}

export default Landing
