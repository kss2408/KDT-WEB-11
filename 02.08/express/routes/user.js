const express = require('express');
const controller = require('../controller/user');

const router = express.Router();

router.get('/', controller.main);
router.post('/register', controller.register); // 일반적으로 같게쓰지만 항상이 아니다 (register 부분)

module.exports = router;
