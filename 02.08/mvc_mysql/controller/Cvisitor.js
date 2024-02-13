const Visitor = require('../model/Visitor');

//전체 방명록
const allVisitor = async (req, res) => {
    const data = await Visitor.allVisitor();
    console.log(data);
    res.json({ result: data });
};

// 방명록 하나 조회
const getVisitor = async (req, res) => {
    console.log(req.params.id);
    const data = await Visitor.getVisitor(req.params.id);
    console.log(data);
    res.json({ result: data });
};

/*
const allVisitor = (req, res) => {
    Visitor.allVisitor();
    res.json({ result: null });
}; */

module.exports = { allVisitor };
