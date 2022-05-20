const express = require("express");
const listKinds = require("../controllers/kindsControllers/kindsControllers");

const kindsRouter = express.Router();

kindsRouter.get("/list", listKinds);

module.exports = kindsRouter;
