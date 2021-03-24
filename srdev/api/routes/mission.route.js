const express = require("express");
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(201).json({
        message: "Mission were fetched"
    });
});


router.post('/', (req,res,next) => {
    res.status(201).json({
        message: "Missio was created"
    });
});

//get mission by ID
router.get('/:missionID', (req, res, next) => {
    res.status(200).json({
        message: 'Mission Details',
        id: req.params.missionID
    });

});

router.patch('/:missionID', (req, res, next) => {
    const id = req.params.missionID;
    if (id === 'special') {
        res.status(200).json({
            message: 'updated mission',
            id: id
        });
    } else { 
        res.status(200).json({
            message: 'no'
        });
    }
});

router.delete('/:missionID', (req, res, next) => {
    const id = req.params.missionID;
    if (id === 'special') {
        res.status(200).json({
            message: 'deleted product',
            id: id
        });
    } else { 
        res.status(200).json({
            message: 'no'
        });
    }
});
module.exports = router;