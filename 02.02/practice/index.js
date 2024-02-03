const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//router
// === 페이지
app.get('/axiosGet', (req, res) => {
    res.render('index'); // 해당 ejs 이름 !!!!
});

app.get('/axiosPost', (req, res) => {
    res.render('post');
});

//=== 데이터 요청, 응답
const id = 'kdt11';
const pw = '1234';

app.get('/resultGet', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query); // 그대로 응답
});

app.post('/resultPost', (req, res) => {
    console.log('요청값', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (id === reqId && pw === reqPw) {
        res.send({ result: true, userInfo: { id } });
    } else {
        res.send({ result: false, userInfo: null });
    }
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
