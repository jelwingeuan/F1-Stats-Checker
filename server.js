const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

const API_URL = "https://ergast.com/api/f1";