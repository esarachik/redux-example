var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var app = express();

console.log("-Iniciando Server-");

mongoose.Promise = Promise;

app.use(cors());
app.use(bodyParser.json());

require("./endpoints")(app);

mongoose.connect(
  "mongodb://esarachik:eliandy2@ds033066.mlab.com:33066/vinyl-collection",
  { useMongoClient: true },
  err => {
    if (!err) console.log("-Connected to mongoDB-");
  }
);

app.listen(process.env.PORT || 3000);

console.log("-Iniciado Server-");
