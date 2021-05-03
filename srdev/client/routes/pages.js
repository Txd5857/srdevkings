const express = require('express');
const router = express.Router();

// used for rendering the homepage when called
router.get('', (req, res)=> {
    res.render('homepage');
});

// THIS ROUTE IS DEFUNCT. Could be re-implemented in the future
// if the customer wanted to re-enable user creation,
// but for now users are only created through the database.
// router.get('/register', (req,res) => {
//     res.render('register');
// });

// renders the change password page
router.get('/change_password', (req,res) => {
    res.render('change_password');
});


// used for rendering the navigation bar
router.get('/navigation',(req,res)=>{
    res.render('navigation');
});
module.exports = router;