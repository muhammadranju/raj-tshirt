const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const morgan = require("morgan");

const middlewares = [
    express.json(),
    express.urlencoded({ extended: true }),
    cors(),
    morgan("dev"),
    flash(),
    cookieParser(process.env.COOKIE_KYE),
    session({
        secret: process.env.SESSION_KYE,
        cookie: { maxAge: 60000 },
        resave: false,
        saveUninitialized: false,
    }),
];

module.exports = middlewares;
