const express = require('express');
const router = express.Router();

const veteranController = require('../controllers/veteran.controller');

// get all employees
router.get('/', veteranController.getveteranList);

// get employee by ID
router.get('/:id',veteranController.getveteranByID);

// create new employee
router.post('/', veteranController.createNewveteran);

// update employee
router.put('/:id', veteranController.updateveteran);

// delete employee
router.delete('/:id',veteranController.deleteveteran);

module.exports = router;
