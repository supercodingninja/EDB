const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const Port = process.env.Port || 9001;

// Configured packages installed
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Configured Express Handlebars
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");