const { Sequelize } = require('sequelize');
const { sqlLogger } = require('../util/logger')

const sequelize = new Sequelize('myblog', 'root', '5201314', {
    host: 'localhost',
    dialect: 'mysql',
    logging: (msg) => {
        sqlLogger.debug(msg);
    }
});


module.exports = sequelize;