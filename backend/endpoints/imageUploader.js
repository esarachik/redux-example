var express = require('express')
var router = express.Router()
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "nuevo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });

router.post('/image', parser.single('file'), (req, res) => {
    console.log(req.file)
    res.send(req.file) // to see what is returned to you
    // const image = {};
    // image.url = req.file.url;
    // image.id = req.file.public_id;
   // cloudinary.v2.uploader.upload(file, options, callback);

    // Image.create(image) // save image information in database
    //   .then(newImage => res.json(newImage))
    //   .catch(err => console.log(err));
  });

var imageUploader = {
    router
}

module.exports = imageUploader