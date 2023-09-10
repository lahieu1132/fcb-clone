const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");
const morgan = require("morgan");
let mongoose;
const authJwt = require("./helpers/jwt");
const cors = require("cors");
const errorHandler = require("./helpers/error-handler");
const dbConnect = require("./dbConnect");
require("dotenv/config");

try {
  mongoose = require("mongoose");
} catch (e) {
  console.log(e);
}

dbConnect();

const app = express();

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(authJwt());
app.use(errorHandler);
app.use((req, res, next) => {
  console.log(`Yêu cầu đến: ${req.method} ${req.url}`);
  next();
});

const route = require("./routes");

route(app);

app.listen(8080, () => {
  console.log("server is running at port 8080");
});
