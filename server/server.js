//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const blogs = [];
const app= express();
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded ({extended: true}));



app.listen(process.env.PORT || 3000, function () {
    console.log("server is running at port 3000 punya randi/");
});