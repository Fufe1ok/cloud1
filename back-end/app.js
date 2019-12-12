const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const panelRouter = require("./routers/panel.router");
const sensorsRouter = require("./routers/sensors.router");
const usersRouter = require("./routers/user.router");

app.use(express.static('public')); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(morgan("tiny"));
app.use(cors());

app.use("/panel", panelRouter);
app.use("/sensorInfo", sensorsRouter);
app.use("/user", usersRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app;
