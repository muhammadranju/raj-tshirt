const router = require("express").Router();
const product = require("../../controllers/productController/productController");

router.get("/", product.getProductController);
router.get("/:productId", product.getProductByIdController);
module.exports = router;
