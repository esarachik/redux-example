var express = require('express')
var router = express.Router()
var Genre = require('../models/genre.js')

router.get('/genres', async (req, res) => {
    try {
        var genres = await Genre.find({})
        res.send(genres)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})    

var genre = {
    router
}

module.exports = genre