const employees = require("../employees.1000.js");

module.exports = (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const query = Object.fromEntries(url.searchParams.entries());

    let page = parseInt(query.page) || 1;
    let limit = parseInt(query.limit) || 100;
    const updatedSince = query.updated_since;

    let filtered = employees;

    if (updatedSince) {
      const filterDate = new Date(updatedSince).toISOString().split("T")[0];
      filtered = filtered.filter((emp) => {
        const empDate = new Date(emp.updatedAt).toISOString().split("T")[0];
        return empDate === filterDate;
      });
    }

    const total = filtered.length;

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = filtered.slice(start, end);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      total,
      page,
      limit,
      data: paginated
    }));
  } catch (error) {
    console.error("Serverless error:", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
};
