const express = require('express');
const router = express.Router();

router.get('', (req, res)=> {
    res.render('mission_creation');
});



router.get('/navigation',(req,res)=>{
    res.render('navigation');
});
module.exports = router;