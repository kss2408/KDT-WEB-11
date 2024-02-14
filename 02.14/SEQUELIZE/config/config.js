require('dotenv').config();

module.exports = {
    development: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: 'mysql',
        port: process.env.PORT,
    },
    test: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: 'mysql',
        port: process.env.PORT,
    },
    // 다른 데이터베이스를 이용하는것.! 개념정립하자.
    production: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.HOST,
        dialect: 'mysql',
        port: process.env.PORT,
    },
};
