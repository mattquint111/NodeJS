const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const session = require('express-session')
const indexRouter = require('./routes/index')

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.urlencoded())
app.use(express.static('js'))
app.use('/css', express.static('css'))
app.use(session({
    secret: 'useASecureKeyHere',
    resave: false,
    saveUninitialized: true
}))
app.use('/', indexRouter)

global.users = [
    {username: "admin", password: "$2b$10$AgrrYDHHBsCf.m1/8A0nveZZ6WHlCx8X5eutIdLDUMHIQsVZ9jiKG"}
]


app.listen(3000, () => {console.log("Server is running...")})