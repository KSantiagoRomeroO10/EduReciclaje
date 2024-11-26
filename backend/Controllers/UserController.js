const User = require('../Models/User')

const CreateUser = async (req, res) => {
  try {
    const { user, names, lastnames, email, number_phone, password, date_birth, location, rol } = req.body
    const newUser = await User.create({ user, names, lastnames, email, number_phone, password, date_birth, location, rol })
    res.status(201).json({newUser})
  } 
  catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const GetAllUsers = async (req, res) => {
  try {
    const Users = await User.findAll()
    if(Users) res.status(200).json({Users})
    else res.status(404).json({'Not Found': 'No hay usuarios en la base de datos'})
  } 
  catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const GetOneUser = async (req, res) => {
  try {
    const { user, password } = req.body

    if(!user || !password) return res.status(400).json({error: 'Faltan los campos "user" o "password".'})

    const FindUser = await User.findOne({
      where: {
        user,
        password
      }
    })

    if(FindUser) res.status(200).json({FindUser})
    else res.status(404).json({'Not found': `Usuario ${user} no econtrado`})
  } 
  catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const DeleteByIdUser = async (req, res) => {
  try {
    const { idUser } = req.body

    if(!idUser) return res.status(400).json({ error: 'Falta el campo idUser' })

    const DeleteUser = await User.destroy({ where: { idUser } })

    if(DeleteUser) res.status(200).json({ message: 'Usuario eliminado con éxito' })
    else res.status(404).json({ 'Not Found': `Usuario con el id ${idUser} no encontrado` })
  } 
  catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { CreateUser, GetAllUsers, GetOneUser, DeleteByIdUser }
