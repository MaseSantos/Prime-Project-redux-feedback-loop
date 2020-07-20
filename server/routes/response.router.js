const express = require("express");
const responseRouter = express.Router();
const pool = require("../modules/pool");

responseRouter.get("/", (req, res) => {
  console.log("in router /response GET");
  let queryString = `SELECT * FROM "feedback" ORDER BY "date" DESC`;
  pool
    .query(queryString)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

module.exports = responseRouter;
