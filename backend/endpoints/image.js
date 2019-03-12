var express = require("express");
var router = express.Router();
var Image = require("../models/image.js");
var parser = require("../image_repository/cloudinary_config.js");

router.post("/image", parser.single("file"), (req, res) => {
  try {
    if (req.file) {
      var image = new Image(req.file);
      image.save((err, newImage) => {
        if (err) return res.status(500).send({ message: "Error saving Image" });
        res.status(200).send(newImage);
      });
    } else {
      res.status(200).send({}).end();
    }
  } catch (error) {
    res.status(500).send({ message: "Generic Error" });
  }
});

var imageUploader = {
  router
};

module.exports = imageUploader;
