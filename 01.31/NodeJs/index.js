// const connect = require('./module.js'); //.js는 생략가능
// console.log(connect.a); // connect.a -> 객체

/* 모듈예시 주석처리 = 서버만들기위해서
const { a, b, c } = require('./module.js');
console.log(a, b, c);   //객체분할 내용
//외부에서 가져오는 법. */

/* //모듈 가져오기
const http = require('http'); //컨트롤 누르고 http 누르면 내부 볼수있다.

// 서버 만들기
// http 안에 createServer가 있다.
// req, res는 요청, 응답.  안쓴다고해도 둘다 있어야 한다.
const server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.write('<h1>Hello Nodejs</h1>');
    res.end('<p>End</p>');
});

server.on('request', function () {
    console.log('요청 이벤트');
});
server.on('connection', function () {
    console.log('접속 이벤트');
});

// listen : 서버를 실행
// port는 자기가 원하는대로
server.listen(8000, function () {
    console.log('8000번 포트 실행');
});
//서버 끄는법 -> ctrl+C */

/* 이런것들이 있구나 하고 넘어가자. express를이용하는게 좋다.
아예 안쓰는게 아니고 소켓서버만들때 쓴다. 지금은 어떻게 만드는가 알기만하면된다. */

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    //파일전송
    //try -> 성공했을때 코드 catch -> 실패했을때 코드를 담는다.
    try {
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);
    } catch (error) {
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});
server.listen(8000, function () {
    console.log('8000번 포트 실행');
});

// 여기까지 서버만들기 기초과정.
