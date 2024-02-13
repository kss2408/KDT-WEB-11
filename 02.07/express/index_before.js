const express = require('express');
const app = express();
const PORT = 8000;
require('dotenv').config();
// .env에 중요한 정보 (비밀번호) 등을 보관함.

//무조건 오타 조심!!!!!!!!!!!!!!

app.set('view engine', 'ejs');

//임시 db
const comments = [
    {
        id: 1,
        userid: 'hello',
        date: '2024-02-01',
        comment: '안녕하세요.',
    },
    {
        id: 2,
        userid: 'happy',
        date: '2024-02-03',
        comment: '반갑습니다.',
    },
    {
        id: 3,
        userid: 'lucky',
        date: '2024-02-05',
        comment: '행복하세요',
    },
    {
        id: 4,
        userid: 'fail',
        date: '2024-02-07',
        comment: '축구졌다.',
    },
];

//router
app.get('/', (req, res) => {
    res.render('index');

    // env 연습
    // console.log('hi');
    // console.log(process.env.KDT);
    // console.log(process.env.NAME);
    // console.log(process.env.NODE_ENV);
    // // json 파일에 start:dev or start:prod 설정해줌
    // // npm rus start:dev 실행 가능.
    // if (process.env.NODE_ENV === 'production') {
    //     console.log('라이브 서버입니다.');
    // } else if (process.env.NODE_ENV === 'development') {
    //     console.log('개발용 서버입니다.');
    // }
});

app.get('/comments', (req, res) => {
    res.render('comments', { list: comments });
});

//db값들을 구분해야한다 ( 1번누르면 1번만, 2번누르면 2번만 이런식으로 )

//comment/:page  ->변수가 생성됬다(변하는값이온다)는 의미로 이해
// :page는 { page : "값"} 형태, :(콜론)이 붙고 안붙고의 차이가 큼
app.get('/comment/:page', (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    const page = Number(req.params.page);
    //comments 배열의 요소에 접근 => 즉, 개체 하나  ex) data.userid 이런식으로 접근가능
    res.render('comment', { data: comments[page - 1] }); // 1번째 배열을 보내려면 page - 1
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
