require('dotenv').config()                              // pull in dotenv config functions

const {CONNECTION_STRING} = process.env                 // pull credentials of database from .env function
const {Sequelize} = require('sequelize')                // pull sequelize functions from node modules

const sequelize = new Sequelize(CONNECTION_STRING)      // declare constant using the sequelize modules applied to the database credentials

module.exports = sequelize                              // export the constant to use elsewhere