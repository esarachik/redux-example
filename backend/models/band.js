var mongoose = require("mongoose");

var bandSchema = new mongoose.Schema({
  name: String
}, { collection: 'bands' });

module.exports = mongoose.model("Band", bandSchema);
