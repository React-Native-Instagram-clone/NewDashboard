const express = require("express");
const router = express.Router();
const User = require("../models/user");
const MenuHeading = require("../models/menuHeading");

router.post("/addUser", async (req, res) => {
  const { name, password, role, status } = req.body;
  const data = new User({
    name: name,
    password: password,
    role: role,
    status: status,
  });

  try {
    const user = await data.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/addMenuHeading", async (req, res) => {
  const { name, status } = req.body;
  const data = new MenuHeading({
    name: name,
    status: status,
  });

  try {
    const menuHeading = await data.save();
    res.status(200).json(menuHeading);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
