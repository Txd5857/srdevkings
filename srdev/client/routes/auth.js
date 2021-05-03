const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const passport = require('passport');


// router.post('/register', authController.register ); <-- THIS ROUTE HAS BEEN RETIRED
router.post('/change_password', authController.change_password ); // <-- Allows the user to change the password of an account

// Attemps to login with the data that was passed when this route was called
router.post('/login', passport.authenticate('local', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
}));

module.exports = router;