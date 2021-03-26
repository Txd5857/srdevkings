const express = require('express');
const router = express.Router();

const VeteranPageRoutes = require('./veterans');



router.get('/veterans', VeteranPageRoutes);


router.get('/homepage', (req,res)=>{
    res.render('homepage');
});


module.exports = router;