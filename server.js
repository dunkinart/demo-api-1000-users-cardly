const express = require("express");
const app = express();
const employeeRoutes = require("./routes/employees");

app.use("/api", employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
