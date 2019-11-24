const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const bolosRoutes = require("./routes/index");
app.use("/bolos", cors(), bolosRoutes);

module.exports = app;
