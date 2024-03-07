const sequelize = require('./database')                     // pull sequelize constant declared in database.js file

const seed = () => {                                        // build seed function to create tables in database ... one time use
    sequelize.query(`
    DROP TABLE IF EXISTS users, expenses, income;

    CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(60) NOT NULL,
            password VARCHAR(128) NOT NULL
        );
        
        CREATE TABLE expenses (
            id_expenses SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id) NOT NULL,
            total_expense DECIMAL(10,2) NOT NULL,
            expense_name VARCHAR (60) NOT NULL,
            due_date DATE NULL,
            paid_status BOOLEAN NOT NULL
        );
        
        CREATE TABLE income (
            id_income SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(id) NOT NULL,
            total_income DECIMAL(10,2) NOT NULL,
            source_income VARCHAR(60) NOT NULL
        );

        INSERT INTO users (name, password)
        VALUES ('test', 'password'),
        ('John Sena', 'watchout'),
        ('The Rock', 'candyass');

        INSERT INTO income (user_id, total_income, source_income)
        VALUES 
            (1, 1500.00, 'Work'),
            (1, 700.00, 'Uber'),
            (1, 200.00, 'Facebook Marketplace');

        INSERT INTO expenses (user_id, total_expense, expense_name, due_date, paid_status)
        VALUES (1, 1500.00, 'Rent', '2024-04-01', false),
        (1, 700.00, 'Fuel', NULL, true),
        (1, 200.00, 'Fun', NULL, true);

    `).then(() => {
        console.log("DB has been seeded")                   // feedback if seed is successful
    })
}

module.exports = seed                                       // export seed function to use in server.js