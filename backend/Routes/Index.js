const express = require('express')
const Router = express.Router()

const UserRoute = require('./UserRoute')

Router.use('/user', UserRoute)

module.exports = Router
