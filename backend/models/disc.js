var mongoose = require("mongoose");

var discSchema = new mongoose.Schema({
  label: { type: mongoose.Schema.Types.ObjectId, ref: "Label" },
  format: String,
  country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
  year: String,
  name: String,
  
  genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" },
  trackList: [{ type: mongoose.Schema.Types.ObjectId, ref: "Track" }],
  band: { type: mongoose.Schema.Types.ObjectId, ref: "Band" }
}, { collection: 'discs' });

module.exports = mongoose.model("Disc", discSchema);
