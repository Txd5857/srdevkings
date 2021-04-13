const express = require('express');
const router = express.Router();

const fileController = require('../controllers/file.controller');

// get veteran by ID
router.get('file/:id',fileController.getFileByPath);

module.exports = router;