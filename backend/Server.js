const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const routes = require("./routes/PowerConsumptionRoute");

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}`));
