// const { DataTypes } = require('sequelize');

const CommentModel = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        content: DataTypes.TEXT('medium'),
    });
};

module.exports = CommentModel;
