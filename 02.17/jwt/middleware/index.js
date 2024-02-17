const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
    const header = req.headers.authorization;
    //req.headres['autorization']  === 같은것.
    const [_, token] = header.split(' ');

    if (token === null) {
        return res.status(401).json({ success: false });
    }

    //jwt 인증
    jwt.verify(token, process.env.SECRET, (err, decode) => {
        if (err) {
            return res.status(403).json({ success: false });
        }
        req.user = decode; //다음 미들웨어로 전달하는 값. 동일해야한다.
        next();
    });
};
