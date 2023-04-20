const express = require("express");
const User = require("../models/user");

const user = express.Router();
user.get("/users", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

user.post("/users/add", async (req, res) => {
  const user = new User({
    username: req.body.username,
  });
  try {
    const u1 = await user.save();
    res.send(u1);
    console.log("user Added!");
  } catch (error) {
    console.log(error);
  }
});
module.exports = user;
