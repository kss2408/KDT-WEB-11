const express = require('express');
const db = require('./models');
const app = express();
const PORT = 8000;

//미들웨어

app.set('view engine', 'ejs');
app.use(express.json());

//라우터

const indexRouter = require('./routes');
app.use('/', indexRouter);
const postRouter = require('./routes/post');
app.use('/api/post', postRouter);

//404
app.get('*', (req, res) => {
    res.status(404).render('404');
});

//테이블 싱크
// 싱크 옵션  force:true  -> 항상 테이블을 삭제 후 재생성
// force:false (기본값) -> 테이블이 존재하면 패스, 없으면 생성
// 처음엔 true로 막 만들다가 테이블이 어느정도 완성되면 false로 수정하는 개념으로 생각하면된다.
// 테이블 다 완성되고 라이브로 넘어갈땐 없애는것도 하나의 방법.
db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});
