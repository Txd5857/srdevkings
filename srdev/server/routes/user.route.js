const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

// get all users
router.get('/users', userController.getUserList);

// get user by ID
router.get('/users/:id',userController.getUserByID);

// create new user
router.post('/users', userController.createNewUser);

// update user
router.put('/users/:id', userController.updateUser);

// delete user
router.delete('/users/:id',userController.deleteUser);

module.exports = router;