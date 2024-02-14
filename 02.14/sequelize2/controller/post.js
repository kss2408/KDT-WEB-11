//다양한 방식으로.
const { Post } = require('../models');

/* //2가지 방법
exports.all = (req, res) => {
    Post.findAll().then((result) => {
        console.log('all', resutlt);
    });
}; */

//전체 조회
exports.all = async (req, res) => {
    const result = await Post.findAll({ order: [['id', 'desc']] });
    console.log('all', result);
    res.json({ result: true, data: result });
};
//하나 조회
exports.post = async (req, res) => {
    console.log(req.params.id);
    const result = await Post.findOne({ where: { id: req.params.id } });
    res.json({ result: true, data: result });
};
//글 하나 생성
exports.write = async (req, res) => {
    const { title, content } = req.body;
    const result = await Post.create({
        title,
        content,
    });
    res.json({ result: true, data: result.id });
};

//하나 수정
exports.update = async (req, res) => {
    const { id, title, content } = req.body;
    const result = await Post.update(
        {
            title,
            content,
        },
        { where: { id } }
    );
    res.json({ result: true });
};

//하나 삭제
exports.delete = async (req, res) => {
    const result = await Post.destroy({ where: { id: req.body.id } });
    console.log('delete', result);
    res.json({ result: true });
};
