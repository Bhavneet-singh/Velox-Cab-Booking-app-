const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  fullname,
  password,
  email,
  vehicle,
}) => {
    if(!fullname || !password || !email || !vehicle){
        throw new Error("All fields are required");
    }

    const captain = captainModel.create({
        fullname,
        password,
        email,
        vehicle
    })
    return captain;
}