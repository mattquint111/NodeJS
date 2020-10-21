const express = require('express')
const app = express()
const path = require('path')
const mustacheExpress = require("mustache-express")

// partials
const VIEWS_PATH = path.join(__dirname, '/views')

// template engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

// middleware
app.use(express.urlencoded())
app.use('/css', express.static("css"))


// start server listening at port 3000
app.listen(3000, () => {
    console.log("Server is running...")
})

app.get('/home', (req,res) => {

    res.render('home')
})

app.get('/index', (req,res) => {

    res.render('index')
})