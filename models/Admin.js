const sequelize = require('./db');
const { DataTypes } = require('sequelize');
const Admin = sequelize.define('Admin', {
    loginId: {
        type: DataTypes.STRING(8),
        unique: true,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING(16),
        allowNull: false,
    },
}, {
    createdAt: true,
    updatedAt: false,
    paranoid: true
});



module.exports = Admin;