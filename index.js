const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const courseRoutes = require("./routes/courseRoutes");
const blogRoutes = require("./routes/blogRoutes");
const dotenv = require("dotenv");
// Initialize Express app
const app = express();
console.log(process.env.MONGODB_URI);
// Database connection
mongoose
  .connect(
    
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("MongoDB connection error:", error));

// Middleware
app.use(cors()); // Enables CORS for all routes
app.use(express.json()); // Parses incoming JSON requests

// Routes
app.use("/api", courseRoutes);
app.use("/api", blogRoutes);
app.use("/api/auth", require("./routes/auth"));

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Course and Blog API");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
