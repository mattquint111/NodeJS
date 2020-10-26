const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const indexRouter = require('./routes/index')
const loginRouter = require('./routes/login')
const session = require('express-session')

app.use(express.urlencoded())
app.use('/', indexRouter)
app.use('/login', loginRouter+)
app.use('/css', express.static('css'))
app.use(session({
    secret: 'grumpy cat',
    resave: false,
    saveUninitialized: true
}))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


app.listen(3000, () => {
    console.log("Server is running...")
})
