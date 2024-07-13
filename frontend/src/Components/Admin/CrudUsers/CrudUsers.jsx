// import Styles from './CrudPublications.module.css'
import Read from "../../CRUD/Read/Read"

const CrudPublications = () => {

  const Data = [
    {
        Id: 1,
        Username: "santiago23",
        FirstName: "Santiago",
        LastName: "Romero",
        Email: "santiago@example.com",
        PhoneNumber: "123456789",
        Password: "claveSegura123",
        BirthDate: "1990-05-15",
        Location: "Madrid",
        Role: "Standard User"
    },
    {
        Id: 2,
        Username: "ana_gomez",
        FirstName: "Ana",
        LastName: "Gomez",
        Email: "ana.gomez@example.com",
        Password: "password123",
        BirthDate: "1988-08-21",
        Location: "Barcelona",
        Role: "Administrator"
    },
    {
        Id: 3,
        Username: "carlos85",
        FirstName: "Carlos",
        LastName: "Martinez",
        Email: "carlos.martinez@example.com",
        PhoneNumber: "987654321",
        Password: "secure456",
        BirthDate: "1985-03-10",
        Location: "Valencia",
        Role: "Standard User"
    },
    {
        Id: 4,
        Username: "elena_sanchez",
        FirstName: "Elena",
        LastName: "Sanchez",
        Email: "elena.sanchez@example.com",
        Password: "myPassword",
        BirthDate: "1992-11-18",
        Location: "Sevilla",
        Role: "Standard User"
    },
    {
        Id: 5,
        Username: "pedro99",
        FirstName: "Pedro",
        LastName: "Lopez",
        Email: "pedro.lopez@example.com",
        PhoneNumber: "654321987",
        Password: "secure123",
        BirthDate: "1989-07-02",
        Location: "Bilbao",
        Role: "Administrator"
    },
    {
        Id: 6,
        Username: "maria_garcia",
        FirstName: "Maria",
        LastName: "Garcia",
        Email: "maria.garcia@example.com",
        Password: "123456",
        BirthDate: "1993-04-25",
        Location: "Malaga",
        Role: "Standard User"
    },
    {
        Id: 7,
        Username: "juan_perez",
        FirstName: "Juan",
        LastName: "Perez",
        Email: "juan.perez@example.com",
        PhoneNumber: "789456123",
        Password: "password456",
        BirthDate: "1987-12-07",
        Location: "Alicante",
        Role: "Standard User"
    },
    {
        Id: 8,
        Username: "laura_martin",
        FirstName: "Laura",
        LastName: "Martin",
        Email: "laura.martin@example.com",
        Password: "securePassword",
        BirthDate: "1991-09-14",
        Location: "Zaragoza",
        Role: "Administrator"
    },
    {
        Id: 9,
        Username: "diego_fernandez",
        FirstName: "Diego",
        LastName: "Fernandez",
        Email: "diego.fernandez@example.com",
        PhoneNumber: "456123789",
        Password: "mySecret123",
        BirthDate: "1986-06-30",
        Location: "Granada",
        Role: "Standard User"
    },
    {
        Id: 10,
        Username: "carmen_molina",
        FirstName: "Carmen",
        LastName: "Molina",
        Email: "carmen.molina@example.com",
        Password: "qwerty",
        BirthDate: "1990-02-03",
        Location: "Murcia",
        Role: "Standard User"
    }
  ]

  const ColumnNames = ['Id', 'Username', 'FirstName', 'LastName', 'Email', 'Password', 'BirthDate', 'Location', 'Role']
  
  return(<Read Data={Data} ColumnNames={ColumnNames}/>)
}

export default CrudPublications
