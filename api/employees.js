const getEmployees = require("../employees.1000.js");

module.exports = (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const query = Object.fromEntries(url.searchParams.entries());

    const updatedSince = query.updated_since;

    const data = getEmployees(); // ← Generate fresh data
    let users = data[0].users;

    // Optional filter by update date
    if (updatedSince) {
      const filterDate = new Date(updatedSince).toISOString().split("T")[0];
      users = users.filter((user) => {
        const empDate = new Date(user.updatedAt).toISOString().split("T")[0];
        return empDate === filterDate;
      });
    }

    // Respond
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        requestDateTime: new Date().toISOString(),
        requestTrackingId: require("crypto").randomUUID(),
        users,
      })
    );
  } catch (error) {
    console.error("Serverless error:", error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
};
