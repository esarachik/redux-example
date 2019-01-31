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

router.post('/disc', (req, res) => {
    var discData = req.body

    var disc = new Disc(discData)

    disc.save((err, newDisc) => {
        debugger;
        if (err)
            return res.status(500).send({ message: "Error saving Disc" })
            res.status(200).send({ newDisc })
    })
})

var disc = {
    router
}

module.exports = disc