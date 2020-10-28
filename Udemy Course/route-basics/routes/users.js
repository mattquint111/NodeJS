const express = require('express')
const router = express.Router()

function authenticate(req, res, next) {

    if(req.session) {
        if(req.session.name) {
            next()
        } else {
            res.redirect('/users/add-user')
        }
    } res.redirect('/users/add-user')
}

// root route '/' => 'localhost:3000/users'
router.get('/', (req,res) => {

    let user = {name: req.session.name,
                age: req.session.age,
                address: {
                    street: "123 Road",
                    city: "Houston",
                    state: "TX"
                }
            }

    res.render('index', user)
})

router.get('/bank-accounts', authenticate, (req, res) => {
    res.send("BANK ACCOUNTS")
})

router.get('/add-user', (req, res) => {
    res.render('add-user')
})

router.post('/add-user', (req, res) => {
    let name = req.body.name
    let age = req.body.age

    if(req.session) {
        req.session.name = name
        req.session.age = age
    }

    console.log(name)
    console.log(age)

    res.status(200).send()
})

router.get('/view-all', (req, res) => {
    let users = 
    [
        {name: "John Doe", age: 34},
        {name: "Jane Doe", age: 45},
        {name: "Jean Doe", age: 25}
    ]

    users = []
    res.render('users', {users: users})
})

module.exports = router