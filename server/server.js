const express = require("express")                  // pull in express functions so we can talk to the server/database
const cors = require("cors")                        // pull in cors functions for more security

const sequelize = require('./database')             // pull in sequelize functions from the database.js file so we can run them in the server.js file

const seed = require('./seed')                      // pull in seed function 
const app = express()
const { registerUser, loginUser, addIncomeData, getIncomeData, addExpenseData, getExpenseData, deleteIncomeData, deleteExpenseData, editIncomeData, editExpenseData, flipPaidStatus, totalIncome, totalExpense } = require('./controller')      // pull in necessary function from controller.js


//=============================================================


app.use(express.json())                             // so we can capture data from forms
app.use(cors())                                     // so we don't have issues receiving requests

// app.post('/api/seed',seed)                       // using express via app constant to .POST seed function into database ... one time use


app.post('/api/register', registerUser)              // start with endpoint for registering user/password and pass in registerUser function 
app.post('/api/login', loginUser)                    // add endpoint for logging users in                
app.post('/api/addIncome', addIncomeData)            // add endpoint for adding income data into DB
app.get('/api/getIncome', getIncomeData)
app.post('/api/addExpense', addExpenseData)
app.get('/api/getExpense', getExpenseData)
app.delete('/api/deleteIncome/:id', deleteIncomeData)
app.delete('/api/deleteExpense/:id', deleteExpenseData)
app.put('/api/changeIncome', editIncomeData)
app.put('/api/changeExpense', editExpenseData)
app.put('/api/changePaidStatus/:id', flipPaidStatus)
app.get('/api/getIncomeTotal', totalIncome)
app.get('/api/getExpenseTotal', totalExpense)







//=============================================================


sequelize.sync()

app.listen(4040, () => console.log("Crank it up to port 4040"))