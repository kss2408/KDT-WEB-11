const express = require('express'); //문자열''형태로 꼭 기입하기
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

// 정적파일 불러오기
app.use('/public', express.static(__dirname + '/public')); // 언더바2개

// localhost:8000/
app.get('/', (req, res) => {
    //send() 클라이언트에 응답 데이터를 보낼때
    res.send('Hello Express');
});

app.get('/kdt', (req, res) => {
    // render() 뷰 엔진 렌더링
    // view에 데이터를 전달할수있다. 객체형태로. ex) name.
    res.render('test', { name: '홍길동' });
});

//주소! req,res => 자동적으로 입력될수준으로!
app.get('/gugu', (req, res) => {
    res.render('gugudan', { data: 2, dan: 5, leng: [1, 2, 3, 4, 5, 6, 7, 8, 9] });
});

app.get('/fruit', (req, res) => {
    res.render('fruit', {
        fruit: [
            { name: 'apple', kor: '사과' },
            { name: 'bananas', kor: '바나나' },
            { name: 'grapes', kor: '포도' },
            { name: 'peaches', kor: '복숭아' },
        ],
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
