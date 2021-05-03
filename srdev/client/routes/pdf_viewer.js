const express = require('express');
const router = express.Router();

// renders the navbar on the pdf viewer page
router.get('', (req, res)=> {
    res.render('pdf_viewer');
});


// renders the navigation bar
router.get('/navigation',(req,res)=>{
    res.render('navigation');
});
module.exports = router;