const express = require('express');
const router = express.Router();

const VeteranPageRoutes = require('./veterans');


router.use('/veterans', VeteranPageRoutes);


router.get('/homepage', (req,res)=>{
    res.render('homepage');
});


module.exports = router;