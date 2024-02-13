const mysql = require('mysql2/promise'); //npm i mysql2
//mysql 연결
const getConn = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'kss2408',
        password: 'na159357',
        database: 'kdt11',
        port: 3306,
    });
};

//쿼리문
const allVisitor = async () => {
    const conn = await getConn();
    const query = `SELECT * FROM visitor`;
    const rows = await conn.query(query);
    await conn.end();
    return rows;
};

/*
const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'kss2408',
    password: 'na159357',
    database: 'kdt11',
    port: 3306,
});

conn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('mysql connect');
});

//쿼리문 작성
const allVisitor = (cb) => {
    const query = `SELECT * FROM visitor`;
    conn.query(query, (err, rows) => {
        console.log(rows);
    });
};   */

module.exports = { allVisitor };
