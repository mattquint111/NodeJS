// import modules
const express = require('express')
const app = express()
const mustacheExpress = require("mustache-express")
const tripsRouter = require('./routes/trips')

// set up template engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// middleware
app.use('/trips', tripsRouter)
app.use(express.urlencoded())
app.use('/css', express.static('css'))

// start server listening at port 3000
app.listen(3000, () => {
    console.log("Server is running...")
})

