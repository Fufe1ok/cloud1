const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({ order: [["id", "DESC"]] });

    res.json({ users });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = {
      name,
      email,
      password
    };

    const newUser = await User.create(user);

    res.json({ newUser });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({
      where: {
        email,
        password
      }
    });

    if (!foundUser) return res.status(404).send("Not found");

    res.json({ user: foundUser });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
