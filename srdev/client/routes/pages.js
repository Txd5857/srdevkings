const express = require('express');
const router = express.Router();

const VeteranPageRoutes = require('./veterans');
const AdminPageRoutes = require('./admins');
const MissionPageRoutes = require('./missions');



router.get('/veterans', VeteranPageRoutes);
router.get('/veterans/:id', (req,res)=>{
    res.render('veteran');
})
// router.get('.')
// router.get('/missions', MissionPageRoutes);
// router.get('/admin', AdminPageRoutes);

router.get('/homepage', (req,res)=>{
    res.render('homepage');
});


module.exports = router;