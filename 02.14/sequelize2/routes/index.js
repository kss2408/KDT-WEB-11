const express = require('express');

//다른방식으로 코드를 써보자. controller -> { main , post }
const { main, post, detail, write } = require('../controller');

const router = express.Router();

router.get('/', main); // 메인페이지   controller.main  -> main
router.get('/post', post); // 게시판페이지
router.get('/post/:id', detail); // 상세페이지
router.get('/write', write); // 글쓰기페이지

module.exports = router;
