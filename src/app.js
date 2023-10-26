const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require('./routes/user.routes');
const CarRoute = require('./routes/car.routes');
const app = express();

app.use(bodyParser.json())

app.use("/", UserRoute);
app.use("/", CarRoute);

module.exports = app;