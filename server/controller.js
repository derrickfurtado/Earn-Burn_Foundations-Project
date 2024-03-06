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
            )
        `).then(dbRes => {
            res.status(200).send("Successfully registered User")
        }).catch(err => console.log(err))
    },
    loginUser: (req, res) => {
        const {name, password} = req.body
        // console.log(password)
        sequelize.query(`
            SELECT name, password FROM users
            WHERE name = '${name}';
        `).then(dbRes => {
            // console.log(dbRes[0][0].password)
            if(password === dbRes[0][0].password) {
                res.status(200).send(dbRes[0])
            } else {
                res.status(400).send("Password does not match")
            }
        }).catch(err => console.log("Username does not exist"))
    }
}