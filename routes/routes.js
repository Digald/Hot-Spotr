const path = require("path");
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
};
// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();

  res.redirect("/");
}
