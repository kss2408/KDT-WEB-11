const { DataTypes } = require('sequelize');

//쿼리문 말고 이걸 쓰는 이유 : 오류 절감, 코드량 감소, 정해진 형태가 어느정도 있다.

const MemberModel = (sequelize) => {
    const Member = sequelize.define(
        'member',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false, //NOT NULL
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
        },
        {
            tableName: 'member',
            freezeTableName: true,
            timestamps: false,
        }
    );

    return Member;
};

module.exports = MemberModel;
