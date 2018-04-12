require("dotenv").config();
const keys = require("./keys.js");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const router = require('./routes');


// auth0 work----------------------------------
// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: keys.auth0.domain,
    clientID: keys.auth0.clientID,
    clientSecret: keys.auth0.clientSecret,
    callbackURL: keys.auth0.callbackURL
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);
passport.use(strategy);
// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
// ...
app.use(passport.initialize());
app.use(passport.session());

// Import sequelize models
const db = require("./models");

// Serve up static assets (usually on heroku)
app.use(express.static("client/build"));

// Set up body parser from documentation
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',router); 
// Define any API routes before this runs
app.use("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
