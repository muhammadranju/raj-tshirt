const router = require("express").Router();
const category = require("./categoryRoute");
router.use("/category", category);
module.exports = router;
