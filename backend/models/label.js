var mongoose = require("mongoose");

var labelSchema = new mongoose.Schema({
  name: String
}, { collection: 'labels' });

module.exports = mongoose.model("Label", labelSchema);
