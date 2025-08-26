const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authmiddlewares = require("../middlewares/auth.middlewares");


router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name should be at least 3 characters long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be at least 6 characters long"),
  ],
  userController.registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 3 })
      .withMessage("Password should be at least 6 characters long"),
  ],
  userController.loginUser
);

//GET User profile 
router.get("/profile" ,authmiddlewares.authUser  , userController.getUserProfile); 

//Logout User route 


module.exports = router;
