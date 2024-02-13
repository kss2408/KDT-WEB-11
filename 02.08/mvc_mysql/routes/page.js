const express = require('express');
const controller = require('../controller/Cpage');

const router = express.Router();

router.get('/', controller.main);
router.get('/visitor', controller.pageVisitor);

module.exports = router;
