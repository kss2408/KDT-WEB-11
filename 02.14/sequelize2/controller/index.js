const main = (req, res) => {
    res.render('index');
};

const post = (req, res) => {
    res.render('post'); // 전체 글 페이지
};

const detail = (req, res) => {
    res.render('detail');
};

const write = (req, res) => {
    res.render('write');
};

module.exports = { main, post, detail, write };
