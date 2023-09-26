const router = require("express").Router();
const category = require("../../controllers/categoryController/categoryController");
router.get("/", category.categoryGetController);
router.get("/:catid", category.categoryGetByIdController);
router.get("/s/:catid", category.categorySubGetByIdController);
router.get("/s1/:catid", category.categorySubTwoGetByIdController);
module.exports = router;
