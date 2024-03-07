const sequelize = require('./database')                                       // pull in sequelize constant from server.js

module.exports = {
    registerUser: (req, res) => {
        const {name, password} = req.body
                                                                        // will need to hash these passwords at some point
        sequelize.query(`                                              
            INSERT INTO users (name, password)
            VALUES (
                '${name}',
                '${password}'                                            
            );
        `).then(dbRes => {
            res.status(200).send("Successfully registered User")
        }).catch(err => console.log(err))
    },
    loginUser: (req, res) => {
        const {name, password} = req.body
        // console.log(password)                                        // CHECK - query will only return result if the username is found
        sequelize.query(`
            SELECT name, password FROM users
            WHERE name = '${name}';                         
        `).then(dbRes => {
            // console.log(dbRes[0][0].password)
            if(password === dbRes[0][0].password) {                     // CHECK - if username is present, this checks if the password matches 
                res.status(200).send(dbRes[0])                          // if it matches, it sends back that username and password, only.
            } else {
                res.status(400).send("Password does not match")         // error if password doesn't match
            }
        }).catch(err => console.log("Username does not exist"))         // error if username does not exist
    },
    addIncomeData: (req,res) => {
        const {incomeTotal, incomeSource} = req.body

        sequelize.query(`
            INSERT INTO income (total_income, source_income)
            VALUES (
                '${incomeTotal}',
                '${incomeSource}'
            );
        `).then(dbRes => {
            console.log("Controller Query is sending addIncome.data: ", dbRes)
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    },
    getIncomeData: (req, res) => {          // add user_id into query
        sequelize.query(`
            SELECT * FROM income
            ORDER BY total_income DESC;
        `).then(dbRes => {
            console.log('controller getIncome.dbRes.data is: ', dbRes[0])
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },
    getExpenseData: (req, res) => {         // add user_id into query
        sequelize.query(`
            SELECT * FROM expenses
            ORDER BY total_expense DESC;
        `).then(dbRes => {
            console.log('controller getExpense.dbRes.data is: ', dbRes[0])
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    }
}



// need to add delete and edit for income (1:43:00)
// need to add delete, edit, and PAID button functions for expenses