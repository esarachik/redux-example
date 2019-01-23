var express = require('express')
var router = express.Router()
var Country = require('../models/country.js')

router.get('/countries', async (req, res) => {
    try {
        var countries = await Country.find({})
        res.send(countries)
    }
    catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})    

var country = {
    router
}

module.exports = country