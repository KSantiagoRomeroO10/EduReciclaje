import Cards from "../Cards/Cards"
const Home = () => {
  const PropCards = [
    {
      title: 'Foros',
      description: 'Santiago',
      route: '/Forums'
    },
    {
      title: 'Quizzes',
      description: 'Santiago',
      route: '/Quizzes'
    },
    {
      title: 'Evaluaciones',
      description: 'Santiago',
      route: '/Evaluations'
    },
    {
      title: 'Publicaciones',
      description: 'Santiago',
      route: '/Publications'
    },
    {
      title: 'Comentarios y opiniones',
      description: 'Santiago',
      route: '/ComentsOpinions'
    }
  ]
  return(
    <Cards PropCards={PropCards}/>
  )
}

export default Home