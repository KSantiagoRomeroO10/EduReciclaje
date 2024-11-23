const { Router } = require("express")
const UserRoute = Router()

const { CreateUser, GetUsers, GetUserByUser, DeleteByIdUser } = require('../Controllers/UserController')

UserRoute.post('/new', CreateUser)
UserRoute.get('/getAll', GetUsers)
UserRoute.get('/getOne', GetUserByUser)
UserRoute.get('/delete', DeleteByIdUser)

module.exports = UserRoute
