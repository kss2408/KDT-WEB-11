const express = require('express');
const router = express.Router();

const controller = require('../controller');

// === 페이지

router.get('/', controller.axiosPost);

//=== 데이터 요청, 응답

router.post('/resultPost', controller.resultPost);

module.exports = router;
