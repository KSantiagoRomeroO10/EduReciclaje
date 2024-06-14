import Styles from './Read.module.css'

import Create from '../Create/Create'
import Delete from '../Delete/Delete'
import Update from '../Update/Update'

const Read = ({ Data, ColumnNames }) => {
  
  return (
    <>
      <Create/>
      <table className={Styles.Table}>
        <thead>
          <tr>
            {ColumnNames.map((colName, index) => (
              <th key={index}>{colName}</th>
            ))}
            <th>Operación</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {ColumnNames.map((colName, colIndex) => (
                <td key={colIndex} className={Styles.Dates}>{row[colName]}</td>              
              ))}
              <td>
                <Delete/>
                <Update/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Read
