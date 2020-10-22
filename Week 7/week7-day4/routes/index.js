const express = require('express')
const router = express.Router()



// homepage
router.get('/', (req, res) => {
    res.render('index')
})
// go to registration page
router.get('/register', (req,res) => {

    res.render('register')
})
// go to login page
router.get('/login', (req,res) => {

    res.render('login')
})

// register an account
router.post('/registerUser', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    let user = {username: username, password: password, trips: []}
    users.push(user)
    console.log(users)
    res.render('login')
})

router.post('/loginUser', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    const existingUser = users.find( user => {
        return user.username == username && user.password == password
    })

    if (existingUser) {
        if(req.session) {

           req.session.username = username
            

            res.redirect('/trips')
        }
    }
})

module.exports = router