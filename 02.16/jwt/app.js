const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 8000;
const SECRET = 'jwt-secret';

//미들웨어
app.use(express.json());

//라우터
app.post('/sign', (req, res) => {
    const { id } = req.body;
    //jwt 토큰 생성
    const token = jwt.sign({ id }, SECRET);
    res.json({ success: true, token });
});

app.post('/verify', (req, res) => {
    const auth = req.headers.authorization;
    // console.log(auth);
    const [bearer, token] = auth.split(' ');
    console.log(bearer, ':', token);
    if (bearer === 'Bearer') {
        jwt.verify(token, SECRET, (err, decode) => {
            if (err) {
                return res.status(403).json({ success: false, message: '검증에 실패' });
            }
            res.json({ success: true, result: decode });
        });
    } else {
        res.json({ success: false, message: '올바른 프로토콜이 아닙니다' });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
