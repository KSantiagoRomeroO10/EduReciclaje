const { Router } = require("express")
const UserRoute = Router()

const { CreateUser, GetAllUsers, GetOneUser, DeleteByIdUser } = require('../Controllers/UserController')

UserRoute.post('/new', CreateUser)
UserRoute.get('/getAll', GetAllUsers)
UserRoute.get('/getOne', GetOneUser)
UserRoute.delete('/delete', DeleteByIdUser)

module.exports = UserRoute
