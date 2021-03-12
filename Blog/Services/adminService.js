const Admin = require('../models/Admin');
const validate = require('validate.js');
const { pick } = require('../util/propertyHelper')
exports.addAdmin = async function (adminObj) {
    adminObj = pick(adminObj, "loginId", "loginPwd");
    const rule = {
        loginId: {
            presence: {
                allowEmpty: false,
            },
            type: "string",
            length: {
                maximum: 8,
            }
        },
        loginPwd: {
            presence: {
                allowEmpty: false,
            },
            type: "string",
            length: {
                minimum: 6,
                maximum: 16,
            }
        }
    }
    await validate.async(adminObj, rule);
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
}

exports.deleteAdmin = async function (id) {
    const result = await Admin.destroy({
        where: {
            id
        }
    });

    return result;
}

exports.updateAdmin = async function (id, adminObj) {
    const result = await Admin.update(adminObj, {
        where: {
            id,
        }
    });
    return result;
}

exports.login = async function (loginId, loginPwd) {
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd
        }
    });
    if (result && result.loginId == loginId && result.loginPwd == loginPwd) {
        return result.toJSON();
    }
    return null;
}

exports.getAdminById = async function (id) {
    const result = await Admin.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

exports.getAdmins = async function () {
    const result = await Admin.findAll();
    return JSON.parse(JSON.stringify(result));
}