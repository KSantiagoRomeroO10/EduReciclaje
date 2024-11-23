const { Model, DataTypes } = require('sequelize')
const sequelize = require('./Config/Connect')

class User extends Model{}
User.init({
    idUser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    user:{
      type: DataTypes.STRING,
      allowNull: false
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastnames: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number_phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_birth: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {sequelize, modelName: 'user'}
)

module.exports = User
