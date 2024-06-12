import Styles from './Read.module.css'

import Create from '../Create/Create'
import Delete from '../Delete/Delete'
import Update from '../Update/Update'

const Read = () => {

  const Data = [
    { Name: 'Alice', Age: 25, City: 'New York' },
    { Name: 'Bob', Age: 30, City: 'San Francisco' },
    { Name: 'Charlie', Age: 35, City: 'Chicago' },
    { Name: 'David', Age: 28, City: 'Los Angeles' },
    { Name: 'Eve', Age: 22, City: 'Miami' },
    { Name: 'Frank', Age: 40, City: 'Houston' },
    { Name: 'Grace', Age: 32, City: 'Philadelphia' },
    { Name: 'Hannah', Age: 27, City: 'Phoenix' },
    { Name: 'Ivan', Age: 45, City: 'San Diego' },
    { Name: 'Judy', Age: 38, City: 'Dallas' }
  ]  

  const ColumnNames = ['Name', 'Age', 'City']
  
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
