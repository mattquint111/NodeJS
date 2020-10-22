
const express = require('express')
const router = express.Router() 
const { v4: uuidv4 } = require('uuid');

// localhost:3000/trips/
router.get('/',(req,res) => {
    res.render('trips', {trips: trips})
})

/*
// localhost:3000/trips/houston
router.get('/:city',(req,res) => {
    const city = req.params.city
    res.render(trips)
}) */

// localhost:3000/trips/create-trip
router.post('/create-trip',(req,res) => {
    
    const title = req.body.title 
    const departureDate = req.body.departDate

    let trip = {tripId: uuidv4(), title: title, departureDate: departureDate}

    trips.push(trip)

    res.redirect('/trips')

})

router.post('/delete-trip', (req,res) => {
    
    const tripId = req.body.tripId

    trips = trips.filter(trip => {
        return trip.tripId != tripId
    })

    res.redirect('/trips')

})

module.exports = router 