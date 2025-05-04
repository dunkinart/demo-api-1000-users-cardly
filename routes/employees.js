const express = require("express");
const router = express.Router();
const allEmployees = require("../data/employees.1000.js");

router.get("/employees", (req, res) => {
  try {
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
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
