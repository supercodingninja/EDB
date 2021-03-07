const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/handlers")
const PORT = process.env.PORT || 8085;
const app = express();


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Configured Packages Installed.  Parse application body //
app.use(express.urlencoded({extended:false}));
app.use(express.json());


// Configured Express Handlebars. //
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");       

// Configured Routes.  Import routes and give the server access to them. //
app.use(routes);

// Configured Server.  Start our server so that it can begin listening to client requests. //
app.listen(PORT, () => {
    console.log(`My Server should be starting at PORT ${PORT}`);
});