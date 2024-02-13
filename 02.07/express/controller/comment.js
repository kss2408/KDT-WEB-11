const commentsModel = require('../model/comment');

/* //방법1
exports.main = (req, res) => {
    res.render('index');
};

exports.comments = (req, res) => {
    res.render('commnets', { list: comments });
};

exports.comment = (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    const page = Number(req.params.page);
    res.render('comment', { data: comments[page - 1] }); 
};
   */

// 방법2
const main = (req, res) => {
    res.render('index');
};

const comments = (req, res) => {
    res.render('comments', { list: commentsModel });
};

const comment = (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    const page = Number(req.params.page);
    res.render('comment', { data: commentsModel[page - 1] }); //
};

// {key : value} 형태로 해야하는데 key=value 형태라서 하나로 둔것.
module.exports = { main, comments, comment };
