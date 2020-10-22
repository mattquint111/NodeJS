// import modules
const express = require('express')
const app = express()
const mustacheExpress = require("mustache-express")


// set up template engine
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

// middleware
app.use(express.urlencoded())


let movies = [
    {name: "Movie 1", movieId: 1},
    {name: "Movie 2", movieId:  2}
]

// start server listening at port 3000
app.listen(3000, () => {
    console.log("Server is running...")
})

app.get('/movies', (req,res) => {
    res.render('movies', {movies: movies})
})