var mongoose = require("mongoose");

var imageSchema = new mongoose.Schema({
    bytes: Number,
    created_at: String,
    format: String,
    mimetype: String,
    public_id: String,
    secure_url: String,
    signature: String,
    url: String
}, { collection: 'images' });

module.exports = mongoose.model("Image", imageSchema);
