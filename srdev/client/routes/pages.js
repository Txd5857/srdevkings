const express = require('express');
const router = express.Router();

const VeteranPageRoutes = require('./veterans');

router.get('', (req, res)=> {
    res.render('homepage');
});


router.get('/register', (req,res) => {
    res.render('register');
});

router.get('/change_password', (req,res) => {
    res.render('change_password');
});


// router.use('/veterans', VeteranPageRoutes);



router.get('/navigation',(req,res)=>{
    res.render('navigation');
});
module.exports = router;