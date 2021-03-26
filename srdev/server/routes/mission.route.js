const express = require("express");
const router = express.Router();

const missionController = require('../controllers/mission.controller');

router.get('/missions', missionController.getMissionList);


router.post('/missions', missionController.createNewMission);


router.get('/missions/:id',missionController.getMissionByID);


router.put('/missions/:id', missionController.updateMission);


router.delete('/missions/:id',missionController.deleteMission);

module.exports = router;