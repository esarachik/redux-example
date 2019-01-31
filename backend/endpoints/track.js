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

router.post('/track', (req, res) => {
    var trackData = req.body

    var track = new Track(trackData)

    track.save((err, newTrack) => {
        if (err)
            return res.status(500).send({ message: "Error saving Track" })
            res.status(200).send({ newTrack })
    })
})

var track = {
    router
}

module.exports = track