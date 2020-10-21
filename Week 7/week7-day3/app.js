// import modules
const express = require('express')
const app = express()
const mustacheExpress = require("mustache-express")

// set up template engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// middleware
app.use(express.urlencoded())

// start server listening at port 3000
app.listen(3000, () => {
    console.log("Server is running...")
})

// render index.mustache page
app.get('/index', (req, res) => {
    res.render('index')
})