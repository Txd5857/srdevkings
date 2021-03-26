const express = require('express');
const router = express.Router();

const veteranController = require('../controllers/veteran.controller');

// get all veterans
router.get('/veterans', veteranController.getVeteranList);

// get veteran by ID
router.get('/veterans/:id',veteranController.getVeteranByID);

// create new veteran
router.post('/veterans', veteranController.createNewVeteran);

// update veteran
router.put('/veterans/:id', veteranController.updateVeteran);

// delete veteran
router.delete('/veterans/:id',veteranController.deleteVeteran);

module.exports = router;
