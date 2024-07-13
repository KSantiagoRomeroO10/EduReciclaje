// import Styles from './CrudForumsIndividuals.module.css'
import Read from '../../CRUD/Read/Read'

const CrudForumsIndividuals = () => {

  const Data = [
    { Id: 1, Titulo: 'Beneficios del reciclaje.', Contenido: 'El reciclaje es fundamental para contrarrestar el impacto de los productos en el medio ambiente y reducir la cantidad de desechos que producimos. Es sumamente importante reciclar porque no solo impide que ciertos materiales acaben dañando el medio ambiente, sino que además retroalimenta el circuito productivo con materias primas a bajo costo, lo cual contribuye con la economía y crea y sostiene necesarios empleos. Alrededor de un 37 % del papel fabricado a nivel mundial proviene del reciclaje.', Categoria: 'ImpactoReciclaje' },
    { Id: 2, Titulo: 'Reciclaje de plásticos.', Contenido: 'El reciclaje de plásticos ayuda a reducir la cantidad de residuos plásticos en vertederos y océanos, contribuyendo a la protección de la vida marina y la salud humana. Al reciclar plásticos, se pueden fabricar nuevos productos como envases, ropa y juguetes, reduciendo la necesidad de producir plásticos nuevos a partir de materias primas vírgenes.', Categoria: 'ImpactoReciclaje' },
    { Id: 3, Titulo: 'Reciclaje de metales.', Contenido: 'El reciclaje de metales como el aluminio y el acero permite ahorrar energía y recursos naturales. Por ejemplo, reciclar una lata de aluminio ahorra suficiente energía para mantener encendida una bombilla de 100 vatios durante cuatro horas. Además, el reciclaje de metales contribuye a la reducción de las emisiones de gases de efecto invernadero.', Categoria: 'ImpactoReciclaje' },
    { Id: 4, Titulo: 'Reciclaje de vidrio.', Contenido: 'El vidrio es un material 100 % reciclable que puede ser reciclado infinitamente sin pérdida de calidad. Reciclar vidrio ayuda a ahorrar energía y recursos naturales, ya que la producción de vidrio reciclado consume menos energía que la producción de vidrio nuevo. Además, el reciclaje de vidrio reduce los residuos en los vertederos y disminuye la contaminación ambiental.', Categoria: 'ImpactoReciclaje' },
    { Id: 5, Titulo: 'Reciclaje de papel y cartón.', Contenido: 'Reciclar papel y cartón es crucial para la conservación de los bosques y la reducción de residuos sólidos. El papel reciclado requiere un 70 % menos de energía y agua en comparación con la producción de papel nuevo. Además, el reciclaje de papel y cartón contribuye a la disminución de la deforestación y las emisiones de gases de efecto invernadero.', Categoria: 'ImpactoReciclaje' },
    { Id: 6, Titulo: 'Reciclaje electrónico.', Contenido: 'El reciclaje de productos electrónicos, como teléfonos móviles, computadoras y electrodomésticos, ayuda a recuperar materiales valiosos como oro, plata y cobre, y evita que sustancias peligrosas como el plomo y el mercurio contaminen el medio ambiente. Además, el reciclaje electrónico promueve la reutilización de componentes y reduce la necesidad de extraer nuevas materias primas.', Categoria: 'ImpactoReciclaje' },
    { Id: 7, Titulo: 'Compostaje.', Contenido: 'El compostaje es una forma de reciclaje de residuos orgánicos, como restos de comida y residuos de jardinería. Al compostar, se produce abono natural que mejora la calidad del suelo y reduce la necesidad de fertilizantes químicos. El compostaje también ayuda a disminuir la cantidad de residuos orgánicos en los vertederos y reduce las emisiones de metano, un potente gas de efecto invernadero.', Categoria: 'ImpactoReciclaje' },
    { Id: 8, Titulo: 'Economía circular.', Contenido: 'La economía circular es un modelo económico que promueve el reciclaje, la reutilización y la reducción de residuos. En lugar de seguir un modelo lineal de "tomar, hacer y desechar", la economía circular busca cerrar el ciclo de vida de los productos mediante el reciclaje y la reutilización, lo cual contribuye a la sostenibilidad ambiental y a la creación de empleos verdes.', Categoria: 'ImpactoReciclaje' },
    { Id: 9, Titulo: 'Educación y concienciación.', Contenido: 'La educación y concienciación sobre la importancia del reciclaje son fundamentales para fomentar hábitos sostenibles en la sociedad. Programas educativos y campañas de sensibilización ayudan a informar a las personas sobre cómo reciclar correctamente y los beneficios del reciclaje, lo cual aumenta las tasas de reciclaje y contribuye a la protección del medio ambiente.', Categoria: 'ImpactoReciclaje' },
    { Id: 10, Titulo: 'Políticas y regulaciones.', Contenido: 'Las políticas y regulaciones gubernamentales juegan un papel crucial en la promoción del reciclaje. Normativas que obligan a la separación de residuos, incentivos para el reciclaje y sanciones por la falta de cumplimiento contribuyen a aumentar las tasas de reciclaje y a fomentar una gestión adecuada de los residuos, protegiendo así el medio ambiente y la salud pública.', Categoria: 'ImpactoReciclaje' }
  ]

  const ColumnNames = ['Id', 'Titulo', 'Contenido', 'Categoria']

  return(<Read Data={Data} ColumnNames={ColumnNames}/>)
}

export default CrudForumsIndividuals