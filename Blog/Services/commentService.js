const Comment = require('../models/Comment');
const Article = require('../models/Article');
const validate = require('validate.js');
const { pick } = require('../util/propertyHelper');

exports.addComment = async function (commentObj) {
    commentObj = pick(commentObj, "commentId", "replyId", "replyWhoId", "content", "flag", "ArticleId");
    validate.validators.articleExits = async function (value) {
        const a = Article.findByPk(value);
        if (a) {
            return;
        }
        return "is not exist"
    }
    const rule = {
        commentId: {
            presence: {
                allowEmpty: false,
            },
            type: "string",
            length: {
                minimum: 1,
                maximum: 8,
            }
        },
        replyId: {
            presence: {
                allowEmpty: true,
            },
            type: "string",
            length: {
                maximum: 8,
            }
        },
        replyWhoId: {
            presence: {
                allowEmpty: true,
            },
            type: "string",
            length: {
                maximum: 8,
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
        flag: {
            presence: true,
            type: "boolean",
        },
        ArticleId: {
            presence: true,
            numericality: {
                onlyInteger: true,
                strict: false,
            },
            articleExits: true,
        }
    }
    await validate.async(commentObj, rule);

    const result = await Comment.create(commentObj);

    return result.toJSON();
}

exports.deleComment = async function (id) {
    const result = await Comment.destroy({
        where: {
            id
        }
    });
    return result;
}

exports.updateComment = async function (id, commentObj) {
    const result = await Comment.update(commentObj, {
        id
    });
    return result;
}

exports.getComments = async function () {
    const result = await Comment.findAll();
    const count = await Comment.count();
    const datas = JSON.parse(JSON.stringify(result))

    return {
        count,
        datas
    }
}

exports.getCommentsById = async function (id) {
    const result = await Comment.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}