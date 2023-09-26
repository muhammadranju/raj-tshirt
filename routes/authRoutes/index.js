const router = require("express").Router();
const authLoginAndSignupRoute = require("./authLoginAndSignupRoute");
const authChangePasswordRoute = require("./authChangePasswordRoute");
const authSendEmailRoute = require("./authSendEmailRoute");

const redirecting = require("../../controllers/redirectControllers/redirectControllers");

router.all("/auth", redirecting.redirectingHome); // redirecting for all type of requests

router.use("/auth", authLoginAndSignupRoute);
router.use("/auth/user-change-passowrd", authChangePasswordRoute);
router.use("/auth/send-email", authSendEmailRoute);

module.exports = router;
