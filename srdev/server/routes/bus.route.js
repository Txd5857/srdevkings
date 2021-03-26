const express = require('express');
const router = express.Router();

const busController = require('../controllers/bus.controller');

// get all buss
router.get('/buses', busController.getBusList);

// get bus by ID
router.get('/buses/:id',busController.getBusByID);

// create new bus
router.post('/buses', busController.createNewBus);

// update bus
router.put('/buses/:id', busController.updateBus);

// delete bus
router.delete('/buses/:id',busController.deleteBus);

module.exports = router;
