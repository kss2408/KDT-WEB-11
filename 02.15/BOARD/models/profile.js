const { DataTypes } = require('sequelize');

const ProfileModel = (sequelize) => {
    return sequelize.define('profile', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        age: DataTypes.INTEGER,
        email: DataTypes.STRING,
        // member: DataTypes.INTEGER,
    });
};

module.exports = ProfileModel;
