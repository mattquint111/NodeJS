const express = require('express')
const app = express()

app.get('/', (req,res) => {
    console.log("[LOGGED]")
    res.send("ROOT")
})

app.get('/login', (req,res) => {
    console.log("[LOGGED]")
    res.send("LOGIN")
})

app.listen(3000, () => {
    console.log("Server is running...")
})