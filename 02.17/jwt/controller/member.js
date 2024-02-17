const { Member, Profile } = require('../models');
const jwt = require('jsonwebtoken');

//회원가입
exports.signup = async (req, res) => {
    const { userId, pw, username, age, email } = req.body;
    //존재여부확인
    const find = await Member.findOne({ where: { userId } });
    console.log('find', find);

    if (find) {
        res.json({ result: false, message: '이미존재하는 회원' });
    } else {
        //생성 create
        const result = await Member.create({ userId, password: pw });
        console.log('signup', result);
        const result2 = await Profile.create({ username, age, email, memberId: result.id });
        console.log('profile', result2);
        res.json({ result: true });
    }
};
//로그인
exports.login = async (req, res) => {
    const { userId, pw } = req.body;
    //검색 findOne
    const result = await Member.findOne({ where: { userId, password: pw } });
    console.log('login', result);
    if (result) {
        //jwt 토큰 발행
        const token = jwt.sign({ id: result.id }, process.env.SECRET, { expiresIn: '1h' }); //1시간동안 유효하다는 의미

        res.json({ result: true, data: result, token });
    } else {
        res.json({ result: false });
    }
};
//회원조회
exports.find = async (req, res) => {
    const { id } = req.user; //auth 미들웨어에서 보내주는 값
    console.log(req.user);
    //findByPk
    //const find = await Member.findOne({ where: { id } });
    const result = await Member.findByPk(id, {
        attributes: ['userId', 'password'],
        include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
    });
    console.log('result', result);
    res.json({ result: true, data: result });
};
//정보수정
exports.update = async (req, res) => {
    const { pw, username, age, email } = req.body;
    const { id } = req.user;
    const result = await Member.update({ password: pw }, { where: { id } });
    console.log('update', result);
    await Profile.update({ username, age, email }, { where: { memberId: id } });
    res.json({ result: true });
};
//회원탈퇴
exports.delete = async (req, res) => {
    const { id } = req.user;
    const result = await Member.destroy({ where: { id } });
    console.log('delete', result);
    res.json({ result: true });
};
