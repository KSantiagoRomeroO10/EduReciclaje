// import Styles from './CrudPublicationsIndividuals.module.css'
import Read from '../../CRUD/Read/Read'

const CrudPublicationsIndividuals = () => {

  const Data = [
    { Id: 1, Titulo: 'Reciclaje de textiles.', Contenido: 'El reciclaje de textiles permite reutilizar fibras de ropa y otros productos textiles, reduciendo la necesidad de producir nuevas materias primas. Esto ayuda a disminuir el uso de agua y energía, así como a reducir los residuos en los vertederos. Los textiles reciclados se pueden convertir en nuevos productos como ropa, trapos y materiales de aislamiento.', Categoria: 'ImpactoReciclaje' },
    { Id: 2, Titulo: 'Reciclaje de neumáticos.', Contenido: 'El reciclaje de neumáticos evita que estos se acumulen en vertederos o sean quemados, lo que puede liberar sustancias tóxicas al medio ambiente. Los neumáticos reciclados pueden ser reutilizados en la fabricación de productos como pavimentos de caucho, asfalto modificado y materiales de construcción, contribuyendo así a la economía circular.', Categoria: 'ImpactoReciclaje' },
    { Id: 3, Titulo: 'Reciclaje de baterías.', Contenido: 'El reciclaje de baterías es crucial para recuperar metales valiosos y evitar la contaminación por sustancias tóxicas como el plomo, el cadmio y el mercurio. Las baterías recicladas se pueden descomponer en sus componentes básicos para fabricar nuevas baterías u otros productos, reduciendo la necesidad de extraer nuevos materiales.', Categoria: 'ImpactoReciclaje' },
    { Id: 4, Titulo: 'Reciclaje de muebles.', Contenido: 'Reciclar muebles evita que grandes volúmenes de madera, metal y otros materiales terminen en vertederos. Los muebles reciclados pueden ser restaurados, reutilizados o descompuestos en sus componentes para fabricar nuevos productos, lo cual fomenta la sostenibilidad y la economía circular.', Categoria: 'ImpactoReciclaje' },
    { Id: 5, Titulo: 'Reciclaje de agua.', Contenido: 'El reciclaje de agua implica la reutilización de aguas residuales tratadas para aplicaciones como el riego agrícola, la recarga de acuíferos y usos industriales. Este proceso ayuda a conservar los recursos hídricos, reduce la demanda de agua potable y minimiza el impacto ambiental de las aguas residuales.', Categoria: 'ImpactoReciclaje' },
    { Id: 6, Titulo: 'Reciclaje de aceite de cocina.', Contenido: 'El reciclaje de aceite de cocina usado evita la contaminación del agua y los sistemas de alcantarillado. El aceite reciclado puede ser convertido en biodiésel, un combustible renovable que reduce las emisiones de gases de efecto invernadero y proporciona una alternativa sostenible a los combustibles fósiles.', Categoria: 'ImpactoReciclaje' },
    { Id: 7, Titulo: 'Reciclaje de envases.', Contenido: 'Reciclar envases de plástico, vidrio, metal y cartón reduce la cantidad de residuos sólidos y la demanda de materias primas vírgenes. Los envases reciclados pueden ser reutilizados para fabricar nuevos productos de embalaje, lo cual contribuye a la sostenibilidad y a la reducción de la huella ecológica de la industria del embalaje.', Categoria: 'ImpactoReciclaje' },
    { Id: 8, Titulo: 'Reciclaje de madera.', Contenido: 'El reciclaje de madera implica la reutilización de residuos de madera para fabricar productos como tableros de partículas, mantillo y materiales de construcción. Esto ayuda a reducir la deforestación, conserva los recursos naturales y minimiza los residuos de madera en los vertederos.', Categoria: 'ImpactoReciclaje' },
    { Id: 9, Titulo: 'Reciclaje de residuos agrícolas.', Contenido: 'El reciclaje de residuos agrícolas, como paja, restos de cultivos y estiércol, permite convertir estos materiales en compost, biogás y otros productos útiles. Este proceso contribuye a la sostenibilidad agrícola, reduce las emisiones de gases de efecto invernadero y mejora la salud del suelo.', Categoria: 'ImpactoReciclaje' },
    { Id: 10, Titulo: 'Reciclaje de escombros de construcción.', Contenido: 'Reciclar escombros de construcción y demolición permite recuperar materiales como concreto, ladrillos y metal, que pueden ser reutilizados en nuevos proyectos de construcción. Esto reduce la demanda de materias primas, disminuye los residuos en los vertederos y promueve prácticas de construcción sostenible.', Categoria: 'ImpactoReciclaje' }
  ]

  const ColumnNames = ['Id', 'Titulo', 'Contenido', 'Categoria']

  return(<Read Data={Data} ColumnNames={ColumnNames}/>)
}

export default CrudPublicationsIndividuals
