const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const indexRouter = require('./routes/index')

app.use(express.urlencoded())
app.use('/', indexRouter)
app.use('/css', express.static('css'))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')


app.listen(3000, () => {
    console.log("Server is running...")
})
