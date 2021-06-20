const express = require('express');
const router = express.Router();

const blogController = require('./../controllers/blog');

router.get('/blogs/:id', blogController.getBlogById);
router.get('/create', blogController.getCreate);
router.post('/create', blogController.postCreate);
router.get('/edit/:id', blogController.getEditById);
router.post('/edit/:id', blogController.postEditById);
router.get('/delete/:id', blogController.deleteById);

module.exports = router;
