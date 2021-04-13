const express = require('express');
const router = express.Router();

router.get('', (req, res)=> {
    res.render('pdf_viewer');
});



router.get('/navigation',(req,res)=>{
    res.render('navigation');
});
module.exports = router;