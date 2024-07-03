require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();
const PORT = process.env.PORT || 5000;
const API_URL = process.env.API_URL || "https://ergast.com/api/f1";

app.use(cors());
app.use(helmet());

// Async error handling middleware
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// driver standings
app.get(
  "/api/drivers",
  asyncHandler(async (req, res) => {
    const response = await axios.get(`${API_URL}/current/driverStandings.json`);
    res.json(response.data);
  })
);

// season races
app.get(
  "/api/races",
  asyncHandler(async (req, res) => {
    const response = await axios.get(`${API_URL}/current.json`);
    res.json(response.data);
  })
);

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error); // Log the error for debugging
  res.status(500).send("An unexpected error occurred. Please try again later.");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
