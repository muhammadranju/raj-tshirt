const router = require("express").Router();

router.use(require("./homeRoutes")); // this is home routes
router.use(require("./authRoutes")); // this is auth routes
router.use(require("./allProductsRoutes")); // this is all product routes
router.use(require("./productRoutes")); // this is product routes
router.use(require("./uploadRoutes")); // this is upload routes
router.use(require("./userDashbordRoutes")); // user dashbord is auth routes
router.use(require("./userRoutes")); // this is user routes
router.use(require("./categoryRoute")); // this is category routes
router.use(require("./productRoutes")); // this is product routes

module.exports = router;
