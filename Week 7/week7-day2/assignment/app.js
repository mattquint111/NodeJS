const express = require('express')
const app = express()
const mustacheExpress = require("mustache-express")

// set up mustache as template engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// middleware
app.use(express.urlencoded())

// start server at localhost:3000
app.listen(3000, () => {
    console.log("Server is running...")
})

// render .mustache server side pages
