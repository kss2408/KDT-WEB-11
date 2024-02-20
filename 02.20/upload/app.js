const express = require('express');
const aws = require('aws-sdk'); // aws설정을 위한 모듈
const multer = require('multer');
const multerS3 = require('multer-s3'); // aws s3에 파일 업로드 하기 위한 multer설정
const app = express();
const PORT = 8000;

//aws설정  오타조심!! 대문자 소문자 하나차이로 오류가 난다!!!
aws.config.update({
    accessKeyId: 'AKIAZQ3DN4UFGEOSQ26J', // 엑세스키
    secretAccessKey: '77cvdhpqKTe9qRQeYnlSM1rJLof04KrV/JWP38wi', //엑세스비밀번호
    region: 'ap-northeast-2',
});

//aws s3 인스턴스 생성
const s3 = new aws.S3();

//multer 설정
const upload = multer({
    storage: multerS3({
        s3, // s3: s3 를 의미
        bucket: 'kdt11-kss-test',
        acl: 'public-read', //파일접근권한(public-read로 해야 업로드된 파일이 공개)
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

//미들웨어
app.set('view engine', 'ejs');

//라우터
//페이지
app.get('/', (req, res) => {
    res.render('index');
});

//api
app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
