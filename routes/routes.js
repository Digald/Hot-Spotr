const path = require("path");
const axios = require("axios");
module.exports = function(app, passport) {
  // PROFILE SECTION =========================
  app.get("/mydash", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"), {
      user: req.user
    });
  });

  // LOGOUT ==============================
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // =============================================================================
  // AUTHENTICATE (FIRST LOGIN) ==================================================
  // =============================================================================
  // LOGIN ===============================
  // process the login form
  app.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/mydash", // redirect to the secure profile section
      failureRedirect: "/", // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    })
  );

  // SIGNUP =================================
  // process the signup form
  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/mydash", // redirect to the secure profile section
      failureRedirect: "/", // redirect back to the signup page if there is an error
      failureFlash: true // allow flash messages
    })
  );

  app.post("/call", function(req, res) {
    console.log(req.body);
    const keyword = req.body.keyword;
    axios
      .get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=30.2672,-97.7431&radius=50000&keyword="+ keyword +"&key=AIzaSyBj2iAiGV1zywVVzlZSaIM1y3VPpCUqRF0"
      )
      .then(result => {
        res.json(result.data);
      });
  });
};
// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();

  res.redirect("/");
}
