
const express = require('express');
const loginController = require('../controllers/loginController');
const homePageController = require('../controllers/homePageController');
const veteransController = require('../controllers/veteransController');
const passport = require('passport');
const initPassportLocal = require("../controllers/passportLocalController");
// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', loginController.checkLoggedIn,homePageController.handleHelloWorld)
    router.get("/homepage", loginController.checkLoggedIn, homePageController.handleHelloWorld);
    router.get("/veterans",loginController.checkLoggedIn,veteransController.handleHelloWorld);
    router.get("/login",loginController.checkLoggedOut, loginController.getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/homepage",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    router.get('/register',  (req,res) =>{
        res.render('register');
    });
    router.post("/logout", loginController.postLogOut);
    router.get('/homepage', (req,res) =>{
        res.render('homepage');
    });
    return app.use("/", router);
};
module.exports = initWebRoutes;