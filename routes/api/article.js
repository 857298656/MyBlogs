const express = require('express');
const { async } = require('validate.js');
const router = express.Router();
const articleServ = require('../../Services/articleService');
const { asyncHandler } = require('../getSendResult');

router.get('/', asyncHandler(async (req, res) => {
    return await articleServ.getArticles();
}));

router.get('/:id', asyncHandler(async (req, res) => {
    return await articleServ.getArticleById(req.params.id);
}));

router.post("/add", asyncHandler(async (req, res) => {
    return await articleServ.addArticle(req.body);
}));

router.delete("/:id", asyncHandler(async (req, res) => {
    return await articleServ.deleArticle(req.params.id);
}));

router.put("/:id", asyncHandler(async (req, res, next) => {
    return await articleServ.updateArticles(req.params.id, req.body);
}));

module.exports = router;