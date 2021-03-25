const express = require('express');
const router = express.Router();

const veteranController = require('../controllers/veteran.controller');

// get all veterans
router.get('/', veteranController.getVeteranList);

// get veteran by ID
router.get('/:id',veteranController.getVeteranByID);

// create new veteran
router.post('/', veteranController.createNewVeteran);

// update veteran
router.put('/:id', veteranController.updateVeteran);

// delete veteran
router.delete('/:id',veteranController.deleteVeteran);

module.exports = router;
