var mongoose = require("mongoose");
var cheerio = require("cheerio");
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var request = require("request");
// var axios = require("axios");
// Kat change to Axios, ditch Request

// Connect to the Mongo DB and create a nature db
var PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/nature",
  { useNewUrlParser: true }
);
