require('dotenv').config();
const mysql = require('mysql2/promise');
//mysql연결
//createConnection : 단일연결
//요청할때마다 새로운 연결을 생성
//적은수의 동시연결이나 단순한 데이터베이스 쿼리일때 사용
//createPool : 다중연결
//연결 풀을 생성. 풀은 미리 정의된 수의 연결을 생성하고 관리
//요청이 들어오면 연결 풀에서 사용가능한 연결을 제공. 작업완료 후 해당연결을 반환
//연결이 필요하지 않을경우 자동으로 반환, 풀의 연결 수를 제한하고 관리를 최적화
//일반적인 웹서비스에 적합

const conn = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    connectionLimit: 15, //최대연결수(기본값10)
});

exports.signup = async (data) => {
    const query = 'INSERT INTO member (userid, password, username) VALUES (?,?,?)';
    const [result] = await conn.query(query, [data.id, data.pw, data.username]);
    return result;
};

exports.Mlogin = async (data) => {
    const query = 'SELECT * FROM member WHERE userid=? AND password=?';
    const [rows] = await conn.query(query, [data.id, data.pw]);
    return rows;
};

exports.Minfo = async (id) => {
    const query = 'SELECT * FROM member WHERE id=?';
    const [rows] = await conn.query(query, [id]);
    return rows;
};

exports.Mupdate = async (data) => {
    const query = 'UPDATE member SET password=?, username=? WHERE id=?';
    const [result] = await conn.query(query, [data.pw, data.username, data.id]);
    return result;
};

exports.Mdelete = async (data) => {
    const query = 'DELETE FROM member WHERE id=?';
    const [result] = await conn.query(query, [data.id]);
    return result;
};
