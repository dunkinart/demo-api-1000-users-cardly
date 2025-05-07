const employees = require("../employees.1000.js");

module.exports = (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const query = Object.fromEntries(url.searchParams.entries());

    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 100;
    const updatedSince = query.updated_since;

    // 1. Filter logic
    let filtered = employees;

    if (updatedSince) {
      const filterDate = new Date(updatedSince).toISOString().split("T")[0];
      filtered = employees.filter((emp) => {
        const empDate = new Date(emp.updatedAt).toISOString().split("T")[0];
        return empDate === filterDate;
      });
    }

    // 2. Pagination logic
    const total = filtered.length;
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = filtered.slice(start, end);

    // 3. Clean up data (remove unwanted fields)
    const users = paginated.map(({ requestDateTime, requestTrackingId, ...rest }) => rest);

    // 4. Generate metadata
    const requestDateTime = new Date().toISOString();
    const requestTrackingId = require("crypto").randomUUID();

    // 5. Respond
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        requestDateTime,
        requestTrackingId,
        users
      })
    );
  } catch (error) {
    console.error("Serverless error:", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
};
