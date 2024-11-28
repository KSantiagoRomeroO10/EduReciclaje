const { Sequelize } = require('sequelize')

const config = require('./ConfigDB')
const ConfigDB = config[process.env.NODE_ENV]

const sequelize = new Sequelize({
  username: ConfigDB.username,
  password: ConfigDB.password,
  database: ConfigDB.database,
  host: ConfigDB.host,
  port: ConfigDB.port,
  dialect: 'mysql',
  logging: false
})

module.exports = sequelize
