const Mock = require('mockjs');
const Article = require('../models/Article')
const result = Mock.mock({
    "datas|100-200": [{
        title: "@ctitle(6,10)",
        content: "@cparagraph(10, 20)",
        imgurl: "@image('637x330', @color, @csentence)",
        author: "@cname",
        "AdminId|1-67": 0,
    }]
}).datas;

Article.bulkCreate(result);

