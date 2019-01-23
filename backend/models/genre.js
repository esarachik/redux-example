var mongoose = require("mongoose");

var genreSchema = new mongoose.Schema({
  name: String
}, { collection: 'genres' });

module.exports = mongoose.model("Genre", genreSchema);
