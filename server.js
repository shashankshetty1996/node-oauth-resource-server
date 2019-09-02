const express = require("express");
const config = require("config");
const morgan = require("morgan");

const app = express();
const PORT = config.get("PORT");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`Backend server working on ${PORT}`);
});

app.use("/api/users", require("./routers/users"));

app.listen(PORT, console.log(`Server started on port ${PORT}`));
