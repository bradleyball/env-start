const router = require("express").Router();
const controller = require("./tableController");

router.post("/", controller.createTable);

module.exports = router;
