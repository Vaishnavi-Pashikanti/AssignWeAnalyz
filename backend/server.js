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

// Connect to MongoDB using environment variable
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tickets", authenticateJWT, ticketRoutes);

// Serve frontend if deployed together
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../src/build");

  app.use(express.static(buildPath));

  app.get("/*", (req, res) =>
    res.sendFile(path.resolve(buildPath, "index.html"))
  );
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
