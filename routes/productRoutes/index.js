const router = require("express").Router();
const product = require("./productRoute");
router.use("/product", product);

module.exports = router;
