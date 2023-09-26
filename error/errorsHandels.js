const createError = require("http-errors");

const notFoundHandler = (_req, _res, next) => {
    next(createError.NotFound());
};

const errorHandler = (err, _req, res, _next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message,
        },
    });
};

module.exports = {
    notFoundHandler,
    errorHandler,
};
