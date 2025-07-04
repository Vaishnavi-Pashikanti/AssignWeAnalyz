const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

// SIGN UP
router.post("/signup", async (req, res) => {
  const { username, password, role } = req.body;
  const existing = await User.findOne({ username });
  if (existing) return res.status(400).json({ message: "Username already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword, role: role || "user" });
  await user.save();

  res.status(201).json({ message: "User created" });
});

// SIGN IN
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id, role: user.role }, "your_jwt_secret", { expiresIn: "1h" });
  res.json({ token, user: { id: user._id, role: user.role, username: user.username } });
});

module.exports = router;