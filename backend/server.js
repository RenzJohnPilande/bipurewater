const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const clientRouter = require("./routes/client");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Use Express' built-in JSON parsing

// Routes
app.use("/api/client", clientRouter);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// Global error handling
app.use((req, res) => {
  res.status(404).send("Not Found");
});

// General error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error", error: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
