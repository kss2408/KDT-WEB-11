const { DataTypes } = require('sequelize');

// 목적 : kdt11 데이터안에 서버실행시키면서 POST 라는 테이블을 생성시키려고 하는것.

const PostModel = (sequelize) => {
    return sequelize.define('post', {
        //컬럼 정의
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30), // 스트링기본값 255
            allowNull: false,
        },
        content: DataTypes.TEXT('medium'),
    });
};

module.exports = PostModel;
