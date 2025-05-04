const employees = require("../employees.1000");

module.exports = (req, res) => {
  let page = parseInt(req.query.page) || 1;
  let limit = parseInt(req.query.limit) || 50;
  const updatedSince = req.query.updated_since;

  let filteredEmployees = employees;

  if (updatedSince) {
    const sinceDate = new Date(updatedSince);
    filteredEmployees = filteredEmployees.filter(emp => new Date(emp.updatedAt) >= sinceDate);
  }

  const start = (page - 1) * limit;
  const end = start + limit;

  const paginatedEmployees = filteredEmployees.slice(start, end);
  res.status(200).json(paginatedEmployees);
};
