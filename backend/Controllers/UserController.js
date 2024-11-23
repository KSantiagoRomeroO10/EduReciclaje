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

const GetUsers = async (req, res) => {
  try {
    const Users = await User.findAll()
    res.status(200).json(Users)
  } 
  catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const GetUserByUser = async (req, res) => {
  try {
    const { user, password } = req.body

    if(!user || !password) return res.status(400).json({error: 'Faltan los campos "user" o "password".'})

    const FindUser = await User.findOne({
      where: {
        user,
        password
      }
    })
    res.status(200).json(FindUser)
  } 
  catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const DeleteByIdUser = (req, res) => {
  try {
    const { idUser } = req.body

    if(!idUser) return res.status(400).json({ error: 'Falta el campo idUser' })

    const DeleteUser = User.destroy({ where: idUser })

    if(DeleteUser) res.status(200).json({ message: 'Usuario eliminado con éxito' })
    else res.status(404).json({ error: `Usuario con el id ${idUser} no encontrado` })
  } 
  catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { CreateUser, GetUsers, GetUserByUser, DeleteByIdUser }
