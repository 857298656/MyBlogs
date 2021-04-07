const express = require('express')
const { async } = require('validate.js')
const router = express.Router()
const adminServ = require('../../Services/adminService')
const { asyncHandler } = require('../getSendResult')
const jwt = require('../jwt')

router.post(
    '/login',
    asyncHandler(async (req, res) => {
        const result = await adminServ.login(req.body.loginId, req.body.loginPwd)
        if (result) {
            let value = result.id
            jwt.publish(res, undefined, { id: value })
        }
        return result;
    })
);

router.post("/add", asyncHandler(async (req, res) => {
    return await adminServ.addAdmin(req.body);
}));

router.get("/whoami", asyncHandler(async (req, res) => {
    return await adminServ.getAdminById(req.userId);
}));

router.get('/', asyncHandler(async (req, res) => {
    return await adminServ.getAdmins();
}))
module.exports = router;
