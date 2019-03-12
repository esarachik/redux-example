var band = require("./band.js");
var disc = require("./disc.js");
var genre = require("./genre.js");
var label = require("./label.js");
var track = require("./track.js");
var country = require("./country.js");
var image = require("./image.js");

module.exports = app => {
  app.use("/", band.router);
  app.use("/", disc.router);
  app.use("/", genre.router);
  app.use("/", label.router);
  app.use("/", track.router);
  app.use("/", country.router);
  app.use("/", image.router);
};
