const controller = require("../controllers/testing.controllers.js");
const router = require("express").Router();

router.get("/appinfo", controller.getAppInfo);

module.exports = router;
