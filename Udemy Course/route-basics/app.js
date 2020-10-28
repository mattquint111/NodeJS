// load modules and functions
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const mustacheExpress = require('mustache-express')
const userRoutes = require('./routes/users')
const session = require('express-session')

const VIEWS_PATH = path.join(__dirname, '/views')

// set up mustache template engine
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials','.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')

// middleware
app.use(session ({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use('/css', express.static("css"))
app.use('/users', userRoutes)

// start server listening at PORT: 3000
app.listen(3000, () => {
    console.log('Server is running on PORT: 3000')
})