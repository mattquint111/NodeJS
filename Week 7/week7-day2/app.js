const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")

// set up mustache as template engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set("view engine", "mustache")

// MIDDLEWARE
app.use(express.urlencoded())

// start server at localhost:3000
app.listen(3000, () => {
    console.log("Server is running...")
})

// render index.mustache server side page
app.get('/', (req,res) => {
    res.render("index", {name: "World"})
})

app.get('/taks', (req,res) => {
    
    
    res.render("tasks")
})

//Activity 2
app.get('/customers/:name', (req, res) => {

    let name = req.params.name
    
    res.render("customers", {name: name})
})



//Activity 3
app.get('/add-customer', (req,res) => {

    res.render("add-customer")
})

app.post('/add-customer', (req,res) => {
    const name = req.body.name
    const age = req.body.age

    let person = {name: name, age: age}


    res.render("confirmation", person)
})

