var mongoose = require('mongoose')
var trackSchema = new mongoose.Schema({
    name: String
  }, { collection: 'tracks' });
  
module.exports = mongoose.model('Track',trackSchema)