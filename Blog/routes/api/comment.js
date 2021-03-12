const express = require('express');
const router = express.Router();
const commentServ = require('../../Services/commentService');
const { asyncHandler } = require('../getSendResult');

router.get('/', asyncHandler(async (req, res) => {
    return await commentServ.getComments();
}));

router.post('/', asyncHandler(async (req, res) => {
    return await commentServ.addComment(req.body)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    return await commentServ.deleComment(req.params.id)
}))

router.get('/:id', asyncHandler(async (req, res) => {
    return await commentServ.getCommentsById(req.params.id)
}))



module.exports = router;