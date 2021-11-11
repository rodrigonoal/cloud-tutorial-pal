const express = require("express");
const {
  postEmail,
  getEmail,
  deleteEmail,
  patchEmail,
} = require("./controllers/email");

const routes = express();

routes.get("/users", getEmail);
routes.post("/users", postEmail);
routes.delete("/users/:id", deleteEmail);
routes.patch("/users/:id", patchEmail);

module.exports = routes;
