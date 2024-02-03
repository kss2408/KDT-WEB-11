const express = require('express');
const app = express();
const PORT = 8000;

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

app.set('view engine', 'ejs');

// === 페이지
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/submit', (req, res) => {
    res.render('submit');
});

app._router.get('/function', (req, res) => {
    res.render('function');
});
// ===페이지

/*
 * render(): 뷰페이지렌더링, render(뷰페이지이름, 데이터(선택))
 * send(): 모든타입 데이터 전송(즉, 문자열, 배열, 객체, 숫자등)
 * json(): 객체타입 데이터 전송
 * redirect(): 페이지 강제 이동
 */

// === 요청과 응답
// ajax (GET 요청)
app.get('/ajax', (req, res) => {
    console.log('요청값', req.query);
    const { name, email } = req.query;
    //프론트로 보내는 데이터
    res.send({ result: true, user: `${name}님`, address: `주소:${email}` });
});
//ajax (POST)
app.post('/ajax', (req, res) => {
    console.log('요청값', req.body);
    const { name, email } = req.body;
    //프론트로 보내는 데이터
    res.send({ username: name, email }); //email값을 동일하게 email로 받고 email로 보낸다.
});

//axios
app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query); //아무처리없이 그대로 보내기
});

app.post('/axios', (req, res) => {
    console.log('요청값', req.body);
    const { username, email } = req.body;
    const data = {
        name: `안녕하세요 ${username}님`,
        address: `주소는 ${email}입니다.`,
    };
    res.send(data);
});

// fetch
app.get('/fetch', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});

app.post('/fetch', (req, res) => {
    console.log('요청값', req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
