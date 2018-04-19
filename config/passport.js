// load all the things we need
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt-nodejs');
const db = require('../models');
module.exports = function(passport, user) {
  const User = user;
  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id)
      .then(function(user) {
        done(null, user);
      })
      .catch(function(e) {
        done(e, false);
      });
  });

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
      },
      function(req, email, password, done) {
        console.log(email);
        console.log(password);
        User.findOne({ where: { localemail: email } })
          .then(function(user) {
            if (!user) {
              console.log("no user");
              done(null, false, req.flash("loginMessage", "Unknown user"));
            } else if (!bcrypt.compareSync(password, user.localpassword)) {
              console.log("wrong password");
              done(null, false, req.flash("loginMessage", "Wrong password"));
            } else {
              console.log('success login!');
              done(null, user);
            }
          })
          .catch(function(e) {
            console.log(e);
            done(
              null,
              false,
              req.flash("loginMessage", e.name + " " + e.message)
            );
          });
      }
    )
  );
  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
      },
      function(req, email, password, done) {
        //  Whether we're signing up or connecting an account, we'll need
        //  to know if the email address is in use.

        User.findOne({ where: { localemail: email } })
          .then(function(existingUser) {
            // check to see if there's already a user with that email
            if (existingUser)
              return done(
                null,
                false,
                req.flash("loginMessage", "That email is already taken.")
              );

            //  If we're logged in, we're connecting a new local account.
            if (req.user) {
              var user = req.user;
              user.localemail = email;
              user.localpassword = User.generateHash(password);
              user
                .save()
                .catch(function(err) {
                  throw err;
                })
                .then(function() {
                  done(null, user);
                });
            } else {
              console.log("else hit")
              //  We're not logged in, so we're creating a brand new user.
              // create the user
              var newUser = User.build({
                localemail: email,
                localpassword: bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
              });
              newUser
                .save()
                .then(function(result) {
                  done(null, newUser);
                })
                .catch(function(err) {
                  done(null, false, req.flash("loginMessage", err));
                });
            }
          })
          .catch(function(e) {
            console.log(e);
            done(
              null,
              false,
              req.flash("loginMessage", e.name + " " + e.message)
            );
          });
      }
    )
  );
};
