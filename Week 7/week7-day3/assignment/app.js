// import modules
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const moviesRouter = require('./routes/movies')

// set up template engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// middleware
app.use(express.json())
app.use(express.urlencoded())
app.use('/css', express.static('css'))
app.use('/movies', moviesRouter)
app.use('/', moviesRouter)

// start server listening at port 8888
app.listen(8888, () => {
    console.log("Server is running on PORT: 8888")
})



