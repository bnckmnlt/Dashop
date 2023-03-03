const express = require("express");
const router = express.Router();
const {
  signupUser,
  signinUser,
  logoutUser,
} = require("../controllers/auth.controller");

router.post("/signup", signupUser);
router.get("/signin", signinUser);
router.get("/logout", logoutUser);

module.exports = router;
