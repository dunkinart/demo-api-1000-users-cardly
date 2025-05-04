const express = require("express");
const router = express.Router();
const allEmployees = require("../data/employees.1000");

router.get("/employees", (req, res) => {
  const { page = 1, limit = 100, updated_since } = req.query;
  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);

  let filtered = allEmployees;

  if (updated_since) {
    const sinceDate = new Date(updated_since);
    filtered = filtered.filter((emp) => new Date(emp.updatedAt) > sinceDate);
  }

  const start = (parsedPage - 1) * parsedLimit;
  const paginated = filtered.slice(start, start + parsedLimit);

  res.status(200).json({
    total: filtered.length,
    page: parsedPage,
    limit: parsedLimit,
    data: paginated,
  });
});

module.exports = router;
