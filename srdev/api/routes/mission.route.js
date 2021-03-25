const express = require("express");
const router = express.Router();

const missionController = require('../controllers/mission.controller');
// router.get('/', (req, res, next) => {
//     res.status(201).json({
//         message: "Mission were fetched"
//     });
// });
router.get('/', missionController.getMissionList);

// router.post('/', (req,res,next) => {
//     res.status(201).json({
//         message: "Mission was created"
//     });
// });
router.post('/', missionController.createNewMission);


//get mission by ID
// router.get('/:missionID', (req, res, next) => {
//     res.status(200).json({
//         message: 'Mission Details',
//         id: req.params.missionID
//     });

// });
router.get('/:id',missionController.getMissionByID);

// router.patch('/:missionID', (req, res, next) => {
//     const id = req.params.missionID;
//     if (id === 'special') {
//         res.status(200).json({
//             message: 'updated mission',
//             id: id
//         });
//     } else { 
//         res.status(200).json({
//             message: 'no'
//         });
//     }
// });
router.put('/:id', missionController.updateMission);

// router.delete('/:missionID', (req, res, next) => {
//     const id = req.params.missionID;
//     if (id === 'special') {
//         res.status(200).json({
//             message: 'deleted product',
//             id: id
//         });
//     } else { 
//         res.status(200).json({
//             message: 'no'
//         });
//     }
// });
router.delete('/:id',missionController.deleteMission);
module.exports = router;