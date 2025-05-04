const express = require("express");
const app = express();
const employeesRoute = require("./routes/employees");

app.use("/api", employeesRoute);

// Final Vercel-friendly handler
module.exports = (req, res) => app(req, res);
