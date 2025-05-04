const employees = require("../employees.1000");

module.exports = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const query = Object.fromEntries(url.searchParams.entries());

  let page = parseInt(query.page) || 1;
  let limit = parseInt(query.limit) || 50;
  const updatedSince = query.updated_since;

  let filteredEmployees = employees;

  if (updatedSince) {
    const sinceDate = new Date(updatedSince);
    filteredEmployees = filteredEmployees.filter(emp => new Date(emp.updatedAt) >= sinceDate);
  }

  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedEmployees = filteredEmployees.slice(start, end);

  res.setHeader("Content-Type", "application/json");
  res.status(200).end(JSON.stringify(paginatedEmployees));
};
