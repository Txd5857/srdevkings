const express = require('express');
const router = express.Router();

const guardianController = require('../controllers/guardian.controller');

// get all guardians
router.get('/guardians', guardianController.getGuardianList);

// get guardian by ID
router.get('/guardians/:id',guardianController.getGuardianByID);

// create new guardian
router.post('/guardians', guardianController.createNewGuardian);

// update guardian
router.put('/guardians/:id', guardianController.updateGuardian);

// delete guardian
router.delete('/guardians/:id',guardianController.deleteGuardian);

module.exports = router;
