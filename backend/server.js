const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const ticketRoutes = require("./routes/tickets");
const { authenticateJWT } = require("./middleware/auth");

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using env var
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tickets", authenticateJWT, ticketRoutes);

// Serve frontend (optional if hosting frontend elsewhere like Vercel)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../src/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../src/build", "index.html"))
  );
}

// Port from env or fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
