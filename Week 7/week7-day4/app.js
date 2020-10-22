// import modules
const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')


// set up template engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// middleware
app.use(express.json())
app.use(express.urlencoded())


// start server listening at port 8888
app.listen(5000, () => {
    console.log("Server is running on PORT: 5000")
})

app.get('/', (req, res) => {
    res.render('index')
})