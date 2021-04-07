const Mock = require('mockjs');
const Admin = require('../models/Admin');

const result = Mock.mock({
    "datas|80-100": [{
        loginId: "@word(1,8)",
        loginPwd: /[\d\w]{6,16}/,
    }]
}).datas;

Admin.bulkCreate(result);
