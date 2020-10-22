const express = require('express')
const app = express()

app.listen(8888, (req,res) => {
    console.log("Server is running...")
})

app.get('/', (req, res) => {
    res.send("TESTING ROOT URL")
})

app.get('/index', (req, res) => {
    res.sendFile("/Users/matthewquint/Desktop/Projects/DigitalCrafts/NodeJS/Node-tutorials/Odin-Project/basic-info-site/index.html")
})

app.get('/about', (req, res) => {
    res.sendFile("/Users/matthewquint/Desktop/Projects/DigitalCrafts/NodeJS/Node-tutorials/Odin-Project/basic-info-site/about.html")
})

app.get('/contact-me', (req, res) => {
    res.sendFile("/Users/matthewquint/Desktop/Projects/DigitalCrafts/NodeJS/Node-tutorials/Odin-Project/basic-info-site/contact-me.html")
})

app.get('*', (req, res) => {
    res.send("WAIT WHAT???", 404)
})