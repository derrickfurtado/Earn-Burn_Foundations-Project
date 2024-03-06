const express = require("express")
const cors = require("cors")

const sequelize = require('./database')




const app = express()




sequelize.sync()

app.listen(4040, () => console.log("Crank it up to port 4040"))