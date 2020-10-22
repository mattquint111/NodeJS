const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require("uuid")


// render .mustache server side pages
router.get('/', authenticate, (req,res) => {
    let username = req.session.username

    let user = users.find( user => {
       return user.username == username
    })
    console.log(user)
    res.render('trips', {trips: user.trips})
})

router.post('/', authenticate, (req,res) => {
    const name = req.body.name
    const departureDate = req.body.departureDate
    const returnDate = req.body.returnDate
    const tripId = uuidv4()
    const image = req.body.image

    let username = req.session.username
    let user = users.find(user => {
        return user.username = username
    })
    let trip = {name: name, departureDate: departureDate, returnDate: returnDate, tripId: tripId, image: image}
    user.trips.push(trip)

    res.redirect('/trips')
})

// delete trip when button is clicked
router.post('/delete', authenticate, (req,res) => {
    const tripIdDelete = req.body.deleteTripId
    
    let username = req.session.username
    let user = users.find(user => {
        return user.username = username
    })
    user.trips = user.trips.filter( trip => {
        return trip.tripId != tripIdDelete
    })

    res.redirect('/trips')
})

// sort trip array when sort button is clicked
// sort by ascending date
router.post('/sort-asc', authenticate, (req, res) => {
    let username = req.session.username
    let user = users.find(user => {
        return user.username = username
    })
    user.trips = user.trips.sort((a, b) => new Date(a.returnDate) - new Date(b.returnDate))

    res.redirect('/trips')
})

// sort by descending date
router.post('/sort-desc', authenticate, (req, res) => {
    let username = req.session.username
    let user = users.find(user => {
        return user.username = username
    })
    user.trips = user.trips.sort((a, b) => new Date(b.returnDate) - new Date(a.returnDate))

    res.redirect('/trips')
})

// search by trip name
router.post('/search', authenticate, (req, res) => {
    let searchedTripName = req.body.searchName
    let username = req.session.username
    let user = users.find(user => {
        return user.username = username
    })
    let searchedTripArray = []
    user.trips.forEach(trip => {
        if (trip.name.toLowerCase() == searchedTripName.toLowerCase()) {
            searchedTripArray.push(trip)
        }
    })

    res.render('trips', {trips: searchedTripArray})
})

router.post('/signOut', authenticate, (req, res) => {
    req.session.destroy()
    res.redirect('/')
})

function authenticate(req,res,next) {
    if (req.session && req.session.username) {
        next()
    } else {
        res.redirect('/')
    }
}


module.exports = router