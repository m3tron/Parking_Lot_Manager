const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../models");

// logout user
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// GOOGLE
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get(
  "/google/redirect",
  passport.authenticate("google", {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
  })
);

// FACEBOOK
router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/redirect",
  passport.authenticate("facebook", {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
  })
);

// TWITTER
router.get("/twitter", passport.authenticate("twitter"));

router.get(
  "/twitter/redirect",
  passport.authenticate("twitter", {
    successRedirect: "/dashboard",
    failureRedirect: "/login"
  })
);

// added here to ensure user is available to access user object on the frontend
const ensureAuthenticated = (req, res, next) => {
  if (!req.user) {
    //if user not logged in
    res.redirect("/login");
  } else {
    next();
  }
};

// used to acquire user object
router.get("/user", ensureAuthenticated, (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  } else {
    res.json({
      success: false,
      message: "user is not authenticated"
    });
  }
});

module.exports = router;
