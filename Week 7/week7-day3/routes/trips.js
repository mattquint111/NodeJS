const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')



// localhost:3000/trips/
router.get('/', (req,res) => {
    res.render('trips')
})

router.get('/:place', (req, res) => {
    let place = req.params.place

    res.render('trips', {place: place})
})

// exports router as a module to be imported
module.exports = router