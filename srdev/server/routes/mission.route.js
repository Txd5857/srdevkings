const express = require("express");
const router = express.Router();

const missionController = require('../controllers/mission.controller');

//get all missions
router.get('/missions', missionController.getMissionList);

// create new mission
router.post('/missions', missionController.createNewMission);

// get mission by ID
router.get('/missions/:id',missionController.getMissionByID);

// update a mission
router.put('/missions/:id', missionController.updateMission);

// delete a mission
router.delete('/missions/:id',missionController.deleteMission);

module.exports = router;