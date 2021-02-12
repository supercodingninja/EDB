const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");

const Port = process.env.Port || 9001;
const app = express();

// Configured Packages Installed. //
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// Configured Express Handlebars. //
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

// Configured Server. //
app.listen(Port, () => {
    console.log("My Seerver should be starting at PORT ${PORT}");
});