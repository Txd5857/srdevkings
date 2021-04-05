const express = require('express');
const router = express.Router();

const VeteranPageRoutes = require('./veterans');

router.get('', (req, res)=> {
    res.render('homepage');
});

router.get('/login', (req,res)=>{
    res.render('login');
});

router.post('/login', (req,res)=>{

});

router.get('/register', (req,res) => {
    res.render('register');
});


router.use('/veterans', VeteranPageRoutes);

router.get('/homepage', (req,res)=>{
    res.render('homepage');
}); 


router.get('/navigation',(req,res)=>{
    res.render('navigation');
});
module.exports = router;