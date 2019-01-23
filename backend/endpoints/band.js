var express = require('express')
var router = express.Router()
var Band = require('../models/band.js')

router.get('/bands', async (req, res) => {
    try {
        var bands = await Band.find({})
        res.send(bands)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})    

var band = {
    router
}

module.exports = band
