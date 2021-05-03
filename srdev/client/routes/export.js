const express = require('express');
const router = express.Router();

// renders the export page
router.get('', (req, res)=> {
    res.render('export');
});


// renders the navigation bar
router.get('/navigation',(req,res)=>{
    res.render('navigation');
});
module.exports = router;