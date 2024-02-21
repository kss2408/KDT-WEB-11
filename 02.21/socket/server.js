const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const app = express();
const PORT = 8000;

//http 서버
const server = http.createServer(app);
//소켓io 자체로는 무언가를 할수없다. express 도움이 필요하다.

//socket 서버
const io = socketIo(server);

//미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});
app.get('/practice', (req, res) => {
    res.render('practice');
});

//

io.on('connection', (socket) => {
    console.log('조인 전', socket);
    //받을때는 .on  ***
    socket.on('open_message', (arg, arg2, arg3, cb) => {
        console.log('arg', arg, arg2, arg3);
        cb(arg, arg2, arg3);
    });

    //프론트에서 입력한 브라우저 내용 받기.
    socket.on('form_message', (arg) => {
        console.log(arg);
        socket.emit('backend_message', arg);
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
