var express = require('express')
var router = express.Router()
var Track = require('../models/track.js')

router.get('/tracks', async (req, res) => {
    try {
        var tracks = await Track.find({})
        res.send(tracks)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})    

var track = {
    router
}

module.exports = track