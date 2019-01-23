var express = require('express')
var router = express.Router()
var Label = require('../models/label.js')

router.get('/labels', async (req, res) => {
    try {
        var labels = await Label.find({})
        res.send(labels)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})    

var label = {
    router
}

module.exports = label