const router = require("express").Router();
const controller = require("../controllers/" + "students" + ".controllers");

router
  .get("/", controller.getAllStudent)
  .get("/:id", controller.getOneStudent)
  .post("/", controller.createOneStudent)
  .put("/:id", controller.updateOneStudent)
  .delete("/:id", controller.deleteOneStudent);

module.exports = router;
