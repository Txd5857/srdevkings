const express = require('express');
const router = express.Router();

const pageController = require('../controllers/page.controller');

// get all pages
router.get('/pages/:id', pageController.getPageList);

// get page by ID
// router.get('/pages/:id',pageController.getPageByID);

// // create new page
// router.post('/pages', pageController.createNewPage);

// // update page
// router.put('/pages/:id', pageController.updatePage);

// // delete page
// router.delete('/pages/:id',pageController.deletePage);

module.exports = router;
