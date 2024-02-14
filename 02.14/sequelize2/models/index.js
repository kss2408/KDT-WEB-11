'use strict';

//필요 없는것들 삭제한 코드.
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

// 환경변수 사용하니까 남겨놓은것
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//모델
db.Post = require('./post')(sequelize); // controller/post.js에서 대문자 P사용하는거 체크

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
