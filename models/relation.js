const Admin = require('./Admin');
const Article = require('./Article');
const Comment = require('./Comment');
Admin.hasMany(Article);
Article.hasMany(Comment);