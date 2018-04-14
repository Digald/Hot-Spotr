require("dotenv").config();
const keys = require("./keys.js");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");
const passport = require("passport");
const flash = require('connect-flash');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const session = require('express-session');

// Import sequelize models
const db = require("./models");

// pass passport for configuration
require('./config/passport')(passport, db.user);

// Serve up static assets
app.use(express.static("client/build"));

// Set up express app
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// required for passport
app.use(session({ secret: 'zomaareenstukjetekstDatjenietzomaarbedenkt' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./routes/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport
// Define any API routes before this runs
app.use("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Run server and sync database
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
