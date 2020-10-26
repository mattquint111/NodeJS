const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
// initialize pg-promise library
const pgp = require('pg-promise')()
const connectionString = 'postgres://localhost:5432/mydatabase'

// initialize pg-promise using a connection string
// pgp(...) returns an object which contains functions to interact with the database => db
const db = pgp(connectionString)

// middleware
app.use(express.urlencoded())

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.get('/', (req,res) => {

    // any function will always return an array
    db.any('SELECT user_id, first_name, last_name, age FROM users')
        .then(users => {
            res.render('index', {users})
        })
        .catch(err => console.log(err))
})

app.post('/create-user', (req,res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const age = parseInt(req.body.age)

    db.none('INSERT INTO users(first_name, last_name, age) VALUES($1,$2,$3)', [firstName, lastName, age])
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))

})

app.post('/delete-user', (req,res) => {
    const userId = req.body.userId

    db.none('DELETE FROM users WHERE user_id = $1', [userId])
        .then(() => {
            res.redirect('/')
        })
        .catch(err => console.log(err))
})



app.listen(3000, () => {
    console.log('Server is running...')
})