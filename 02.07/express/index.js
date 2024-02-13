const express = require('express');
const app = express();
const PORT = 8000;
require('dotenv').config();
// .env에 중요한 정보 (비밀번호) 등을 보관함.

//무조건 오타 조심!!!!!!!!!!!!!!

app.set('view engine', 'ejs');

// **해당폴더의 index.js는 생략 가능
const router = require('./routes/index');
// const router = require('./routes');  -> 동일한 결과를 가져온다.

app.use('/', router); //  /board 로 해보고 비교하기.

const userRouter = require('./routes/user');
app.use('/user', userRouter);

// 오류처리
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
