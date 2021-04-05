const loginService = require('../services/loginService');

let getPageLogin = (req, res) => {
    return res.render("login", {
        errors: req.flash("errors")
    });
};

let handleLogin = async (req, res) => {
    let errorsArr = [];
    console.log("fuck");

    let validationErrors = validationResult(req);
    console.log("fuck");

    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        console.log("fuck");
        return res.redirect("/login");
    }
    console.log("fuck");

    try {
        await loginService.handleLogin(req.body.username, req.body.password);
        return res.redirect("/homepage");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/login");
    }
};

let checkLoggedIn = (req, res, next) => {
    console.log("checking logged in");
    if (!req.isAuthenticated()) {
        console.log("not logged in");
        return res.redirect("/login");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

let postLogOut = (req, res) => {
    req.session.destroy(function(err) {
        return res.redirect("/login");
    });
};

module.exports = {
    getPageLogin: getPageLogin,
    handleLogin: handleLogin,
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut,
    postLogOut: postLogOut
};