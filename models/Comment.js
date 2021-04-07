const sequelize = require('./db');
const { DataTypes } = require('sequelize');
const Comment = sequelize.define('Comment', {
    commentId: {
        type: DataTypes.STRING(8),
        allowNull: false
    },
    replyId: {
        type: DataTypes.STRING(8),
    },
    replyWhoId: {
        type: DataTypes.STRING(8),
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    flag: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    createdAt: true,
    updatedAt: false,
    paranoid: true
}
)

module.exports = Comment;