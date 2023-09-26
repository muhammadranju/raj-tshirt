const router = require("express").Router();
const home = require("../../controllers/homeControllers/homeControllers");

const authMiddleware = require("../../middlewares/authMiddleware");

router.get("/", home.homeController);

module.exports = router;
