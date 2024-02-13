const express = require('express');
const router = express.Router();
const controller = require('../controller/comment');

//router  ***경로설정 복슴, 공부 !!!!!
router.get('/', controller.main);

router.get('/comments', controller.comments);

router.get('/comment/:page', controller.comment);

//외부에서 가져가서 쓸수있다.
module.exports = router;
