const express = require('express');
const router = express.Router();

const pageController = require('../controllers/page.controller');

// get all pages
router.get('/pages/:id', pageController.getPageList);

module.exports = router;
