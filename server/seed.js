const sequelize = require('./database')                     // pull sequelize constant declared in database.js file

const seed = () => {                                        // build seed function to create tables in database ... one time use
    sequelize.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(60) NOT NULL,
            password VARCHAR(128) NOT NULL
        );
        
        CREATE TABLE expenses (
            id_expenses SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            total_expense DECIMAL(10,2) NOT NULL,
            due_date DATE NULL,
            paid_status BOOLEAN NOT NULL
        );
        
        CREATE TABLE income (
            id_income SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id),
            total_income DECIMAL(10,2) NOT NULL,
            source_income VARCHAR(60) NOT NULL
        )
    `).then(() => {
        console.log("DB has been seeded")                   // feedback if seed is successful
    })
}

module.exports = seed                                       // export seed function to use in server.js