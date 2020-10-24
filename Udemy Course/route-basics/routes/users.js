const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {

    let user = {name: "John Doe",
                address: {
                    street: "123 Road",
                    city: "Houston",
                    state: "TX"
                }
            }

    res.render('index', user)
})

router.get('/add-user', (req, res) => {
    res.render('add-user')
})

router.post('/add-user', (req, res) => {
    let name = req.body.name
    let age = req.body.age
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