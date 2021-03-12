const sequelize = require('./db');
const { DataTypes } = require('sequelize');
const Article = sequelize.define('Article', {
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imgurl: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING(20),
        allowNull: false
    }

}, {
    createdAt: true,
    updatedAt: false,
    paranoid: true
})

module.exports = Article;