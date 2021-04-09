
const express = require('express');
const loginController = require('../controllers/loginController');
const homePageController = require('../controllers/homePageController');
const veteransController = require('../controllers/veteransController');
const userListController = require('../controllers/userListController');
const exportController = require('../controllers/exportController');
const adminController = require('../controllers/adminController');
const passport = require('passport');
const initPassportLocal = require("../controllers/passportLocalController");
// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', loginController.checkLoggedIn,homePageController.handleHelloWorld)
    router.get("/homepage", loginController.checkLoggedIn, homePageController.handleHelloWorld);
    router.get("/veterans",loginController.checkLoggedIn,veteransController.handleHelloWorld);
    // router.get("/veterans/:id", loginController.checkLoggedIn, veteransController.checkVeteran, veteransController.handleByeWorld);
    router.get("/veterans/:id", loginController.checkLoggedIn, veteransController.handleByeWorld);
    router.get("/admin",loginController.checkLoggedIn, adminController.handleHelloWorld);
    router.get("/admin/users",loginController.checkLoggedIn, userListController.handleHelloWorld);
    router.get("/export", loginController.checkLoggedIn, exportController.handleHelloWorld);
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