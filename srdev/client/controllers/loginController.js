const loginService = require('../services/loginService');

// Renders the login page
let getPageLogin = (req, res) => {
    return res.render("login", {
        errors: req.flash("errors")
    });
};

let handleLogin = async (req, res) => {
    
    let errorsArr = [];
    let validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        // An error occurred. Do not let user login.
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        // Redirect them back to the login page.
        return res.redirect("/login");
    }

    try {
        await loginService.handleLogin(req.body.username, req.body.password);
        console.log("awaited");
        // Login was successful. Send the user to the homepage.
        return res.redirect("/homepage");
    } catch (err) {
        req.flash("errors", err);
        // Something went wrong during login. Redirect the user to the login page.
        return res.redirect("/login");
    }
};

let checkLoggedIn = (req, res, next) => {
    console.log("checking logged in");
    // Determine whether the user is logged in or not
    if (!req.isAuthenticated()) {
        // User is not logged in. Redirect them to the login page.
        console.log("not logged in");
        return res.redirect("/login");
    }
    // User is logged in with valid credentials, execute next action.
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

let postLogOut = (req, res) => {
    // User logged out.
    // Send user back to the login page.
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
