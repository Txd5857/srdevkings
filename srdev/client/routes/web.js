// import express from "express";
// import homePageController from "../controllers/homePageController";
// import registerController from "../controllers/registerController";
// import loginController from "../controllers/loginController";
// import auth from "../validation/authValidation";

const express = require('express');
const loginController = require('../controllers/loginController');
const homePageController = require('../controllers/homePageController');
const VeteranPageRoutes = require('./veterans');

const passport = require('passport');
const initPassportLocal = require("../controllers/passportLocalController");
// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', loginController.checkLoggedIn,homePageController.handleHelloWorld)
    router.get("/homepage", loginController.checkLoggedIn, homePageController.handleHelloWorld);
    router.get("/veterans",loginController.checkLoggedIn,VeteranPageRoutes);
    router.get("/login",loginController.checkLoggedOut, loginController.getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/homepage",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));

    

    // router.get("/register", registerController.getPageRegister);
    // router.post("/register", auth.validateRegister, registerController.createNewUser);
    router.post("/logout", loginController.postLogOut);
    router.use('/veterans', VeteranPageRoutes);
    router.get('/homepage', (req,res) =>{
        res.render('homepage');
    });
    return app.use("/", router);
};
module.exports = initWebRoutes;