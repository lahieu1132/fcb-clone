const userRouter = require("./user");
const refreshTokenRouter = require("./refreshToken");

const api = process.env.API_URL;

function route(app) {
  app.use(api + "/users", userRouter);
  app.use(api + "/refreshToken", refreshTokenRouter);
}

module.exports = route;
