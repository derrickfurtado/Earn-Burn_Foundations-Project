const express = require("express")                  // pull in express functions so we can talk to the server/database
const cors = require("cors")                        // pull in cors functions for more security

const sequelize = require('./database')             // pull in sequelize functions from the database.js file so we can run them in the server.js file

const seed = require('./seed')                      // pull in seed function 
const app = express()
const {registerUser, loginUser} = require('./controller')      // pull in registerUser function from controller.js


//=============================================================



app.use(express.json())                             // so we can capture data from forms
app.use(cors())                                     // so we don't have issues receiving requests

// app.post('/api/seed',seed)                       // using express via app constant to .POST seed function into database ... one time use


app.post('/api/register',registerUser)                           // start with endpoint for registering user/password and pass in registerUser function 
app.post('/api/login',loginUser)








//=============================================================


sequelize.sync()

app.listen(4040, () => console.log("Crank it up to port 4040"))