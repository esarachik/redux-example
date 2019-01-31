var mongoose = require('mongoose')
var trackSchema = new mongoose.Schema({
    name: String,
    duration: String,
    number: Number
  }, { collection: 'tracks' });
  
module.exports = mongoose.model('Track',trackSchema)