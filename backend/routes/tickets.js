const express = require("express");
const { authorizeRoles } = require("../middleware/auth");
const Ticket = require("../models/Tickect");
const router = express.Router();

// Admin: get all tickets
router.get("/", authorizeRoles("admin"), async (req, res) => {
  const tickets = await Ticket.find().sort({ date: -1 });
  res.json(tickets);
});

// User: create a ticket
router.post("/", authorizeRoles("user"), async (req, res) => {
  const ticket = new Ticket({
    ...req.body,
    user: req.user.id,
    date: req.body.date || Date.now()
  });
  await ticket.save();
  res.status(201).json({ message: "Ticket created", ticket });
});

// User: get their own tickets
router.get("/my", authorizeRoles("user"), async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user.id }).sort({ date: -1 });
    res.json(tickets);
  } catch (err) {
    console.error("Error fetching tickets:", err);
    res.status(500).json({ message: "Server error fetching tickets." });
  }
});

module.exports = router;