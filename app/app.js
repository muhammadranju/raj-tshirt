require("dotenv").config(); // Dependencies
const express = require("express");
require("../DB/database"); // Database connection
const { errorHandler, notFoundHandler } = require("../error/errorsHandels"); //error handel Not found and Internal server error
const app = express(); // Main app for server running
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(require("./middlewares")); // middlewares of application server dependent
app.use(require("../routes/prefixIndex")); //prefix application all routes

app.use(notFoundHandler); // not found error handler
app.use(errorHandler); // server error handler

module.exports = app; // exports the main app
