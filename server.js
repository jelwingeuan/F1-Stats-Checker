const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

const API_URL = "https://ergast.com/api/f1";

















app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});