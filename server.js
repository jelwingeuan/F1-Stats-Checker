const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

const API_URL = "https://ergast.com/api/f1";

app.get("/api/drivers", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/current/driverStandings.json`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/api/races", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/current.json`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});