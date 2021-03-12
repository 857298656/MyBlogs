const Article = require('../models/Article');
const Admin = require('../models/Admin');
const validate = require('validate.js');
const { pick } = require('../util/propertyHelper');
const { Op } = require('sequelize');
const { async } = require('validate.js');

exports.addArticle = async function (articleObj) {
    articleObj = pick(articleObj, "title", "content", "imgurl", "author", "AdminId");
    validate.validators.adminExits = async function (value) {
        const a = Admin.findByPk(value);
        if (a) {
            return;
        }
        return "is not exist"
    }
    const rule = {
        title: {
            presence: {
                allowEmpty: false,
            },
            type: "string",
            length: {
                minimum: 1,
                maximum: 50,
            }
        },
        content: {
            presence: {
                allowEmpty: false,
            },
            type: "string",
            length: {
                minimum: 1,
            }
        },
        imgurl: {
            presence: true,
            url: {
                allowLocal: true,
            },
            type: "string"
        },
        author: {
            presence: {
                allowEmpty: false,
            },
            type: "string",
            length: {
                minimum: 2,
            }
        },
        AdminId: {
            presence: true,
            numericality: {
                onlyInteger: true,
                strict: false,
            },
            adminExits: true,
        }
    }
    await validate.async(articleObj, rule);
    const ins = await Article.create(articleObj);
    return ins.toJSON();
}

exports.deleArticle = async function (id) {
    const result = await Article.destroy({
        where: {
            id,
        }
    });
    return result;
}

exports.updateArticles = async function (id, articleObj) {
    const result = await Article.update(articleObj, {
        id,
    });
    return result;
}

exports.getArticles = async function () {
    const result = await Article.findAll();
    const count = await Article.count();
    const datas = JSON.parse(JSON.stringify(result)).reverse();

    return {
        count,
        datas,
    }
}

exports.getArticleById = async function (id) {
    const result = await Article.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}
