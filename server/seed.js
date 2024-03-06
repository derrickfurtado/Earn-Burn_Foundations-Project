const sequelize = require('./database')

const seed = () => {
    sequelize.query(`
        CREATE TABLE users {
            id SERIAL PRIMARY KEY
            name varchar(60)
            password string
        };
        
        expenses {
            id integer pk increments unique
            user_id integer *> users.id
            total_expense decimal
            due_date date null
            paid_status boolean
        };
        
        income {
            id integer pk increments unique
            user_id integer *> users.id
            total_income integer
            source_income integer
        }
    `).then( () => {
        console.log("DB has been seeded")
    })
}

// finish seed file @ 56.01