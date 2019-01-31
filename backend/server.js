var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var express = require("express");
var mongoose = require("mongoose");
var app = express();
var dotenv = require('dotenv');



dotenv.config({path:'backend/.env'})  

console.log("-Iniciando Server-");

mongoose.Promise = Promise;

app.use(cors());
app.use(bodyParser.json());

require("./endpoints")(app);

console.log(process.execPath)
mongoose.connect(
  process.env.MONGO_CONNECTION_STRING,
  { useMongoClient: true },
  err => {
    if (!err) console.log("-Connected to mongoDB-");
  }
);

app.listen(process.env.PORT || 3000);

console.log("-Iniciado Server-");
