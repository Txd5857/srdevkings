const express = require('express');
const router = express.Router();

const busController = require('../controllers/bus.controller');

// get all employees
router.get('/', busController.getBusList);

// get employee by ID
router.get('/:id',busController.getBusByID);

// create new employee
router.post('/', busController.createNewBus);

// update employee
router.put('/:id', busController.updateBus);

// delete employee
router.delete('/:id',busController.deleteBus);

module.exports = router;
