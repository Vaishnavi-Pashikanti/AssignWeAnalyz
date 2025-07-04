const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const ticketRoutes = require("./routes/tickets");
const { authenticateJWT } = require("./middleware/auth");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/helpdesk", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Auth routes (login)
app.use("/api/auth", authRoutes);

// Ticket routes (protected)
app.use("/api/tickets", authenticateJWT, ticketRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});