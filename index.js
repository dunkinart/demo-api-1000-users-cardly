const express = require("express");
const app = express();
const employeesRoute = require("./routes/employees");

app.use("/api", employeesRoute);

module.exports = app;
