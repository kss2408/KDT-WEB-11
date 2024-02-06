const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//정적파일 설정
app.use('/uploads', express.static(__dirname + '/uploads'));

//multer 설정
const storage = multer.diskStorage({
    //파일이 저장될 경로
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    //파일이름
    filename: (req, file, cb) => {
        //extname:확장자 추출
        const ext = path.extname(file.originalname);
        //basename : 파일이름 추출
        const newName = path.basename(file.originalname, ext) + Date.now() + ext;
        cb(null, newName);
    },
});
const limits = {
    fileSize: 5 * 1024 * 1024, // 5mb 제한
};

const upload = multer({ sotrage: storage, limits: limits });

//===페이지
app.get('/', (req, res) => {
    res.render('index');
});

//= 요청,응답
app.post('/upload', upload.single('userfile'), (req, res) => {
    console.log('file', req.file);
    console.log('data', req.body);
    const { id, pw, username, age } = req.body;
    res.render('result', { file: req.file.path, id, pw, username, age });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
