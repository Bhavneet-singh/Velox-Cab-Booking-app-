const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");
const captainService = require("../services/captain.service");


module.exports.registerCaptain = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { fullname, password, email, vehicle } = req.body;

  const hashPassword = await captainModel.hashPassword(password);

  const captain = await captainService.createCaptain({
    fullname,
    password: hashPassword,
    email,
    vehicle,
  });

  const token = captain.generateToken();

  return res.status(201).json({ token, captain });
};

module.exports.loginCaptain = async (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;

  const captain = await captainModel.findOne({ email }).select("+password");

  if (!captain) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const isMatch = await captain.comparePassword(password);

  if (!isMatch) {
    return res.status(400).json({ error: "Invalid password" });
  }

  const token = await captain.generateToken();

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600000,
  });

  return res.status(200).json({ token , captain  });
};

module.exports.getCaptainProfile = async (req, res, next) => {
    return res.status(200).json({ captain : req.captain  });
}