const bcrypt = require("bcryptjs");
const User = require("../../models/userModel/userAuthModel");
const jwt = require("jsonwebtoken");
const app = {};

app.loginGetController = (req, res, next) => {
    res.status(200).json({ message: "Hello Login page" });
};
app.loginPostController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                status: 401,
                message: "Email & Password are reqired",
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(422).json({
                status: 422,
                message: "Invalid Email & Password!",
            });
        }
        const passwordVerify = await bcrypt.compare(password, user.password);
        if (!passwordVerify) {
            return res.status(422).json({
                status: 422,
                message: "Invalid Email & Password!",
            });
        }
        console.log(user);
        const payload = {
            uId: user.userId,
            userId: user._id,
        };
        const token = jwt.sign(payload, process.env.JWT_KYE, {
            expiresIn: "2h",
        });

        res.cookie("access_token", token, {
            maxAge: 120 * 60 * 1000,
            httpOnly: true,
        });

        return res.status(202).json({
            status: 202,
            message: "Login Successfully",
            token,
        });
    } catch (error) {
        next(error);
    }
};

app.signupGetController = (req, res, next) => {
    res.status(200).json({ message: "Hello Signup page" });
};
app.signupPostController = async (req, res, next) => {
    try {
        const { fristName, lastName, email, password, gander, tc } = req.body;
        if ((!fristName || !lastName || !email || !password, !gander, !tc)) {
            return res.status(401).json({
                status: 401,
                message: "Input fileds are reqired",
            });
        }
        const findEmail = await User.findOne({ email });
        if (findEmail) {
            return res.status(401).json({
                status: 401,
                message: "Email already exits",
            });
        }
        const salt = await bcrypt.genSalt(11);
        const hashPassowrd = await bcrypt.hash(password, salt);

        const user = await new User({
            fristName,
            lastName,
            email,
            password: hashPassowrd,
            gander,
            tc,
        });
        await user.save();

        console.log(user);
        return res.status(201).json({
            status: 201,
            message: user,
        });
    } catch (error) {
        next(error);
    }
};

app.logoutPostController = (req, res, next) => {};

module.exports = app;
