const express = require('express');
const router = express.Router();

const guardianController = require('../controllers/guardian.controller');

// get all guardians
router.get('/', guardianController.getGuardianList);

// get guardian by ID
router.get('/:id',guardianController.getGuardianByID);

// create new guardian
router.post('/', guardianController.createNewGuardian);

// update guardian
router.put('/:id', guardianController.updateGuardian);

// delete guardian
router.delete('/:id',guardianController.deleteGuardian);

module.exports = router;
