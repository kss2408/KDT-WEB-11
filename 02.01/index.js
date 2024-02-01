const express = require('express');
const app = express();
const PORT = 8000;

//body-parser

// 뒤죽박죽이 되면 안된다. 코드 짜는 순서 중요!
app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded방식
app.use(express.json()); // json방식

// view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router -> 서버주소 만들기  **url과 다른개념이다!
app.get('/', (req, res) => {
    res.render('index');
});
// GET방식으로 받을걸 만들어 주면 된다.
app.get('/getForm', (req, res) => {
    //get 방식 데이터 받을때. req.query
    console.log(req.query);
    res.render('result', { title: 'GET요청 결과', userInfo: req.query }); //result.ejs에 데이터 전송해줄거다.
});

app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result', { title: 'POST요청 결과', userInfo: req.body });
});

//서버실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
