const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10

router.get('/', (req,res) => {
    res.render('index')
})

router.post('/signIn', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    let existingUser = users.find(user => {
        return user.username == username
    })

    bcrypt.compare(password, existingUser.password, function(err, result) {
       
        if (result) {
            //password matches
            res.redirect('/home')
        } else {
            res.render('index', {message: "Password do not match"})
        }
    })
})

router.get('/register', (req,res) => {
    res.render('register')
})

router.post('/register', (req,res) => {
    const username = req.body.username
    const password = req.body.password

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            let user = {username: username, password: hash}
            users.push(user)
            console.log(users)
            res.redirect('/')
        })
    })

})

router.get('/home', (req,res) => {
    res.render('home')
})

module.exports = router