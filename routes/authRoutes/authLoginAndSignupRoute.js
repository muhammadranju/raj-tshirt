const router = require("express").Router();

const authLoginAndSignup = require("../../controllers/authController/authController");

router.get("/login", authLoginAndSignup.loginGetController);
router.post("/login", authLoginAndSignup.loginPostController);

router.get("/signup", authLoginAndSignup.signupGetController);
router.post("/signup", authLoginAndSignup.signupPostController);

router.post("/logout", authLoginAndSignup.logoutPostController);

module.exports = router;
