const express = require("express")
const { response } = require("express")
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

app.get("/movies/genre/:genre/year/:year", (req,res) => {
    
    // get variable being passed into :genre
    let genre = req.params.genre
    let year = req.params.year
    console.log(req.params)

    let movies = [
        {title: `${genre} movie 1`},
        {title: `${genre} movie 2`},
        {title: `${genre} movie 3`},    
    ]

    res.json(movies)
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

// Activity 2: route parameters
app.get("/digital-crafts/cohort/:year", (req, res) => {

    // set variable for route parameter /:year
    let year = req.params.year
    let responseString = `I study at DigitalCrafts ${year} Cohort`

    res.send(responseString)
})


// Starts the server at localhost:3000
app.listen(port, () => {
    console.log("Listening at port: " + port)
})