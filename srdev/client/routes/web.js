
const express = require('express');
const loginController = require('../controllers/loginController');
const homePageController = require('../controllers/homePageController');
const veteransController = require('../controllers/veteransController');
const userListController = require('../controllers/userListController');
const busListController = require('../controllers/busListController');
const hotelReservationListController = require('../controllers/hotelReservationListController');
const exportController = require('../controllers/exportController');
const missionCreationController = require('../controllers/missionCreationController');
const adminController = require('../controllers/adminController');
const pdfViewerController = require('../controllers/pdfViewerController');
const passport = require('passport');
const initPassportLocal = require("../controllers/passportLocalController");
// Init all passport
initPassportLocal();

let router = express.Router();

let initWebRoutes = (app) => {

    // Establish routes that users can access
    // and which functions are fired before the target page is loaded
    router.get('/', loginController.checkLoggedIn,homePageController.handleHelloWorld)
    router.get("/login",loginController.checkLoggedOut, loginController.getPageLogin);
    router.post("/login", passport.authenticate("local", {
        successRedirect: "/homepage",
        failureRedirect: "/login",
        successFlash: true,
        failureFlash: true
    }));
    router.post("/logout", loginController.postLogOut);
    router.get("/homepage", loginController.checkLoggedIn, homePageController.handleHelloWorld);
    router.get("/veterans",loginController.checkLoggedIn, veteransController.handleHelloWorld);
    router.get("/veterans/:id", loginController.checkLoggedIn, veteransController.handleByeWorld);
    router.get("/buses",loginController.checkLoggedIn,busListController.handleHelloWorld);
    router.get("/admin",loginController.checkLoggedIn, adminController.handleHelloWorld);
    router.get("/admin/users",loginController.checkLoggedIn, userListController.handleHelloWorld);
    router.get("/admin/users/change_password/:id",loginController.checkLoggedIn, adminController.handleByeWorld);
    router.get("/admin/mission_creation", loginController.checkLoggedIn, missionCreationController.handleHelloWorld);
    router.get("/export", loginController.checkLoggedIn, exportController.handleHelloWorld);
    router.get("/pdf_viewer", loginController.checkLoggedIn, pdfViewerController.handleHelloWorld);
    router.get("/pdf_viewer/:filePath", loginController.checkLoggedIn, pdfViewerController.handleHelloWorld);

    return app.use("/", router);
};
module.exports = initWebRoutes;