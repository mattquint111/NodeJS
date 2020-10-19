const express = require("express")
const app = express()
const port = 3000

// root endpoint for localhost:3000/
app.get('/', (req,res) => {
    res.send("Hello World!")
})

// /movies endpoint response
app.get("/movies", (req,res) => {
    let movies = [
        {name: 'Spiderman', year: 2020},
        {name: 'Batman', year: 2001},
        {name: 'Superman', year: 1990}
    ]

    let response = {search: movies, 
                    totalResults: movies.length,
                    Response: true}

    res.json(response)
})

// Activity 1
app.get("/name", (req, res) => {

    // define json object to return
    let fullname = {
        'firstname': "John",
        'lastname': "Doe",
    }

    // response when /name endpoint is called
    res.json(fullname)
})

// Starts the server at localhost:3000
app.listen(port, () => {
    console.log("Listening at port: " + port)
})