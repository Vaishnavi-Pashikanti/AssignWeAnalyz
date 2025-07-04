const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  name: String,
  department: String,
  subject: String,
  category: String,
  description: String,
  type: String,
  priority: String,
  status: { type: String, default: "Open" }
});

module.exports = mongoose.model("Ticket", ticketSchema);