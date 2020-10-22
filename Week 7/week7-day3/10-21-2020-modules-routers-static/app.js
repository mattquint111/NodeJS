const express = require('express')
const app = express() 
const mustacheExpress = require('mustache-express')

//const Calculator = require('./calculator')

const tripsRouter = require('./routes/trips')

//let trips = [] 

// global.trips mean that you can access trips from express routers 
global.trips = [] 

// everything inside the css folder is now available at a root level 
// root = localhost:3000
//app.use(express.static('css'))

// localhost:3000/static/styles.css
app.use('/static',express.static('css'))

// everything inside the images folder is now available at a root level 
// localhost:3000/images/cat1.png
app.use('/images',express.static('images'))

app.use(express.urlencoded())

// localhost:3000/trips -> tripsRouter is going to handle it 
// localhost:3000/trips/create-trip -> tripsRouter is going to handle it
// localhost:3000/trips/delete-trip -> tripsRouter is going to handle it

app.use('/trips',tripsRouter)
//app.use('/users',usersRouter)

// setting up Express to use Mustache Express as template pages 
app.engine('mustache', mustacheExpress())
    // the pages are located in views directory
app.set('views', './views')
    // extension will be .mustache
app.set('view engine', 'mustache')

app.get('/profile',(req,res) => {
    res.render('profile')
})



app.listen(3000,() => {
    console.log('Server is running...')
})


// create an instance/object of the Calculator class 
//let calc = new Calculator() 

// call the add function 
//calc.add(1,2)




