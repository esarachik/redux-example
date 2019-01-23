var express = require('express')
var router = express.Router()
var Disc = require('../models/disc.js')

router.get('/discs', async (req, res) => {
    try {
        var discs = await Disc.find({})
        res.send(discs)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})    

var disc = {
    router
}

module.exports = disc