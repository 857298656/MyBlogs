require('./Admin');
require('./Article')
require('./Comment');
const sequelize = require('./db');
sequelize.sync({
    alter: true
}).then(() => {
    console.log('同步完成')
})