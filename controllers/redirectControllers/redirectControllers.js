const redirectingHome = (_req, res, _next) => {
    return res.redirect("/");
};

module.exports = { redirectingHome };
