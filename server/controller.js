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
    }
}