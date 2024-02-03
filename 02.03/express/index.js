const { createDiffieHellmanGroup } = require('crypto');
const express = require('express');
const multer = require('multer');
const path = require('path'); //폴더와 파일의 경로를 쉽게 조작하도록 지정
const app = express();
const PORT = 8000;

//view engine
app.set('view engine', 'ejs');
//정적 파일 설정
//http://localhost:8000/uploads/파일명
app.use('/uploads', express.static(__dirname + '/uploads'));
//multer설정
const upload = multer({
    //dest : 업로드할 파일을 저장할 폴더를 지정.
    dest: 'uploads/',
});

// multer 세부(디테일)설정
const uploadDetail = multer({
    //storage : 저장할 공간에 대한 정보
    //diskStorage: 파일을 저장하기 위한 모든 제어기능 제공(파일 저장관련 설정)
    storage: multer.diskStorage({
        //destination : 업로드할 파일을 저장할 폴더를 지정
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        //filename: 파일 이름을 결정 (요청객체, 업로드된 파일객체, 콜백함수)
        filename(req, file, done) {
            //extname() : 확장자를 추출
            const ext = path.extname(file.originalname);
            //basename(): 파일이름을 추출(파일의 오리지널명, 확장자) => 확장자를 제외해서 파일이름만 추출
            const newName = path.basename(file.originalname, ext) + Date.now() + ext; // 파일이름 + 날짜 + 확장자
            done(null, newName);
        },
    }),

    //limits: 파일저장 용량 제한
    limits: { fileSize: 5 * 1024 * 1024 }, // 5mb 제한
});

/*
const storage: multer.diskStorage({
    destination(req, file, done) => {
        done(null, 'uploads/');
    },
    filename(req, file, done)=> {
        const ext = path.extname(file.originalname);
        const newName = path.basename(file.originalname, ext) + Date.now() + ext; // 파일이름 + 날짜 + 확장자
        done(null, newName);
    },
}),
const  limits: { fileSize: 5 * 1024 * 1024 }; // 5mb 제한

const uploadDetailPart2 = multer{(storage:storage, limits: limits)}
*/

//router
//===페이지
app.get('/', (req, res) => {
    res.render('index');
});

//===요청,응답
//싱글: single()
app.post('/upload', uploadDetail.single('userfile'), (req, res) => {
    console.log('file:', req.file);
    console.log('title:', req.body);
});

//멀티(ver1) : array()
app.post('/upload/array', uploadDetail.array('userfiles'), (req, res) => {
    console.log('files', req.files);
    console.log('title', req.body);
});

// 멀티(ver2) : fields()
app.post('/upload/fields', uploadDetail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]), (req, res) => {
    console.log('files', req.files);
    console.log('title', req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
