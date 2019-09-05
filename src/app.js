const express = require("express");
require("./db/mysql");
const routerUser = require("./routers/user");

const app = express();
app.use(express.json());
app.use(routerUser);

module.exports = app;
