const express = require("express")
const app = express()
const mustacheExpress = require("mustache-express")

// set up mustache as template engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set("view engine", "mustache")

app.listen(3000, () => {
    console.log("Server is running...")
})

app.get('/', (req,res) => {
    res.render("index", {name: "World"})
})