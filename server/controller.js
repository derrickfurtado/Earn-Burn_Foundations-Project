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

    addIncomeData: (req,res) => {       //add user_id into query
        const {incomeTotal, incomeSource} = req.body

        sequelize.query(`
            INSERT INTO income (user_id, total_income, source_income)
            VALUES (
                '1',
                '${incomeTotal}',
                '${incomeSource}'
            );
        `).then(dbRes => {
            // console.log("Controller Query is sending addIncome.data: ", dbRes)
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    },
    addExpenseData: (req, res) => {
        const {expenseTotal, expenseSource, expenseDueDate} = req.body
        // expenseDueDate = expenseDueDate || null
        sequelize.query(`
            INSERT INTO expenses (user_id,total_expense, expense_name, due_date, paid_status)
            VALUES (
                '1',
                '${expenseTotal}',
                '${expenseSource}',
                '${expenseDueDate}',
                'false'
            )
        `).then(dbRes => {
            // console.log("Controller Query is sending addExpense.data: ", dbRes)
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    },

    getIncomeData: (req, res) => {          // add user_id into query
        sequelize.query(`
            SELECT * FROM income
            ORDER BY total_income DESC;
        `).then(dbRes => {
            // console.log('controller getIncome.dbRes.data is: ', dbRes[0])
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },

    getExpenseData: (req, res) => {         // add user_id into query
        sequelize.query(`
            SELECT * FROM expenses
            ORDER BY total_expense DESC;
        `).then(dbRes => {
            // console.log('controller getExpense.dbRes.data is: ', dbRes[0])
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },
    deleteIncomeData: (req, res) => {
        let {id} = req.params

        sequelize.query(`
            DELETE FROM income
            WHERE id_income = ${id}
        `).then(() => {
            return sequelize.query(`
                SELECT * FROM income
                ORDER BY total_income DESC;
            `)
        }).then(dbRes => {
            console.log("Income was deleted and controller is sending: ", dbRes[0])
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },
    deleteExpenseData: (req, res) => {
        console.log("delete request received")
        let {id} = req.params
        sequelize.query(`
            DELETE FROM expenses
            WHERE id_expenses = ${id}
            
        `).then(() => {
            return sequelize.query(`
                SELECT * FROM expenses
                ORDER BY total_expense DESC;
            `)
        }).then(dbRes => {
            console.log("Expense was deleted and controller is sending: ", dbRes[0])
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },
    editIncomeData: (req, res) => {
        console.log("income edit request received in server")
        const {id, newTotal, newSource} = req.body
        sequelize.query(`
            UPDATE income
            SET total_income = ${newTotal},
                source_income = '${newSource}'
            WHERE id_income = ${id}  
        `).then(dbRes => {
            console.log("Income has been updated")
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    },
    editExpenseData: (req, res) => {
        console.log('expense edit request received in server')
        const {id, newTotal, newSource, newDate} = req.body
        sequelize.query(`
            UPDATE expenses
            SET total_expense = ${newTotal},
                expense_name = '${newSource}',
                due_date = '${newDate}'
            WHERE id_expenses = ${id}
        `).then(dbRes => {
            console.log("Expense was updated")
            res.status(200).send(dbRes)
        }).catch(err => console.log(err))
    }
}



// need to add delete and edit for income (1:43:00)
// need to add delete, edit, and PAID button functions for expenses