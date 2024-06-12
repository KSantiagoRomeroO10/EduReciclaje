import Styles from './ButtonAction.module.css'

const ButtonAction = ({ Action }) => {
  const ActionLabels = {
    Create: 'Crear',
    Update: 'Actualizar',
    Delete: 'Eliminar'
  }

  const IsValidAction = ActionLabels.hasOwnProperty(Action)

  return (
    <button className={`${Styles[Action]} ${Styles.Button}`}>{ IsValidAction ? ActionLabels[Action] : 'Acción desconocida' }</button>
  )
}

export default ButtonAction
