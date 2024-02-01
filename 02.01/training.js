const express = require('express');
const app = express();
const PORT = 8001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('training');
});

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('test', { title: 'GET요청 결과', userInfo: req.query });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
