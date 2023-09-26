const jwt = require("jsonwebtoken");
const User = require("../models/userModel/userAuthModel");
const authMiddleware = async (req, res, next) => {
    try {
        let token = req.headers.authorization || req.cookies.access_token;
        token = token.split(" ")[1];
        const { userId } = jwt.verify(token, process.env.JWT_KYE);
        if (!userId) {
            return res.status(403).json({
                status: 403,
                message: "Unauthorized",
            });
        }
        req.user = await User.findById(userId).select("-password");
        return next();
    } catch (error) {
        res.status(403).json({ message: "Unauthorized token" });
        // next(error);
    }
};
module.exports = authMiddleware;
