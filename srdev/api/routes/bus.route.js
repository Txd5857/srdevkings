const express = require('express');
const router = express.Router();

const busController = require('../controllers/bus.controller');

// get all buss
router.get('/', busController.getBusList);

// get bus by ID
router.get('/:id',busController.getBusByID);

// create new bus
router.post('/', busController.createNewBus);

// update bus
router.put('/:id', busController.updateBus);

// delete bus
router.delete('/:id',busController.deleteBus);

module.exports = router;
