const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const passport = require('passport');
const passport_local= require('passport-local');
const flash = require('express-flash');
const session = require('express-session');

// initPassportLocal();

router.post('/register', authController.register );

// router.post('/login', authController.login );
router.post('/login', passport.authenticate('local', {
    successRedirect : '/',
    failureRedirect : '/login',
    failureFlash : true
}));

module.exports = router;