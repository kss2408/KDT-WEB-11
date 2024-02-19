const { Member, Profile } = require('../models');

//회원가입
exports.signup = async (req, res) => {
    const { userId, pw, username, age, email } = req.body;
    //존재여부확인
    const find = await Member.findOne({ where: { userId } });
    console.log('find', find);

    if (find) {
        res.json({ success: false, message: '이미존재하는 회원' });
    } else {
        //생성 create
        const result = await Member.create({ userId, password: pw });
        console.log('signup', result);
        const result2 = await Profile.create({ username, age, email, memberId: result.id });
        console.log('profile', result2);
        res.json({ success: true });
    }
};
//로그인
exports.login = async (req, res) => {
    const { userId, pw, save } = req.body;
    //검색 findOne
    const result = await Member.findOne({ where: { userId, password: pw } });
    console.log('login', result);
    if (result) {
        req.session.member = result;

        if (save) {
            res.cookie('saveId', result.id, { maxAge: 100000, httpOnly: treu });
        }
        res.json({ success: true, result });
    } else {
        res.json({ success: false });
    }
};
//회원조회
exports.find = async (req, res) => {
    const { id } = req.session.member; // 로컬 안쓴다. 수정전과 비교하며 공부
    //findByPk
    //const find = await Member.findOne({ where: { id } });
    const result = await Member.findByPk(id, {
        attributes: ['userId', 'password'],
        include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
    });
    console.log('result', result);
    res.json({ success: true, result });
};
//정보수정
exports.update = async (req, res) => {
    const { pw, username, age, email } = req.body;
    const { id } = req.session.member;
    const result = await Member.update({ password: pw }, { where: { id } });
    console.log('update', result);
    const result2 = await Profile.update({ username, age, email }, { where: { memberId: id } });
    res.json({ success: true });
};
//회원탈퇴
exports.delete = async (req, res) => {
    const { id } = req.body;
    const result = await Member.destroy({ where: { id } });
    console.log('delete', result);
    res.json({ success: true });
};

//로그아웃
exports.logout = (req, res) => {
    if (req.session.member) {
        //세션제거
        req.session.destroy(() => {
            res.json({ success: true });
        });
    } else {
        res.json({ success: false, message: '로그인 상태가 아닙니다.' });
    }
};
